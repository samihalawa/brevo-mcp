#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import fetch from 'node-fetch';

// Types
export interface BrevoContact {
  email?: string;
  id?: number;
  emailBlacklisted?: boolean;
  smsBlacklisted?: boolean;
  listIds?: number[];
  attributes?: Record<string, any>;
}

export interface EmailOptions {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  sender?: {
    name: string;
    email: string;
  };
}

export interface ContactAttribute {
  name: string;
  category: string;
  type: string;
  value?: string;
}

export class BrevoAPI {
  private apiKey: string;
  private defaultSender: { name: string; email: string };
  private baseUrl = 'https://api.brevo.com/v3';

  constructor(apiKey: string, defaultSenderEmail: string, defaultSenderName?: string) {
    this.apiKey = apiKey;
    this.defaultSender = {
      email: defaultSenderEmail,
      name: defaultSenderName || defaultSenderEmail.split('@')[0]
    };
  }

  private async makeRequest(endpoint: string, method: string = 'GET', body?: any) {
    const headers = {
      'accept': 'application/json',
      'api-key': this.apiKey,
      'content-type': 'application/json'
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Brevo API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return method === 'DELETE' ? null : await response.json();
  }

  // Contact Management
  async getContact(identifier: string | number): Promise<BrevoContact> {
    const endpoint = typeof identifier === 'number' 
      ? `/contacts/${identifier}`
      : `/contacts/${encodeURIComponent(identifier)}`;
    return this.makeRequest(endpoint) as Promise<BrevoContact>;
  }

  async updateContact(id: number, data: Partial<BrevoContact>): Promise<void> {
    await this.makeRequest(`/contacts/${id}`, 'PUT', data);
  }

  async createAttribute(name: string, type: 'text' | 'date' | 'float' | 'boolean' = 'text'): Promise<void> {
    await this.makeRequest(`/contacts/attributes/normal/${name}`, 'POST', { type });
  }

  async getAttributes(): Promise<ContactAttribute[]> {
    const response = await this.makeRequest('/contacts/attributes') as any;
    return response.attributes;
  }

  // Email Management
  async sendEmail(options: EmailOptions): Promise<{ messageId: string }> {
    const emailData = {
      ...options,
      sender: options.sender || this.defaultSender
    };
    return this.makeRequest('/smtp/email', 'POST', emailData) as Promise<{ messageId: string }>;
  }

  async getEmailEvents(messageId?: string, email?: string): Promise<any[]> {
    let endpoint = '/smtp/statistics/events';
    const params = [];
    
    if (messageId) params.push(`messageId=${encodeURIComponent(messageId)}`);
    if (email) params.push(`email=${encodeURIComponent(email)}`);
    
    if (params.length > 0) {
      endpoint += `?${params.join('&')}`;
    }
    
    const response = await this.makeRequest(endpoint) as any;
    return response.events;
  }

  // Sender Management
  async getSenders() {
    return this.makeRequest('/senders');
  }

  // Templates for Beautiful Emails
  static getDefaultTemplate(title: string, content: string, accentColor = '#667eea'): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, ${accentColor} 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .signature {
              color: #666;
              font-style: italic;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #eee;
            }
          </style>
        </head>
        <body>
          <div class='container'>
            <div class='header'>
              <h1>${title}</h1>
            </div>
            <div class='content'>
              ${content}
            </div>
          </div>
        </body>
      </html>
    `;
  }

  // Utility Functions
  static formatEmailSignature(name: string, title?: string, extra?: string): string {
    let signature = `<p class="signature">Best regards,<br>${name}`;
    if (title) signature += `<br><span style="color: #666;">${title}</span>`;
    if (extra) signature += `<br><span style="color: #666;">${extra}</span>`;
    signature += '</p>';
    return signature;
  }
}

// MCP Server Implementation
class BrevoMCPServer {
  private server: Server;
  private brevoAPI: BrevoAPI | null = null;

  constructor() {
    this.server = new Server(
      {
        name: 'brevo-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  private setupErrorHandling(): void {
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupToolHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'initialize_brevo',
            description: 'Initialize Brevo API connection with API key and default sender',
            inputSchema: {
              type: 'object',
              properties: {
                apiKey: {
                  type: 'string',
                  description: 'Your Brevo API key',
                },
                defaultSenderEmail: {
                  type: 'string',
                  description: 'Default sender email address',
                },
                defaultSenderName: {
                  type: 'string',
                  description: 'Default sender name',
                },
              },
              required: ['apiKey', 'defaultSenderEmail'],
            },
          },
          {
            name: 'send_email',
            description: 'Send an email using Brevo API',
            inputSchema: {
              type: 'object',
              properties: {
                to: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      email: { type: 'string' },
                      name: { type: 'string' },
                    },
                    required: ['email'],
                  },
                  description: 'Recipients list',
                },
                subject: {
                  type: 'string',
                  description: 'Email subject',
                },
                htmlContent: {
                  type: 'string',
                  description: 'HTML content of the email',
                },
                sender: {
                  type: 'object',
                  properties: {
                    email: { type: 'string' },
                    name: { type: 'string' },
                  },
                  description: 'Override default sender (optional)',
                },
              },
              required: ['to', 'subject', 'htmlContent'],
            },
          },
          {
            name: 'get_contact',
            description: 'Get contact information by email or ID',
            inputSchema: {
              type: 'object',
              properties: {
                identifier: {
                  oneOf: [
                    { type: 'string' },
                    { type: 'number' },
                  ],
                  description: 'Contact email or ID',
                },
              },
              required: ['identifier'],
            },
          },
          {
            name: 'update_contact',
            description: 'Update contact information',
            inputSchema: {
              type: 'object',
              properties: {
                id: {
                  type: 'number',
                  description: 'Contact ID',
                },
                data: {
                  type: 'object',
                  description: 'Contact data to update',
                },
              },
              required: ['id', 'data'],
            },
          },
          {
            name: 'create_attribute',
            description: 'Create a new contact attribute',
            inputSchema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Attribute name',
                },
                type: {
                  type: 'string',
                  enum: ['text', 'date', 'float', 'boolean'],
                  description: 'Attribute type',
                  default: 'text',
                },
              },
              required: ['name'],
            },
          },
          {
            name: 'get_attributes',
            description: 'Get all contact attributes',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'get_email_events',
            description: 'Get email events for tracking',
            inputSchema: {
              type: 'object',
              properties: {
                messageId: {
                  type: 'string',
                  description: 'Message ID to filter events',
                },
                email: {
                  type: 'string',
                  description: 'Email address to filter events',
                },
              },
            },
          },
          {
            name: 'get_senders',
            description: 'Get all verified senders',
            inputSchema: {
              type: 'object',
              properties: {},
            },
          },
          {
            name: 'create_beautiful_email',
            description: 'Create a beautiful HTML email using default template',
            inputSchema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  description: 'Email title for header',
                },
                content: {
                  type: 'string',
                  description: 'Email content (can include HTML)',
                },
                accentColor: {
                  type: 'string',
                  description: 'Accent color for the template (hex code)',
                  default: '#667eea',
                },
                senderName: {
                  type: 'string',
                  description: 'Sender name for signature',
                },
                senderTitle: {
                  type: 'string',
                  description: 'Sender title for signature',
                },
                extraInfo: {
                  type: 'string',
                  description: 'Extra info for signature',
                },
              },
              required: ['title', 'content'],
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'initialize_brevo':
            return await this.handleInitializeBrevo(args);
          case 'send_email':
            return await this.handleSendEmail(args);
          case 'get_contact':
            return await this.handleGetContact(args);
          case 'update_contact':
            return await this.handleUpdateContact(args);
          case 'create_attribute':
            return await this.handleCreateAttribute(args);
          case 'get_attributes':
            return await this.handleGetAttributes();
          case 'get_email_events':
            return await this.handleGetEmailEvents(args);
          case 'get_senders':
            return await this.handleGetSenders();
          case 'create_beautiful_email':
            return await this.handleCreateBeautifulEmail(args);
          default:
            throw new McpError(
              ErrorCode.MethodNotFound,
              `Unknown tool: ${name}`
            );
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new McpError(
          ErrorCode.InternalError,
          `Error executing ${name}: ${errorMessage}`
        );
      }
    });
  }

  private ensureInitialized(): void {
    if (!this.brevoAPI) {
      throw new McpError(
        ErrorCode.InvalidRequest,
        'Brevo API not initialized. Please call initialize_brevo first.'
      );
    }
  }

  private async handleInitializeBrevo(args: any) {
    const { apiKey, defaultSenderEmail, defaultSenderName } = args;
    
    this.brevoAPI = new BrevoAPI(apiKey, defaultSenderEmail, defaultSenderName);
    
    return {
      content: [
        {
          type: 'text',
          text: `Brevo API initialized successfully with sender: ${defaultSenderEmail}`,
        },
      ],
    };
  }

  private async handleSendEmail(args: any) {
    this.ensureInitialized();
    const result = await this.brevoAPI!.sendEmail(args);
    
    return {
      content: [
        {
          type: 'text',
          text: `Email sent successfully. Message ID: ${result.messageId}`,
        },
      ],
    };
  }

  private async handleGetContact(args: any) {
    this.ensureInitialized();
    const contact = await this.brevoAPI!.getContact(args.identifier);
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(contact, null, 2),
        },
      ],
    };
  }

  private async handleUpdateContact(args: any) {
    this.ensureInitialized();
    await this.brevoAPI!.updateContact(args.id, args.data);
    
    return {
      content: [
        {
          type: 'text',
          text: `Contact ${args.id} updated successfully`,
        },
      ],
    };
  }

  private async handleCreateAttribute(args: any) {
    this.ensureInitialized();
    await this.brevoAPI!.createAttribute(args.name, args.type || 'text');
    
    return {
      content: [
        {
          type: 'text',
          text: `Attribute '${args.name}' created successfully`,
        },
      ],
    };
  }

  private async handleGetAttributes() {
    this.ensureInitialized();
    const attributes = await this.brevoAPI!.getAttributes();
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(attributes, null, 2),
        },
      ],
    };
  }

  private async handleGetEmailEvents(args: any) {
    this.ensureInitialized();
    const events = await this.brevoAPI!.getEmailEvents(args.messageId, args.email);
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(events, null, 2),
        },
      ],
    };
  }

  private async handleGetSenders() {
    this.ensureInitialized();
    const senders = await this.brevoAPI!.getSenders();
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(senders, null, 2),
        },
      ],
    };
  }

  private async handleCreateBeautifulEmail(args: any) {
    const { title, content, accentColor = '#667eea', senderName, senderTitle, extraInfo } = args;
    
    let htmlContent = BrevoAPI.getDefaultTemplate(title, content, accentColor);
    
    if (senderName) {
      const signature = BrevoAPI.formatEmailSignature(senderName, senderTitle, extraInfo);
      htmlContent = htmlContent.replace('</div>', `${signature}</div>`);
    }
    
    return {
      content: [
        {
          type: 'text',
          text: `Beautiful email template created! Use this HTML content in the send_email tool:\n\n${htmlContent}`,
        },
      ],
    };
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Brevo MCP server running on stdio');
  }
}

// Start the server
const server = new BrevoMCPServer();
server.run().catch(console.error);

export default BrevoAPI;