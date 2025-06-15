#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';

import * as brevo from '@getbrevo/brevo';

// MCP Server Implementation
class BrevoMCPServer {
  private server: Server;
  private apiKey: string;
  private defaultSender: { name: string; email: string };

  // API instances
  private contactsApi: any;
  private transactionalEmailsApi: any;
  private emailCampaignsApi: any;
  private smsCampaignsApi: any;
  private transactionalSMSApi: any;
  private conversationsApi: any;
  private webhooksApi: any;
  private accountApi: any;
  private ecommerceApi: any;
  private sendersApi: any;
  private filesApi: any;
  private domainsApi: any;

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

    // Initialize from environment variables
    this.apiKey = process.env.BREVO_API_KEY || '';
    this.defaultSender = {
      email: process.env.BREVO_DEFAULT_SENDER_EMAIL || '',
      name: process.env.BREVO_DEFAULT_SENDER_NAME || ''
    };

    if (!this.apiKey) {
      console.error('BREVO_API_KEY environment variable is required');
      process.exit(1);
    }

    this.initializeBrevoAPIs();
    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  private initializeBrevoAPIs(): void {
    // Initialize all Brevo API instances with authentication
    this.contactsApi = new brevo.ContactsApi();
    this.transactionalEmailsApi = new brevo.TransactionalEmailsApi();
    this.emailCampaignsApi = new brevo.EmailCampaignsApi();
    this.smsCampaignsApi = new brevo.SMSCampaignsApi();
    this.transactionalSMSApi = new brevo.TransactionalSMSApi();
    this.conversationsApi = new brevo.ConversationsApi();
    this.webhooksApi = new brevo.WebhooksApi();
    this.accountApi = new brevo.AccountApi();
    this.ecommerceApi = new brevo.EcommerceApi();
    this.sendersApi = new brevo.SendersApi();
    this.filesApi = new brevo.FilesApi();
    this.domainsApi = new brevo.DomainsApi();

    // Set API key for all instances
    const apis = [
      this.contactsApi, this.transactionalEmailsApi, this.emailCampaignsApi,
      this.smsCampaignsApi, this.transactionalSMSApi, this.conversationsApi,
      this.webhooksApi, this.accountApi, this.ecommerceApi, this.sendersApi,
      this.filesApi, this.domainsApi
    ];

    apis.forEach(api => {
      const apiKeyAuth = api.authentications['api-key'];
      if (apiKeyAuth) {
        apiKeyAuth.apiKey = this.apiKey;
      }
    });
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
            name: 'contacts',
            description: 'Comprehensive contact management - create, update, get, bulk import, manage lists and attributes',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'get', 'create', 'update', 'delete', 'bulk_import', 'export',
                    'add_to_list', 'remove_from_list', 'get_lists', 'create_list',
                    'get_attributes', 'create_attribute', 'update_attribute'
                  ],
                  description: 'Contact operation to perform',
                },
                identifier: {
                  type: 'string',
                  description: 'Contact email or ID (for get, update, delete operations)',
                },
                contactData: {
                  type: 'object',
                  description: 'Contact information for create/update operations',
                },
                contacts: {
                  type: 'array',
                  description: 'Array of contacts for bulk operations',
                },
                listId: {
                  type: 'number',
                  description: 'List ID for list operations',
                },
                listData: {
                  type: 'object',
                  description: 'List information for create list operation',
                },
                attributeName: {
                  type: 'string',
                  description: 'Attribute name for attribute operations',
                },
                attributeData: {
                  type: 'object',
                  description: 'Attribute data for create/update attribute operations',
                },
              },
              required: ['operation'],
            },
          },
          {
            name: 'email',
            description: 'Transactional email operations - send emails, manage templates, track events',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'send', 'send_template', 'get_events', 'get_templates',
                    'create_template', 'update_template', 'delete_template',
                    'get_blocked_domains', 'get_email_statistics'
                  ],
                  description: 'Email operation to perform',
                },
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
                textContent: {
                  type: 'string',
                  description: 'Text content of the email',
                },
                templateId: {
                  type: 'number',
                  description: 'Template ID for template operations',
                },
                params: {
                  type: 'object',
                  description: 'Template parameters for personalization',
                },
                sender: {
                  type: 'object',
                  properties: {
                    email: { type: 'string' },
                    name: { type: 'string' },
                  },
                  description: 'Sender information',
                },
                messageId: {
                  type: 'string',
                  description: 'Message ID for event tracking',
                },
                email: {
                  type: 'string',
                  description: 'Email address for event filtering',
                },
              },
              required: ['operation'],
            },
          },
          {
            name: 'campaigns',
            description: 'Email and SMS campaign management - create, update, send, schedule campaigns',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'get_email_campaigns', 'create_email_campaign', 'update_email_campaign',
                    'send_email_campaign', 'schedule_email_campaign', 'delete_email_campaign',
                    'get_sms_campaigns', 'create_sms_campaign', 'update_sms_campaign',
                    'send_sms_campaign', 'schedule_sms_campaign', 'delete_sms_campaign',
                    'get_campaign_statistics'
                  ],
                  description: 'Campaign operation to perform',
                },
                campaignId: {
                  type: 'number',
                  description: 'Campaign ID for specific campaign operations',
                },
                campaignData: {
                  type: 'object',
                  description: 'Campaign configuration data',
                },
                type: {
                  type: 'string',
                  enum: ['email', 'sms'],
                  description: 'Campaign type',
                },
                status: {
                  type: 'string',
                  enum: ['draft', 'sent', 'archive', 'queued', 'suspended'],
                  description: 'Campaign status filter',
                },
                limit: {
                  type: 'number',
                  description: 'Number of campaigns to retrieve',
                  default: 50,
                },
                offset: {
                  type: 'number',
                  description: 'Offset for pagination',
                  default: 0,
                },
              },
              required: ['operation'],
            },
          },
          {
            name: 'sms',
            description: 'SMS operations - send transactional SMS, manage SMS contacts',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'send', 'send_batch', 'get_events', 'get_statistics'
                  ],
                  description: 'SMS operation to perform',
                },
                recipient: {
                  type: 'string',
                  description: 'Phone number for single SMS',
                },
                recipients: {
                  type: 'array',
                  description: 'Phone numbers for batch SMS',
                },
                content: {
                  type: 'string',
                  description: 'SMS message content',
                },
                sender: {
                  type: 'string',
                  description: 'SMS sender name/number',
                },
                type: {
                  type: 'string',
                  enum: ['transactional', 'marketing'],
                  description: 'SMS type',
                  default: 'transactional',
                },
                tag: {
                  type: 'string',
                  description: 'Tag for SMS tracking',
                },
              },
              required: ['operation'],
            },
          },
          {
            name: 'conversations',
            description: 'Chat and conversation management - handle customer conversations',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'get_conversations', 'get_conversation', 'get_messages',
                    'send_message', 'update_conversation'
                  ],
                  description: 'Conversation operation to perform',
                },
                conversationId: {
                  type: 'string',
                  description: 'Conversation ID',
                },
                message: {
                  type: 'string',
                  description: 'Message content to send',
                },
                agentId: {
                  type: 'string',
                  description: 'Agent ID for conversation assignment',
                },
                status: {
                  type: 'string',
                  enum: ['open', 'closed'],
                  description: 'Conversation status',
                },
              },
              required: ['operation'],
            },
          },
          {
            name: 'webhooks',
            description: 'Webhook management - create, update, delete webhooks for event notifications',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'get_webhooks', 'create_webhook', 'update_webhook',
                    'delete_webhook', 'get_webhook'
                  ],
                  description: 'Webhook operation to perform',
                },
                webhookId: {
                  type: 'number',
                  description: 'Webhook ID for specific operations',
                },
                url: {
                  type: 'string',
                  description: 'Webhook URL',
                },
                events: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'List of events to subscribe to',
                },
                description: {
                  type: 'string',
                  description: 'Webhook description',
                },
                type: {
                  type: 'string',
                  enum: ['transactional', 'marketing'],
                  description: 'Webhook type',
                },
              },
              required: ['operation'],
            },
          },
          {
            name: 'account',
            description: 'Account management - get account info, manage senders, domains, folders',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'get_account', 'get_senders', 'create_sender', 'update_sender',
                    'delete_sender', 'get_domains', 'create_domain', 'validate_domain',
                    'get_folders', 'create_folder', 'update_folder', 'delete_folder'
                  ],
                  description: 'Account operation to perform',
                },
                senderId: {
                  type: 'number',
                  description: 'Sender ID for sender operations',
                },
                senderData: {
                  type: 'object',
                  description: 'Sender information',
                },
                domain: {
                  type: 'string',
                  description: 'Domain name for domain operations',
                },
                folderId: {
                  type: 'number',
                  description: 'Folder ID for folder operations',
                },
                folderData: {
                  type: 'object',
                  description: 'Folder information',
                },
              },
              required: ['operation'],
            },
          },
          {
            name: 'ecommerce',
            description: 'E-commerce integration - manage orders, products, track events',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'create_order', 'get_order', 'get_orders', 'update_order',
                    'get_products', 'create_product', 'update_product', 'delete_product',
                    'get_categories', 'create_category', 'update_category', 'delete_category'
                  ],
                  description: 'E-commerce operation to perform',
                },
                orderId: {
                  type: 'string',
                  description: 'Order ID',
                },
                orderData: {
                  type: 'object',
                  description: 'Order information',
                },
                productId: {
                  type: 'string',
                  description: 'Product ID',
                },
                productData: {
                  type: 'object',
                  description: 'Product information',
                },
                categoryId: {
                  type: 'string',
                  description: 'Category ID',
                },
                categoryData: {
                  type: 'object',
                  description: 'Category information',
                },
                limit: {
                  type: 'number',
                  description: 'Number of items to retrieve',
                  default: 50,
                },
                offset: {
                  type: 'number',
                  description: 'Offset for pagination',
                  default: 0,
                },
              },
              required: ['operation'],
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'contacts':
            return await this.handleContacts(args);
          case 'email':
            return await this.handleEmail(args);
          case 'campaigns':
            return await this.handleCampaigns(args);
          case 'sms':
            return await this.handleSMS(args);
          case 'conversations':
            return await this.handleConversations(args);
          case 'webhooks':
            return await this.handleWebhooks(args);
          case 'account':
            return await this.handleAccount(args);
          case 'ecommerce':
            return await this.handleEcommerce(args);
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

  // Contact operations handler
  private async handleContacts(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'get':
        const contact = await this.contactsApi.getContactInfo(args.identifier);
        return {
          content: [{ type: 'text', text: JSON.stringify(contact.body, null, 2) }]
        };

      case 'create':
        const createContact = new brevo.CreateContact();
        Object.assign(createContact, args.contactData);
        const createdContact = await this.contactsApi.createContact(createContact);
        return {
          content: [{ type: 'text', text: `Contact created with ID: ${createdContact.body.id}` }]
        };

      case 'update':
        const updateContact = new brevo.UpdateContact();
        Object.assign(updateContact, args.contactData);
        await this.contactsApi.updateContact(args.identifier, updateContact);
        return {
          content: [{ type: 'text', text: `Contact ${args.identifier} updated successfully` }]
        };

      case 'bulk_import':
        const requestContactImport = new brevo.RequestContactImport();
        Object.assign(requestContactImport, args.contacts);
        const importResult = await this.contactsApi.importContacts(requestContactImport);
        return {
          content: [{ type: 'text', text: `Bulk import initiated: ${JSON.stringify(importResult.body, null, 2)}` }]
        };

      case 'get_lists':
        const lists = await this.contactsApi.getLists();
        return {
          content: [{ type: 'text', text: JSON.stringify(lists.body, null, 2) }]
        };

      case 'create_list':
        const createList = new brevo.CreateList();
        Object.assign(createList, args.listData);
        const newList = await this.contactsApi.createList(createList);
        return {
          content: [{ type: 'text', text: `List created with ID: ${newList.body.id}` }]
        };

      case 'get_attributes':
        const attributes = await this.contactsApi.getAttributes();
        return {
          content: [{ type: 'text', text: JSON.stringify(attributes.body, null, 2) }]
        };

      case 'create_attribute':
        const createAttribute = new brevo.CreateAttribute();
        Object.assign(createAttribute, args.attributeData);
        await this.contactsApi.createAttribute('normal', args.attributeName, createAttribute);
        return {
          content: [{ type: 'text', text: `Attribute '${args.attributeName}' created successfully` }]
        };

      default:
        throw new Error(`Unknown contacts operation: ${operation}`);
    }
  }

  // Email operations handler
  private async handleEmail(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'send':
        const sendSmtpEmail = new brevo.SendSmtpEmail();
        sendSmtpEmail.to = args.to;
        sendSmtpEmail.subject = args.subject;
        sendSmtpEmail.htmlContent = args.htmlContent;
        sendSmtpEmail.textContent = args.textContent;
        sendSmtpEmail.sender = args.sender || this.defaultSender;
        
        const emailResult = await this.transactionalEmailsApi.sendTransacEmail(sendSmtpEmail);
        return {
          content: [{ type: 'text', text: `Email sent successfully. Message ID: ${emailResult.body.messageId}` }]
        };

      case 'send_template':
        const sendTemplateEmail = new brevo.SendSmtpEmail();
        sendTemplateEmail.to = args.to;
        sendTemplateEmail.templateId = args.templateId;
        sendTemplateEmail.params = args.params;
        
        const templateResult = await this.transactionalEmailsApi.sendTransacEmail(sendTemplateEmail);
        return {
          content: [{ type: 'text', text: `Template email sent. Message ID: ${templateResult.body.messageId}` }]
        };

      case 'get_events':
        const events = await this.transactionalEmailsApi.getTransacEmailsList({
          messageId: args.messageId,
          email: args.email
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(events.body, null, 2) }]
        };

      case 'get_templates':
        const templates = await this.transactionalEmailsApi.getSmtpTemplates();
        return {
          content: [{ type: 'text', text: JSON.stringify(templates.body, null, 2) }]
        };

      default:
        throw new Error(`Unknown email operation: ${operation}`);
    }
  }

  // Campaign operations handler
  private async handleCampaigns(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'get_email_campaigns':
        const emailCampaigns = await this.emailCampaignsApi.getEmailCampaigns({
          type: args.type,
          status: args.status,
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(emailCampaigns.body, null, 2) }]
        };

      case 'create_email_campaign':
        const createEmailCampaign = new brevo.CreateEmailCampaign();
        Object.assign(createEmailCampaign, args.campaignData);
        const newEmailCampaign = await this.emailCampaignsApi.createEmailCampaign(createEmailCampaign);
        return {
          content: [{ type: 'text', text: `Email campaign created with ID: ${newEmailCampaign.body.id}` }]
        };

      case 'get_sms_campaigns':
        const smsCampaigns = await this.smsCampaignsApi.getSmsCampaigns({
          status: args.status,
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(smsCampaigns.body, null, 2) }]
        };

      case 'create_sms_campaign':
        const createSmsCampaign = new brevo.CreateSmsCampaign();
        Object.assign(createSmsCampaign, args.campaignData);
        const newSmsCampaign = await this.smsCampaignsApi.createSmsCampaign(createSmsCampaign);
        return {
          content: [{ type: 'text', text: `SMS campaign created with ID: ${newSmsCampaign.body.id}` }]
        };

      default:
        throw new Error(`Unknown campaign operation: ${operation}`);
    }
  }

  // SMS operations handler
  private async handleSMS(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'send':
        const sendTransacSms = new brevo.SendTransacSms();
        sendTransacSms.recipient = args.recipient;
        sendTransacSms.content = args.content;
        sendTransacSms.sender = args.sender;
        sendTransacSms.type = args.type || 'transactional';
        sendTransacSms.tag = args.tag;
        
        const smsResult = await this.transactionalSMSApi.sendTransacSms(sendTransacSms);
        return {
          content: [{ type: 'text', text: `SMS sent successfully. Reference: ${smsResult.body.reference}` }]
        };

      case 'send_batch':
        const results = [];
        for (const recipient of args.recipients) {
          const sendSms = new brevo.SendTransacSms();
          sendSms.recipient = recipient;
          sendSms.content = args.content;
          sendSms.sender = args.sender;
          sendSms.type = args.type || 'transactional';
          
          const result = await this.transactionalSMSApi.sendTransacSms(sendSms);
          results.push(result.body);
        }
        return {
          content: [{ type: 'text', text: `Batch SMS sent: ${JSON.stringify(results, null, 2)}` }]
        };

      default:
        throw new Error(`Unknown SMS operation: ${operation}`);
    }
  }

  // Conversations operations handler
  private async handleConversations(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'get_conversations':
        const conversations = await this.conversationsApi.getConversations();
        return {
          content: [{ type: 'text', text: JSON.stringify(conversations.body, null, 2) }]
        };

      case 'get_conversation':
        const conversation = await this.conversationsApi.getConversation(args.conversationId);
        return {
          content: [{ type: 'text', text: JSON.stringify(conversation.body, null, 2) }]
        };

      default:
        throw new Error(`Unknown conversation operation: ${operation}`);
    }
  }

  // Webhooks operations handler
  private async handleWebhooks(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'get_webhooks':
        const webhooks = await this.webhooksApi.getWebhooks();
        return {
          content: [{ type: 'text', text: JSON.stringify(webhooks.body, null, 2) }]
        };

      case 'create_webhook':
        const createWebhook = new brevo.CreateWebhook();
        createWebhook.url = args.url;
        createWebhook.events = args.events;
        createWebhook.description = args.description;
        createWebhook.type = args.type;
        
        const newWebhook = await this.webhooksApi.createWebhook(createWebhook);
        return {
          content: [{ type: 'text', text: `Webhook created with ID: ${newWebhook.body.id}` }]
        };

      default:
        throw new Error(`Unknown webhook operation: ${operation}`);
    }
  }

  // Account operations handler
  private async handleAccount(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'get_account':
        const account = await this.accountApi.getAccount();
        return {
          content: [{ type: 'text', text: JSON.stringify(account.body, null, 2) }]
        };

      case 'get_senders':
        const senders = await this.sendersApi.getSenders();
        return {
          content: [{ type: 'text', text: JSON.stringify(senders.body, null, 2) }]
        };

      case 'get_domains':
        const domains = await this.domainsApi.getDomains();
        return {
          content: [{ type: 'text', text: JSON.stringify(domains.body, null, 2) }]
        };

      default:
        throw new Error(`Unknown account operation: ${operation}`);
    }
  }

  // E-commerce operations handler
  private async handleEcommerce(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'get_orders':
        const orders = await this.ecommerceApi.getOrders({
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(orders.body, null, 2) }]
        };

      case 'create_order':
        const order = new brevo.Order();
        Object.assign(order, args.orderData);
        const newOrder = await this.ecommerceApi.createOrder(order);
        return {
          content: [{ type: 'text', text: `Order created: ${JSON.stringify(newOrder.body, null, 2)}` }]
        };

      default:
        throw new Error(`Unknown e-commerce operation: ${operation}`);
    }
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