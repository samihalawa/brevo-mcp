#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';

import * as brevo from '@getbrevo/brevo';

// MCP Server Implementation
class BrevoMCPServer {
  private server: Server;
  private apiKey: string;
  private defaultSender?: { name: string; email: string };

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
  
  // CRM APIs
  private companiesApi: any;
  private dealsApi: any;
  private tasksApi: any;
  private notesApi: any;
  
  // WhatsApp APIs
  private transactionalWhatsAppApi: any;
  private whatsAppCampaignsApi: any;
  
  // Additional APIs
  private couponsApi: any;
  private paymentsApi: any;
  private eventsApi: any;
  private inboundParsingApi: any;
  private masterAccountApi: any;
  private userApi: any;

  constructor() {
    this.server = new Server(
      {
        name: 'brevo-mcp',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
          resources: {},
        },
      }
    );

    // Initialize from environment variables
    this.apiKey = process.env.BREVO_API_KEY || '';
    
    // Optional default sender configuration
    if (process.env.BREVO_DEFAULT_SENDER_EMAIL) {
      this.defaultSender = {
        email: process.env.BREVO_DEFAULT_SENDER_EMAIL,
        name: process.env.BREVO_DEFAULT_SENDER_NAME || 'Brevo Sender'
      };
    }

    // Note: API key is optional for tool listing, but required for tool execution
    if (!this.apiKey) {
      console.error('Warning: BREVO_API_KEY not provided. Tools will be available but will fail when executed without authentication.');
    }

    this.initializeBrevoAPIs();
    this.setupToolHandlers();
    this.setupResourceHandlers();
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
    
    // CRM APIs
    this.companiesApi = new brevo.CompaniesApi();
    this.dealsApi = new brevo.DealsApi();
    this.tasksApi = new brevo.TasksApi();
    this.notesApi = new brevo.NotesApi();
    
    // WhatsApp APIs
    this.transactionalWhatsAppApi = new brevo.TransactionalWhatsAppApi();
    this.whatsAppCampaignsApi = new brevo.WhatsAppCampaignsApi();
    
    // Additional APIs
    this.couponsApi = new brevo.CouponsApi();
    this.paymentsApi = new brevo.PaymentsApi();
    this.eventsApi = new brevo.EventsApi();
    this.inboundParsingApi = new brevo.InboundParsingApi();
    this.masterAccountApi = new brevo.MasterAccountApi();
    this.userApi = new brevo.UserApi();

    // Set API key for all instances
    const apis = [
      this.contactsApi, this.transactionalEmailsApi, this.emailCampaignsApi,
      this.smsCampaignsApi, this.transactionalSMSApi, this.conversationsApi,
      this.webhooksApi, this.accountApi, this.ecommerceApi, this.sendersApi,
      this.filesApi, this.domainsApi, this.companiesApi, this.dealsApi,
      this.tasksApi, this.notesApi, this.transactionalWhatsAppApi,
      this.whatsAppCampaignsApi, this.couponsApi, this.paymentsApi,
      this.eventsApi, this.inboundParsingApi, this.masterAccountApi, this.userApi
    ];

    apis.forEach(api => {
      if (api.authentications && api.authentications.apiKey) {
        api.authentications.apiKey.apiKey = this.apiKey;
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
                    'get', 'create', 'update', 'delete', 'bulk_import', 'bulk_update', 'export',
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
                templateData: {
                  type: 'object',
                  description: 'Template data for create/update operations',
                },
                startDate: {
                  type: 'string',
                  description: 'Start date for statistics (YYYY-MM-DD)',
                },
                endDate: {
                  type: 'string',
                  description: 'End date for statistics (YYYY-MM-DD)',
                },
                days: {
                  type: 'number',
                  description: 'Number of days for statistics',
                },
                tag: {
                  type: 'string',
                  description: 'Tag for filtering statistics',
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
                    'export_email_recipients', 'get_sms_campaigns', 'create_sms_campaign', 'update_sms_campaign',
                    'send_sms_campaign', 'schedule_sms_campaign', 'delete_sms_campaign',
                    'export_sms_recipients', 'get_campaign_statistics'
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
                limit: {
                  type: 'number',
                  description: 'Limit for events/statistics',
                },
                startDate: {
                  type: 'string',
                  description: 'Start date for events/statistics (YYYY-MM-DD)',
                },
                endDate: {
                  type: 'string',
                  description: 'End date for events/statistics (YYYY-MM-DD)',
                },
                offset: {
                  type: 'number',
                  description: 'Offset for pagination',
                },
                days: {
                  type: 'number',
                  description: 'Number of days for statistics',
                },
                phoneNumber: {
                  type: 'string',
                  description: 'Phone number for filtering events',
                },
                event: {
                  type: 'string',
                  description: 'Event type for filtering',
                },
                tags: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Tags for filtering events',
                },
                sort: {
                  type: 'string',
                  description: 'Sort order for events',
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
                    'delete_webhook', 'get_webhook', 'export_history'
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
                exportData: {
                  type: 'object',
                  description: 'Export configuration for webhook history',
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
            description: 'E-commerce integration - manage orders, products, coupons, and payments',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'create_order', 'get_order', 'get_orders', 'update_order', 'create_batch_order',
                    'get_products', 'create_product', 'update_product', 'delete_product', 'create_update_batch_products',
                    'get_categories', 'create_category', 'update_category', 'delete_category', 'create_update_batch_category',
                    'get_coupon_collections', 'get_coupon_collection', 'create_coupon_collection',
                    'update_coupon_collection', 'create_coupons', 'create_payment_request',
                    'get_payment_request', 'delete_payment_request'
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
                couponCollectionId: {
                  type: 'string',
                  description: 'Coupon collection ID',
                },
                couponData: {
                  type: 'object',
                  description: 'Coupon collection data',
                },
                paymentData: {
                  type: 'object',
                  description: 'Payment request data',
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
          {
            name: 'crm',
            description: 'Complete CRM functionality - manage companies, deals, tasks, and notes',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'get_companies', 'get_company', 'create_company', 'update_company', 'delete_company',
                    'link_unlink_company', 'get_company_attributes',
                    'get_deals', 'get_deal', 'create_deal', 'update_deal', 'delete_deal',
                    'link_unlink_deal', 'get_deal_attributes', 'get_pipelines',
                    'get_tasks', 'get_task', 'create_task', 'update_task', 'delete_task',
                    'get_task_types', 'get_notes', 'get_note', 'create_note', 'update_note', 'delete_note'
                  ],
                  description: 'CRM operation to perform',
                },
                companyId: {
                  type: 'string',
                  description: 'Company ID',
                },
                companyData: {
                  type: 'object',
                  description: 'Company information',
                },
                dealId: {
                  type: 'string',
                  description: 'Deal ID',
                },
                dealData: {
                  type: 'object',
                  description: 'Deal information',
                },
                taskId: {
                  type: 'string',
                  description: 'Task ID',
                },
                taskData: {
                  type: 'object',
                  description: 'Task information',
                },
                noteId: {
                  type: 'string',
                  description: 'Note ID',
                },
                noteData: {
                  type: 'object',
                  description: 'Note information',
                },
                entityType: {
                  type: 'string',
                  enum: ['companies', 'deals', 'contacts'],
                  description: 'Entity type for linking/notes',
                },
                entityId: {
                  type: 'string',
                  description: 'Entity ID for linking/notes',
                },
                filters: {
                  type: 'object',
                  description: 'Filters for listing operations',
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
          {
            name: 'whatsapp',
            description: 'WhatsApp messaging - send messages, manage campaigns and templates',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'send_message', 'get_whatsapp_events',
                    'get_whatsapp_campaigns', 'get_whatsapp_campaign', 'create_whatsapp_campaign',
                    'update_whatsapp_campaign', 'delete_whatsapp_campaign',
                    'get_whatsapp_templates', 'create_whatsapp_template', 'get_whatsapp_config'
                  ],
                  description: 'WhatsApp operation to perform',
                },
                recipient: {
                  type: 'string',
                  description: 'WhatsApp number for single message',
                },
                templateId: {
                  type: 'number',
                  description: 'WhatsApp template ID',
                },
                templateData: {
                  type: 'object',
                  description: 'Template data and parameters',
                },
                campaignId: {
                  type: 'number',
                  description: 'WhatsApp campaign ID',
                },
                campaignData: {
                  type: 'object',
                  description: 'Campaign configuration data',
                },
                messageId: {
                  type: 'string',
                  description: 'Message ID for event tracking',
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
          {
            name: 'events',
            description: 'Custom event tracking and behavioral data management',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: ['create_event'],
                  description: 'Event operation to perform',
                },
                email: {
                  type: 'string',
                  description: 'Contact email for event tracking',
                },
                eventName: {
                  type: 'string',
                  description: 'Name of the event to track',
                },
                eventData: {
                  type: 'object',
                  description: 'Event properties and data',
                },
              },
              required: ['operation', 'email', 'eventName'],
            },
          },
          {
            name: 'inbound',
            description: 'Process inbound emails and attachments',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'get_inbound_email_events', 'get_inbound_email_by_uuid',
                    'get_inbound_email_attachment'
                  ],
                  description: 'Inbound parsing operation to perform',
                },
                uuid: {
                  type: 'string',
                  description: 'Email UUID for specific email operations',
                },
                attachmentId: {
                  type: 'string',
                  description: 'Attachment ID for download',
                },
                sender: {
                  type: 'string',
                  description: 'Sender email filter',
                },
                startDate: {
                  type: 'string',
                  description: 'Start date for filtering (YYYY-MM-DD)',
                },
                endDate: {
                  type: 'string',
                  description: 'End date for filtering (YYYY-MM-DD)',
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
          {
            name: 'enterprise',
            description: 'Multi-tenant account and user management for enterprise features',
            inputSchema: {
              type: 'object',
              properties: {
                operation: {
                  type: 'string',
                  enum: [
                    'get_master_account', 'get_sub_accounts', 'create_sub_account',
                    'get_sub_account', 'delete_sub_account', 'create_api_key',
                    'get_invited_users', 'edit_user_permission', 'get_user_permission'
                  ],
                  description: 'Enterprise operation to perform',
                },
                subAccountId: {
                  type: 'number',
                  description: 'Sub-account ID',
                },
                subAccountData: {
                  type: 'object',
                  description: 'Sub-account configuration data',
                },
                userId: {
                  type: 'string',
                  description: 'User ID for permission operations',
                },
                permissions: {
                  type: 'object',
                  description: 'User permission settings',
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
          {
            name: 'bulk_contact_import',
            description: 'Intelligent bulk contact import from pasted text - analyzes text, maps attributes, checks duplicates, and imports efficiently',
            inputSchema: {
              type: 'object',
              properties: {
                text: {
                  type: 'string',
                  description: 'Pasted contact data (CSV, email list, mixed text format)',
                },
                listId: {
                  type: 'number',
                  description: 'Optional: List ID to add contacts to',
                },
                updateExisting: {
                  type: 'boolean',
                  description: 'Whether to update existing contacts',
                  default: true,
                },
                dryRun: {
                  type: 'boolean',
                  description: 'Preview the import without executing',
                  default: false,
                },
              },
              required: ['text'],
            },
          },
          {
            name: 'contact_with_list',
            description: 'Create contact and add to list in one call - universally useful combination',
            inputSchema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  description: 'Contact email address',
                },
                firstName: {
                  type: 'string',
                  description: 'Contact first name',
                },
                lastName: {
                  type: 'string',
                  description: 'Contact last name',
                },
                attributes: {
                  type: 'object',
                  description: 'Contact custom attributes',
                },
                listIds: {
                  type: 'array',
                  items: { type: 'number' },
                  description: 'Lists to add contact to',
                },
                updateExisting: {
                  type: 'boolean',
                  description: 'Update contact if already exists',
                  default: true,
                },
              },
              required: ['email', 'listIds'],
            },
          },
          {
            name: 'email_with_tracking',
            description: 'Send email and return tracking info immediately - universally useful combination',
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
                  description: 'Email HTML content',
                },
                templateId: {
                  type: 'number',
                  description: 'Template ID to use instead of content',
                },
                params: {
                  type: 'object',
                  description: 'Template parameters',
                },
                sender: {
                  type: 'object',
                  properties: {
                    email: { type: 'string' },
                    name: { type: 'string' },
                  },
                  description: 'Sender information',
                },
                includeStats: {
                  type: 'boolean',
                  description: 'Include detailed tracking stats',
                  default: true,
                },
              },
              required: ['to'],
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
          case 'crm':
            return await this.handleCRM(args);
          case 'whatsapp':
            return await this.handleWhatsApp(args);
          case 'events':
            return await this.handleEvents(args);
          case 'inbound':
            return await this.handleInbound(args);
          case 'enterprise':
            return await this.handleEnterprise(args);
          case 'bulk_contact_import':
            return await this.handleBulkContactImport(args);
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

  private setupResourceHandlers(): void {
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      return {
        resources: [
          {
            uri: 'brevo://schemas/contact',
            name: 'Contact Schema',
            description: 'Complete contact model with all available attributes',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://schemas/email-template',
            name: 'Email Template Schema',
            description: 'Email template structure for creating templates',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://samples/contacts',
            name: 'Sample Contacts',
            description: '5 sample contacts with realistic data',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://schemas/bulk-import',
            name: 'Bulk Import Schema',
            description: 'Schema for bulk contact import operations',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://current/attributes',
            name: 'Current Attributes',
            description: 'Live list of all contact attributes in your account',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://current/lists',
            name: 'Current Lists',
            description: 'Live list of all contact lists in your account',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://tools/bulk-contact-import',
            name: 'Bulk Contact Import Helper',
            description: 'Intelligent helper for importing contacts from pasted text',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://workflows/email-marketing',
            name: 'Email Marketing Workflow Guide',
            description: 'Step-by-step guide for complete email marketing campaigns',
            mimeType: 'text/markdown'
          },
          {
            uri: 'brevo://workflows/automation',
            name: 'Marketing Automation Guide',
            description: 'Best practices for setting up automated email sequences',
            mimeType: 'text/markdown'
          },
          {
            uri: 'brevo://templates/transactional',
            name: 'Transactional Email Templates',
            description: 'Production-ready templates for common transactional emails',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://templates/marketing',
            name: 'Marketing Email Templates',
            description: 'Professional marketing email templates with best practices',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://webhooks/guide',
            name: 'Webhook Integration Guide',
            description: 'Complete guide to setting up and handling Brevo webhooks',
            mimeType: 'text/markdown'
          },
          {
            uri: 'brevo://webhooks/events',
            name: 'Webhook Events Reference',
            description: 'All available webhook events with payload examples',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://api/rate-limits',
            name: 'API Rate Limits & Best Practices',
            description: 'Rate limiting guidelines and optimization strategies',
            mimeType: 'text/markdown'
          },
          {
            uri: 'brevo://data-streams/setup',
            name: 'Data Streams Configuration',
            description: 'Guide to setting up real-time data streams and monitoring',
            mimeType: 'text/markdown'
          },
          {
            uri: 'brevo://schemas/campaign',
            name: 'Campaign Schema',
            description: 'Complete schema for email and SMS campaigns',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://schemas/webhook',
            name: 'Webhook Configuration Schema',
            description: 'Schema for webhook setup and event handling',
            mimeType: 'application/json'
          },
          {
            uri: 'brevo://troubleshooting/common-issues',
            name: 'Common Issues & Solutions',
            description: 'Troubleshooting guide for common Brevo integration problems',
            mimeType: 'text/markdown'
          }
        ]
      };
    });

    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const uri = request.params.uri;

      switch (uri) {
        case 'brevo://schemas/contact':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                email: "user@example.com",
                attributes: {
                  FIRSTNAME: "John",
                  LASTNAME: "Doe",
                  SMS: "+1234567890",
                  COMPANY: "Acme Corp",
                  JOB_TITLE: "Developer",
                  LINKEDIN: "https://linkedin.com/in/johndoe",
                  WHATSAPP: "+1234567890",
                  COUNTRY: "USA",
                  TAGS: "premium,developer"
                },
                listIds: [1, 2],
                emailBlacklisted: false,
                smsBlacklisted: false,
                updateEnabled: true
              }, null, 2)
            }]
          };

        case 'brevo://schemas/email-template':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                templateName: "Welcome Email",
                subject: "Welcome {{contact.FIRSTNAME}}!",
                sender: {
                  name: "Your Company",
                  email: "noreply@yourcompany.com"
                },
                htmlContent: "<html><body><h1>Hello {{contact.FIRSTNAME}}!</h1><p>Welcome to our platform.</p></body></html>",
                isActive: true,
                tag: "welcome"
              }, null, 2)
            }]
          };

        case 'brevo://samples/contacts':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify([
                {
                  email: "alice.johnson@example.com",
                  attributes: {
                    FIRSTNAME: "Alice",
                    LASTNAME: "Johnson",
                    COMPANY: "TechCorp",
                    JOB_TITLE: "Marketing Manager",
                    COUNTRY: "USA",
                    SMS: "+15551234567"
                  }
                },
                {
                  email: "bob.smith@example.com",
                  attributes: {
                    FIRSTNAME: "Bob",
                    LASTNAME: "Smith",
                    COMPANY: "StartupXYZ",
                    JOB_TITLE: "CTO",
                    COUNTRY: "Canada",
                    LINKEDIN: "https://linkedin.com/in/bobsmith"
                  }
                },
                {
                  email: "carol.davis@example.com",
                  attributes: {
                    FIRSTNAME: "Carol",
                    LASTNAME: "Davis",
                    COMPANY: "Enterprise Inc",
                    JOB_TITLE: "Sales Director",
                    COUNTRY: "UK",
                    SMS: "+447123456789"
                  }
                },
                {
                  email: "david.wilson@example.com",
                  attributes: {
                    FIRSTNAME: "David",
                    LASTNAME: "Wilson",
                    COMPANY: "Innovation Labs",
                    JOB_TITLE: "Product Manager",
                    COUNTRY: "Germany",
                    WHATSAPP: "+491234567890"
                  }
                },
                {
                  email: "emma.brown@example.com",
                  attributes: {
                    FIRSTNAME: "Emma",
                    LASTNAME: "Brown",
                    COMPANY: "Creative Agency",
                    JOB_TITLE: "Designer",
                    COUNTRY: "Australia",
                    TAGS: "premium,creative"
                  }
                }
              ], null, 2)
            }]
          };

        case 'brevo://schemas/bulk-import':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                type: "bulk_import",
                jsonBody: [
                  {
                    email: "user1@example.com",
                    attributes: {
                      FIRSTNAME: "John",
                      LASTNAME: "Doe"
                    }
                  }
                ],
                listIds: [1],
                updateExistingContacts: true,
                emptyContactsAttributes: false
              }, null, 2)
            }]
          };

        case 'brevo://current/attributes':
          try {
            const attributes = await this.contactsApi.getAttributes();
            return {
              contents: [{
                uri,
                mimeType: 'application/json',
                text: JSON.stringify(attributes.body, null, 2)
              }]
            };
          } catch (error) {
            throw new McpError(ErrorCode.InternalError, `Failed to fetch attributes: ${error}`);
          }

        case 'brevo://current/lists':
          try {
            const lists = await this.contactsApi.getLists();
            return {
              contents: [{
                uri,
                mimeType: 'application/json',
                text: JSON.stringify(lists.body, null, 2)
              }]
            };
          } catch (error) {
            throw new McpError(ErrorCode.InternalError, `Failed to fetch lists: ${error}`);
          }

        case 'brevo://tools/bulk-contact-import':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                instructions: "Use this tool to intelligently import contacts from pasted text",
                process: [
                  "1. Analyze the provided text to extract contact information",
                  "2. Map to existing Brevo attributes",
                  "3. Check for duplicates against existing contacts",
                  "4. Format for bulk import",
                  "5. Execute the import operation"
                ],
                parameters: {
                  text: "Paste your contact data here (CSV, text, emails, etc.)",
                  listId: "Optional: List ID to add contacts to",
                  updateExisting: "true/false - whether to update existing contacts"
                },
                example: "John Doe <john@example.com>, Jane Smith (jane@example.com), Bob Wilson bob@test.com +1234567890"
              }, null, 2)
            }]
          };

        case 'brevo://workflows/email-marketing':
          return {
            contents: [{
              uri,
              mimeType: 'text/markdown',
              text: `# Email Marketing Workflow Guide

## Overview
This guide walks you through creating effective email marketing campaigns using Brevo's comprehensive tools.

## 1. Audience Preparation
\`\`\`javascript
// Get contact lists
const lists = await brevo.contacts({ operation: 'get_lists' });

// Create targeted list
const newList = await brevo.contacts({ 
  operation: 'create_list',
  listData: {
    name: 'Product Launch Campaign',
    folderId: 1
  }
});
\`\`\`

## 2. Content Creation
\`\`\`javascript
// Create email template
const template = await brevo.email({
  operation: 'create_template',
  templateData: {
    templateName: 'Product Launch Email',
    subject: 'Introducing {{contact.FIRSTNAME}} - Our Latest Innovation!',
    htmlContent: '<!DOCTYPE html>...',
    sender: { name: 'Your Company', email: 'marketing@company.com' }
  }
});
\`\`\`

## 3. Campaign Setup
\`\`\`javascript
// Create email campaign
const campaign = await brevo.campaigns({
  operation: 'create_email_campaign',
  campaignData: {
    name: 'Product Launch Campaign',
    subject: 'Revolutionary Product - Limited Time Offer',
    templateId: template.id,
    listIds: [newList.id],
    scheduledAt: '2024-12-01T10:00:00Z'
  }
});
\`\`\`

## 4. Performance Tracking
\`\`\`javascript
// Get campaign statistics
const stats = await brevo.campaigns({
  operation: 'get_campaign_statistics',
  campaignId: campaign.id
});

// Monitor email events
const events = await brevo.email({
  operation: 'get_events',
  startDate: '2024-12-01',
  endDate: '2024-12-07'
});
\`\`\`

## Best Practices
- Always test with small segments first
- Use personalization tokens: {{contact.FIRSTNAME}}, {{contact.COMPANY}}
- Monitor deliverability and engagement metrics
- A/B test subject lines and content
- Maintain clean contact lists`
            }]
          };

        case 'brevo://workflows/automation':
          return {
            contents: [{
              uri,
              mimeType: 'text/markdown',
              text: `# Marketing Automation Guide

## Automated Email Sequences
Set up intelligent email sequences that respond to user behavior.

## 1. Welcome Series Setup
\`\`\`javascript
// Create welcome email template
const welcomeTemplate = await brevo.email({
  operation: 'create_template',
  templateData: {
    templateName: 'Welcome Series - Email 1',
    subject: 'Welcome {{contact.FIRSTNAME}}! Here's what's next...',
    htmlContent: \`
      <h1>Welcome to {{contact.COMPANY}}!</h1>
      <p>Thank you for joining us. Here's your personalized onboarding:</p>
      <ul>
        <li>Complete your profile</li>
        <li>Explore our features</li>
        <li>Connect with our team</li>
      </ul>
    \`,
    tag: 'welcome-series'
  }
});
\`\`\`

## 2. Behavioral Triggers
\`\`\`javascript
// Track user events for automation triggers
const userEvent = await brevo.events({
  operation: 'create_event',
  email: 'user@example.com',
  eventName: 'profile_completed',
  eventData: {
    completion_date: new Date().toISOString(),
    completion_percentage: 100
  }
});
\`\`\`

## 3. Webhook-Based Automation
\`\`\`javascript
// Set up webhook for real-time automation
const webhook = await brevo.webhooks({
  operation: 'create_webhook',
  url: 'https://yourapp.com/webhook/brevo',
  events: ['delivered', 'opened', 'clicked', 'unsubscribed'],
  description: 'Automation trigger webhook'
});
\`\`\`

## 4. Multi-Channel Automation
\`\`\`javascript
// SMS follow-up for non-openers
const smsFollow = await brevo.sms({
  operation: 'send',
  recipient: '+1234567890',
  content: 'Hi {{contact.FIRSTNAME}}, did you see our email? Check it out: link.com',
  sender: 'YourBrand'
});
\`\`\`

## Advanced Automation Patterns
- Lead nurturing sequences
- Abandoned cart recovery
- Re-engagement campaigns
- Post-purchase follow-ups
- Birthday/anniversary emails`
            }]
          };

        case 'brevo://templates/transactional':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                "passwordReset": {
                  "templateName": "Password Reset",
                  "subject": "Reset your password for {{contact.COMPANY}}",
                  "htmlContent": `<!DOCTYPE html>
<html>
<head><title>Password Reset</title></head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto;">
    <h1 style="color: #333;">Password Reset Request</h1>
    <p>Hello {{contact.FIRSTNAME}},</p>
    <p>We received a request to reset your password. Click the button below to proceed:</p>
    <a href="{{params.reset_url}}" style="background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0;">Reset Password</a>
    <p>This link will expire in 24 hours for security reasons.</p>
    <p>If you didn't request this reset, please ignore this email.</p>
    <p>Best regards,<br>{{contact.COMPANY}} Team</p>
  </div>
</body>
</html>`,
                  "textContent": "Hello {{contact.FIRSTNAME}}, we received a password reset request. Visit: {{params.reset_url}}",
                  "tag": "password-reset"
                },
                "emailVerification": {
                  "templateName": "Email Verification",
                  "subject": "Please verify your email address",
                  "htmlContent": `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto;">
    <h1 style="color: #28a745;">Verify Your Email</h1>
    <p>Hello {{contact.FIRSTNAME}},</p>
    <p>Please verify your email address by clicking the button below:</p>
    <a href="{{params.verification_url}}" style="background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 20px 0;">Verify Email</a>
    <p>Verification code: <strong>{{params.verification_code}}</strong></p>
  </div>
</body>
</html>`,
                  "tag": "verification"
                },
                "orderConfirmation": {
                  "templateName": "Order Confirmation",
                  "subject": "Order #{{params.order_id}} confirmed",
                  "htmlContent": `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto;">
    <h1 style="color: #333;">Order Confirmed!</h1>
    <p>Hello {{contact.FIRSTNAME}},</p>
    <p>Your order #{{params.order_id}} has been confirmed.</p>
    <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; margin: 20px 0;">
      <h3>Order Details:</h3>
      <p><strong>Order ID:</strong> {{params.order_id}}</p>
      <p><strong>Total:</strong> {{params.total_amount}}</p>
      <p><strong>Estimated Delivery:</strong> {{params.delivery_date}}</p>
    </div>
    <p>Track your order: <a href="{{params.tracking_url}}">{{params.tracking_url}}</a></p>
  </div>
</body>
</html>`,
                  "tag": "order-confirmation"
                }
              }, null, 2)
            }]
          };

        case 'brevo://templates/marketing':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                "newsletter": {
                  "templateName": "Monthly Newsletter",
                  "subject": "{{contact.FIRSTNAME}}, here's what's new this month",
                  "htmlContent": `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
  <div style="max-width: 600px; margin: 0 auto; background: white;">
    <header style="background: #007bff; color: white; padding: 20px; text-align: center;">
      <h1>Monthly Update</h1>
    </header>
    <div style="padding: 20px;">
      <h2>Hello {{contact.FIRSTNAME}}!</h2>
      <p>Here are the highlights from this month:</p>
      
      <div style="border-left: 4px solid #007bff; padding-left: 15px; margin: 20px 0;">
        <h3>🚀 New Feature Launch</h3>
        <p>We've launched our revolutionary new dashboard that makes managing your account easier than ever.</p>
      </div>
      
      <div style="border-left: 4px solid #28a745; padding-left: 15px; margin: 20px 0;">
        <h3>📊 Your Account Stats</h3>
        <p>You've saved {{params.time_saved}} hours this month using our platform!</p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{params.cta_url}}" style="background: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; display: inline-block;">Explore New Features</a>
      </div>
    </div>
  </div>
</body>
</html>`,
                  "tag": "newsletter"
                },
                "productLaunch": {
                  "templateName": "Product Launch Announcement",
                  "subject": "🎉 Introducing {{params.product_name}} - Just for You!",
                  "htmlContent": `<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; background: white;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 32px;">🎉 Big News!</h1>
      <p style="font-size: 18px; margin: 10px 0 0 0;">We've built something amazing for you</p>
    </div>
    <div style="padding: 30px 20px;">
      <h2>Hello {{contact.FIRSTNAME}},</h2>
      <p style="font-size: 16px; line-height: 1.6;">We're thrilled to introduce <strong>{{params.product_name}}</strong> - designed specifically with customers like you in mind.</p>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
        <h3 style="color: #333; margin-top: 0;">What makes it special:</h3>
        <ul style="color: #555; line-height: 1.8;">
          <li>{{params.feature_1}}</li>
          <li>{{params.feature_2}}</li>
          <li>{{params.feature_3}}</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{params.product_url}}" style="background: #28a745; color: white; padding: 15px 40px; text-decoration: none; border-radius: 6px; display: inline-block; font-size: 16px; font-weight: bold;">Try It Now</a>
      </div>
      
      <p style="color: #666; font-size: 14px;">Limited time: Get 30% off with code LAUNCH30</p>
    </div>
  </div>
</body>
</html>`,
                  "tag": "product-launch"
                }
              }, null, 2)
            }]
          };

        case 'brevo://webhooks/guide':
          return {
            contents: [{
              uri,
              mimeType: 'text/markdown',
              text: `# Brevo Webhook Integration Guide

## Overview
Webhooks allow real-time notifications when events occur in your Brevo account.

## 1. Setting Up Webhooks

\`\`\`javascript
// Create a webhook for email events
const webhook = await brevo.webhooks({
  operation: 'create_webhook',
  url: 'https://your-app.com/webhook/brevo',
  events: [
    'delivered',    // Email successfully delivered
    'opened',       // Email opened by recipient
    'clicked',      // Link clicked in email
    'bounced',      // Email bounced
    'unsubscribed', // User unsubscribed
    'complaint'     // Spam complaint
  ],
  description: 'Main email tracking webhook',
  type: 'transactional'
});
\`\`\`

## 2. Webhook Endpoint Implementation

### Express.js Example
\`\`\`javascript
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

// Webhook verification (recommended)
function verifyWebhook(payload, signature, secret) {
  const hash = crypto.createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return hash === signature;
}

app.post('/webhook/brevo', (req, res) => {
  const payload = JSON.stringify(req.body);
  const signature = req.headers['x-brevo-signature'];
  
  // Verify webhook (if you set up webhook secret)
  if (!verifyWebhook(payload, signature, process.env.BREVO_WEBHOOK_SECRET)) {
    return res.status(401).send('Unauthorized');
  }
  
  const event = req.body;
  
  switch(event.event) {
    case 'delivered':
      console.log(\`Email delivered to \${event.email}\`);
      break;
    case 'opened':
      console.log(\`Email opened by \${event.email}\`);
      // Trigger follow-up automation
      break;
    case 'clicked':
      console.log(\`Link clicked: \${event.link}\`);
      // Track conversion
      break;
    case 'bounced':
      console.log(\`Email bounced: \${event.reason}\`);
      // Update contact status
      break;
  }
  
  res.status(200).send('OK');
});
\`\`\`

## 3. Event Processing Patterns

### Automated Follow-ups
\`\`\`javascript
app.post('/webhook/brevo', async (req, res) => {
  const { event, email, ts } = req.body;
  
  if (event === 'opened') {
    // Wait 2 hours, then send follow-up if no click
    setTimeout(async () => {
      const hasClicked = await checkIfUserClicked(email, ts);
      if (!hasClicked) {
        await sendFollowUpEmail(email);
      }
    }, 2 * 60 * 60 * 1000);
  }
  
  res.status(200).send('OK');
});
\`\`\`

### Contact Scoring
\`\`\`javascript
const scoringRules = {
  opened: 1,
  clicked: 5,
  replied: 10,
  unsubscribed: -20
};

app.post('/webhook/brevo', async (req, res) => {
  const { event, email } = req.body;
  const score = scoringRules[event] || 0;
  
  await updateContactScore(email, score);
  res.status(200).send('OK');
});
\`\`\`

## 4. Error Handling & Retry Logic

\`\`\`javascript
app.post('/webhook/brevo', async (req, res) => {
  try {
    await processWebhookEvent(req.body);
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook processing failed:', error);
    // Return 5xx for Brevo to retry
    res.status(500).send('Processing failed');
  }
});
\`\`\`

## 5. Testing Webhooks

\`\`\`javascript
// List webhook delivery attempts
const attempts = await brevo.webhooks({
  operation: 'list_webhook_attempts',
  webhookId: webhook.id
});

// Check webhook status
const webhookStatus = await brevo.webhooks({
  operation: 'get_webhook',
  webhookId: webhook.id
});
\`\`\`

## Best Practices
- Always respond with 200 status for successful processing
- Implement webhook verification for security
- Use idempotency keys to handle duplicate events
- Set up monitoring for webhook failures
- Process webhooks asynchronously for heavy operations`
            }]
          };

        case 'brevo://webhooks/events':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                "email_events": {
                  "delivered": {
                    "description": "Email successfully delivered to recipient",
                    "payload_example": {
                      "event": "delivered",
                      "email": "user@example.com",
                      "id": 123456,
                      "date": "2024-01-15T10:30:00Z",
                      "message-id": "<message.id@brevo.com>",
                      "subject": "Welcome to our service"
                    }
                  },
                  "opened": {
                    "description": "Email opened by recipient",
                    "payload_example": {
                      "event": "opened",
                      "email": "user@example.com",
                      "id": 123456,
                      "date": "2024-01-15T10:35:00Z",
                      "message-id": "<message.id@brevo.com>",
                      "ip": "192.168.1.1",
                      "user_agent": "Mozilla/5.0..."
                    }
                  },
                  "clicked": {
                    "description": "Link clicked in email",
                    "payload_example": {
                      "event": "clicked",
                      "email": "user@example.com",
                      "id": 123456,
                      "date": "2024-01-15T10:40:00Z",
                      "link": "https://example.com/product",
                      "ip": "192.168.1.1"
                    }
                  },
                  "bounced": {
                    "description": "Email bounced (hard or soft bounce)",
                    "payload_example": {
                      "event": "bounced",
                      "email": "user@example.com",
                      "id": 123456,
                      "date": "2024-01-15T10:32:00Z",
                      "reason": "mailbox_full",
                      "code": 550
                    }
                  }
                },
                "sms_events": {
                  "delivered": {
                    "description": "SMS successfully delivered",
                    "payload_example": {
                      "event": "delivered",
                      "phone_number": "+1234567890",
                      "id": 789012,
                      "date": "2024-01-15T10:30:00Z",
                      "reference": "sms_ref_123"
                    }
                  }
                },
                "contact_events": {
                  "contact_created": {
                    "description": "New contact created",
                    "payload_example": {
                      "event": "contact_created",
                      "email": "new@example.com",
                      "contact_id": 456789,
                      "date": "2024-01-15T10:25:00Z",
                      "list_ids": [1, 5]
                    }
                  },
                  "contact_updated": {
                    "description": "Contact information updated",
                    "payload_example": {
                      "event": "contact_updated", 
                      "email": "user@example.com",
                      "contact_id": 456789,
                      "date": "2024-01-15T10:28:00Z",
                      "updated_fields": ["FIRSTNAME", "COMPANY"]
                    }
                  }
                }
              }, null, 2)
            }]
          };

        case 'brevo://api/rate-limits':
          return {
            contents: [{
              uri,
              mimeType: 'text/markdown',
              text: `# Brevo API Rate Limits & Best Practices

## Current Rate Limits

### Email API
- **Transactional Emails**: 300 emails/minute
- **Template Operations**: 100 requests/minute
- **Contact Operations**: 100 requests/minute

### Contacts API
- **Contact CRUD**: 100 requests/minute
- **Bulk Import**: 5 imports/hour
- **List Operations**: 50 requests/minute

### Campaign API
- **Campaign Management**: 50 requests/minute
- **Statistics**: 100 requests/minute

## Rate Limit Headers
Monitor these headers in API responses:
\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
\`\`\`

## Best Practices

### 1. Implement Exponential Backoff
\`\`\`javascript
async function makeBrevoRequest(requestFn, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await requestFn();
    } catch (error) {
      if (error.status === 429) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error('Max retries exceeded');
}
\`\`\`

### 2. Batch Operations
\`\`\`javascript
// Instead of individual contact updates
for (const contact of contacts) {
  await updateContact(contact); // ❌ Inefficient
}

// Use bulk operations
await brevo.contacts({
  operation: 'bulk_update',
  contacts: contacts // ✅ Efficient
});
\`\`\`

### 3. Use Webhooks for Real-time Data
\`\`\`javascript
// Instead of polling for email events
setInterval(async () => {
  const events = await getEmailEvents(); // ❌ Inefficient
}, 30000);

// Set up webhooks for real-time notifications ✅
const webhook = await brevo.webhooks({
  operation: 'create_webhook',
  url: 'https://your-app.com/webhook',
  events: ['delivered', 'opened', 'clicked']
});
\`\`\`

### 4. Cache Frequently Accessed Data
\`\`\`javascript
// Cache contact lists, templates, etc.
const cache = new Map();

async function getContactLists() {
  if (cache.has('lists')) {
    return cache.get('lists');
  }
  
  const lists = await brevo.contacts({ operation: 'get_lists' });
  cache.set('lists', lists, { ttl: 300000 }); // 5 minutes
  return lists;
}
\`\`\`

### 5. Monitor Your Usage
\`\`\`javascript
// Track API usage
let requestCount = 0;
const startTime = Date.now();

function trackApiCall() {
  requestCount++;
  const elapsed = Date.now() - startTime;
  const rate = requestCount / (elapsed / 60000); // requests per minute
  
  if (rate > 80) { // 80% of 100 req/min limit
    console.warn('Approaching rate limit:', rate);
  }
}
\`\`\`

## Error Handling

### Rate Limit Response
\`\`\`javascript
{
  "code": "too_many_requests",
  "message": "Rate limit exceeded",
  "details": {
    "reset_time": 1640995200,
    "retry_after": 60
  }
}
\`\`\`

### Handling Strategy
\`\`\`javascript
if (error.status === 429) {
  const retryAfter = error.headers['retry-after'] || 60;
  await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
  // Retry the request
}
\`\`\`

## Account Limits
- **Free Plan**: 300 emails/day
- **Starter Plan**: 20,000 emails/month
- **Business Plan**: 40,000 emails/month
- **Enterprise Plan**: Custom limits`
            }]
          };

        case 'brevo://data-streams/setup':
          return {
            contents: [{
              uri,
              mimeType: 'text/markdown',
              text: `# Data Streams Configuration Guide

## Real-time Data Monitoring with Brevo

### 1. Webhook-Based Data Streams

\`\`\`javascript
// Set up comprehensive event monitoring
const dataStream = await brevo.webhooks({
  operation: 'create_webhook',
  url: 'https://your-app.com/stream/brevo',
  events: [
    // Email events
    'delivered', 'opened', 'clicked', 'bounced', 'unsubscribed',
    // Contact events  
    'contact_created', 'contact_updated', 'contact_deleted',
    // Campaign events
    'campaign_sent', 'campaign_delivered'
  ],
  description: 'Real-time data stream'
});
\`\`\`

### 2. Event Stream Processing

\`\`\`javascript
const EventEmitter = require('events');
const streamProcessor = new EventEmitter();

// Process incoming webhook events
app.post('/stream/brevo', (req, res) => {
  const event = req.body;
  
  // Emit event for real-time processing
  streamProcessor.emit('brevo-event', event);
  
  // Store for batch processing
  eventQueue.push(event);
  
  res.status(200).send('OK');
});

// Real-time event handlers
streamProcessor.on('brevo-event', (event) => {
  switch(event.event) {
    case 'opened':
      updateContactEngagement(event.email, 'email_opened');
      break;
    case 'clicked':
      trackConversion(event.email, event.link);
      break;
    case 'contact_created':
      triggerWelcomeSequence(event.email);
      break;
  }
});
\`\`\`

### 3. Monitoring & Analytics Setup

\`\`\`javascript
// Monitor system events
const monitorEvents = await brevo.webhooks({
  operation: 'list_events',
  limit: 100
});

// Set up automated monitoring
const monitor = await brevo.webhooks({
  operation: 'create_webset_monitor', 
  monitorData: {
    name: 'Email Performance Monitor',
    description: 'Track email performance metrics',
    frequency: 'hourly',
    conditions: {
      bounce_rate: { threshold: 5, operator: 'greater_than' },
      open_rate: { threshold: 20, operator: 'less_than' }
    }
  }
});
\`\`\`

### 4. Data Export & Backup

\`\`\`javascript
// Regular data exports
const exportJob = await brevo.account({
  operation: 'create_export',
  exportData: {
    type: 'contacts',
    format: 'csv',
    filters: {
      modified_since: '2024-01-01T00:00:00Z'
    }
  }
});

// Monitor export status
const exportStatus = await brevo.account({
  operation: 'get_export',
  exportId: exportJob.id
});
\`\`\`

### 5. Performance Metrics Dashboard

\`\`\`javascript
// Collect performance metrics
const metrics = {
  email: {
    sent: 0,
    delivered: 0, 
    opened: 0,
    clicked: 0,
    bounced: 0
  },
  contacts: {
    created: 0,
    updated: 0,
    deleted: 0
  }
};

streamProcessor.on('brevo-event', (event) => {
  // Update metrics
  if (event.event in metrics.email) {
    metrics.email[event.event]++;
  }
  
  // Calculate real-time rates
  const deliveryRate = (metrics.email.delivered / metrics.email.sent) * 100;
  const openRate = (metrics.email.opened / metrics.email.delivered) * 100;
  
  // Alert on low performance
  if (deliveryRate < 95) {
    sendAlert('Low delivery rate detected');
  }
});
\`\`\`

## Advanced Streaming Patterns

### Event Aggregation
\`\`\`javascript
// Aggregate events by time windows
const aggregations = {};

function aggregateEvents(event) {
  const timeWindow = Math.floor(Date.now() / (5 * 60 * 1000)); // 5-minute windows
  
  if (!aggregations[timeWindow]) {
    aggregations[timeWindow] = { count: 0, events: {} };
  }
  
  aggregations[timeWindow].count++;
  aggregations[timeWindow].events[event.event] = 
    (aggregations[timeWindow].events[event.event] || 0) + 1;
}
\`\`\`

### Stream Filtering
\`\`\`javascript
// Filter high-value events
streamProcessor.on('brevo-event', (event) => {
  // Only process events from premium contacts
  if (event.contact_tags?.includes('premium')) {
    processHighValueEvent(event);
  }
  
  // Filter by geographic region
  if (event.country === 'US') {
    processUSEvent(event);
  }
});
\`\`\`

## Monitoring Tools Integration

### Prometheus Metrics
\`\`\`javascript
const prometheus = require('prom-client');

const emailMetrics = new prometheus.Counter({
  name: 'brevo_emails_total',
  help: 'Total emails processed',
  labelNames: ['event_type', 'campaign']
});

streamProcessor.on('brevo-event', (event) => {
  emailMetrics.inc({ 
    event_type: event.event,
    campaign: event.campaign_id 
  });
});
\`\`\`

### Error Tracking
\`\`\`javascript
// Track webhook delivery failures
const failedEvents = [];

app.post('/stream/brevo', (req, res) => {
  try {
    processEvent(req.body);
    res.status(200).send('OK');
  } catch (error) {
    failedEvents.push({
      event: req.body,
      error: error.message,
      timestamp: new Date()
    });
    res.status(500).send('Error');
  }
});
\`\`\`

## Best Practices
- Use event queues for high-volume processing
- Implement circuit breakers for external service calls
- Monitor webhook delivery success rates
- Set up alerting for critical events
- Use database transactions for data consistency`
            }]
          };

        case 'brevo://schemas/campaign':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                "email_campaign": {
                  "name": "Campaign Name",
                  "subject": "Email subject line",
                  "templateId": 123,
                  "listIds": [1, 2, 3],
                  "excludedListIds": [4],
                  "scheduledAt": "2024-12-01T10:00:00Z",
                  "sender": {
                    "name": "Sender Name",
                    "email": "sender@company.com"
                  },
                  "replyTo": "reply@company.com",
                  "toField": "{{contact.FIRSTNAME}} {{contact.LASTNAME}}",
                  "params": {
                    "company_name": "Your Company",
                    "offer_code": "SAVE20"
                  },
                  "tags": ["newsletter", "promotion"],
                  "trackOpens": true,
                  "trackClicks": true,
                  "abTesting": {
                    "enabled": true,
                    "subjectA": "Subject A",
                    "subjectB": "Subject B",
                    "splitPercentage": 50,
                    "winnerCriteria": "openRate"
                  }
                },
                "sms_campaign": {
                  "name": "SMS Campaign Name",
                  "content": "Hello {{contact.FIRSTNAME}}, special offer: {{params.offer_code}}",
                  "listIds": [1, 2],
                  "scheduledAt": "2024-12-01T14:00:00Z",
                  "sender": "YourBrand",
                  "params": {
                    "offer_code": "SMS20"
                  }
                }
              }, null, 2)
            }]
          };

        case 'brevo://schemas/webhook':
          return {
            contents: [{
              uri,
              mimeType: 'application/json',
              text: JSON.stringify({
                "webhook_config": {
                  "url": "https://your-app.com/webhook/brevo",
                  "events": [
                    "delivered",
                    "opened", 
                    "clicked",
                    "bounced",
                    "unsubscribed",
                    "complaint",
                    "contact_created",
                    "contact_updated"
                  ],
                  "description": "Main webhook for event tracking",
                  "type": "transactional",
                  "headers": {
                    "Authorization": "Bearer your-token",
                    "X-Custom-Header": "value"
                  },
                  "auth": {
                    "type": "basic",
                    "username": "webhook_user",
                    "password": "webhook_password"
                  }
                },
                "event_payload_structure": {
                  "email_event": {
                    "event": "opened",
                    "email": "user@example.com",
                    "id": 123456,
                    "date": "2024-01-15T10:30:00Z",
                    "ts": 1642245000,
                    "message-id": "<message.id@brevo.com>",
                    "campaign_id": 789,
                    "subject": "Email subject",
                    "ip": "192.168.1.1",
                    "user_agent": "Mozilla/5.0...",
                    "link": "https://example.com/clicked-link"
                  },
                  "contact_event": {
                    "event": "contact_created",
                    "email": "new@example.com", 
                    "contact_id": 456789,
                    "date": "2024-01-15T10:25:00Z",
                    "list_ids": [1, 5],
                    "attributes": {
                      "FIRSTNAME": "John",
                      "LASTNAME": "Doe"
                    }
                  }
                }
              }, null, 2)
            }]
          };

        case 'brevo://troubleshooting/common-issues':
          return {
            contents: [{
              uri,
              mimeType: 'text/markdown',
              text: `# Common Issues & Solutions

## API Authentication Issues

### Problem: "Invalid API Key" Error
\`\`\`
Error: {"code":"unauthorized","message":"Key not found"}
\`\`\`

**Solution:**
1. Verify API key in account settings
2. Check environment variable: \`BREVO_API_KEY=xkeysib-...\`
3. Ensure key has proper permissions

\`\`\`javascript
// Test API key
const account = await brevo.account({ operation: 'get_account' });
console.log('API Key valid for:', account.email);
\`\`\`

## Email Delivery Issues

### Problem: Emails Not Being Delivered
**Common Causes:**
- Invalid sender email/domain
- Content triggers spam filters
- Recipient email invalid
- Account sending limits exceeded

**Solution:**
\`\`\`javascript
// Check account limits
const account = await brevo.account({ operation: 'get_account' });
console.log('Remaining credits:', account.plan[0].credits);

// Verify sender
const senders = await brevo.account({ operation: 'get_senders' });
console.log('Verified senders:', senders);

// Check email events for delivery status
const events = await brevo.email({
  operation: 'get_events',
  email: 'recipient@example.com'
});
\`\`\`

## Contact Import Issues

### Problem: Bulk Import Failing
**Common Issues:**
- Invalid email formats
- Missing required fields
- Duplicate contacts
- CSV encoding problems

**Solution:**
\`\`\`javascript
// Validate contacts before import
function validateContact(contact) {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(contact.email)) {
    throw new Error(\`Invalid email: \${contact.email}\`);
  }
  return true;
}

// Use dry run first
const dryRun = await brevo.bulk_contact_import({
  text: contactData,
  dryRun: true
});
console.log('Import preview:', dryRun);
\`\`\`

## Webhook Issues

### Problem: Webhooks Not Being Received
**Debugging Steps:**
1. Check webhook URL accessibility
2. Verify HTTPS endpoint
3. Test webhook response time
4. Check webhook delivery attempts

\`\`\`javascript
// List webhook delivery attempts
const attempts = await brevo.webhooks({
  operation: 'list_webhook_attempts',
  webhookId: yourWebhookId
});

console.log('Failed deliveries:', attempts.filter(a => a.status !== 200));

// Test webhook endpoint
const testWebhook = await fetch('your-webhook-url', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ test: true })
});
\`\`\`

## Template Issues

### Problem: Template Variables Not Rendering
**Common Issues:**
- Incorrect variable syntax
- Missing contact attributes
- Case sensitivity

**Solution:**
\`\`\`javascript
// Check available attributes
const attributes = await brevo.contacts({ operation: 'get_attributes' });
console.log('Available attributes:', attributes.map(a => a.name));

// Use fallback values
const template = {
  subject: "Hello {{contact.FIRSTNAME | default: 'there'}}!",
  htmlContent: \`
    <h1>Hi {{contact.FIRSTNAME | default: 'Valued Customer'}}!</h1>
    <p>Company: {{contact.COMPANY | default: 'N/A'}}</p>
  \`
};
\`\`\`

## Rate Limiting Issues

### Problem: "Too Many Requests" Error
**Solution:**
\`\`\`javascript
async function makeRequest(requestFn, retries = 3) {
  try {
    return await requestFn();
  } catch (error) {
    if (error.status === 429 && retries > 0) {
      const delay = Math.pow(2, 4 - retries) * 1000; // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay));
      return makeRequest(requestFn, retries - 1);
    }
    throw error;
  }
}
\`\`\`

## Campaign Issues

### Problem: Campaign Not Sending
**Checklist:**
- [ ] Campaign status is "sent" not "draft"
- [ ] Contact list has valid contacts
- [ ] Template is active and valid
- [ ] Sender email is verified
- [ ] Account has sufficient credits

\`\`\`javascript
// Debug campaign
const campaign = await brevo.campaigns({
  operation: 'get_email_campaigns',
  campaignId: yourCampaignId
});

console.log('Campaign status:', campaign.status);
console.log('Recipients:', campaign.recipients);
console.log('Send time:', campaign.scheduledAt);
\`\`\`

## Contact Attribute Issues

### Problem: Custom Attributes Not Saving
**Common Issues:**
- Attribute doesn't exist
- Wrong data type
- Reserved attribute names

**Solution:**
\`\`\`javascript
// Create custom attribute first
const newAttribute = await brevo.contacts({
  operation: 'create_attribute',
  attributeName: 'CUSTOM_FIELD',
  attributeData: {
    type: 'text'
  }
});

// Then update contact
const updatedContact = await brevo.contacts({
  operation: 'update',
  identifier: 'user@example.com',
  contactData: {
    attributes: {
      CUSTOM_FIELD: 'value'
    }
  }
});
\`\`\`

## Getting Help

### Enable Debug Mode
\`\`\`javascript
// Add debug logging
process.env.DEBUG_MODE = 'true';

// Or in code
const server = new BrevoMCPServer();
server.debug = true;
\`\`\`

### Check Brevo Status
- [Brevo Status Page](https://status.brevo.com)
- [API Documentation](https://developers.brevo.com)
- [Support Portal](https://help.brevo.com)

### Log Important Information
\`\`\`javascript
console.log('API Key (first 10 chars):', process.env.BREVO_API_KEY?.substring(0, 10));
console.log('Account info:', await brevo.account({ operation: 'get_account' }));
console.log('Rate limits:', response.headers);
\`\`\``
            }]
          };

        default:
          throw new McpError(ErrorCode.InvalidRequest, `Unknown resource: ${uri}`);
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

      case 'delete':
        await this.contactsApi.deleteContact(args.identifier);
        return {
          content: [{ type: 'text', text: `Contact ${args.identifier} deleted successfully` }]
        };

      case 'export':
        const requestContactExport = new brevo.RequestContactExport();
        Object.assign(requestContactExport, args.contactData);
        const exportResult = await this.contactsApi.requestContactExport(requestContactExport);
        return {
          content: [{ type: 'text', text: `Contact export initiated: ${JSON.stringify(exportResult.body, null, 2)}` }]
        };

      case 'add_to_list':
        const addContactToList = new brevo.AddContactToList();
        addContactToList.emails = [args.identifier];
        const addResult = await this.contactsApi.addContactToList(args.listId, addContactToList);
        return {
          content: [{ type: 'text', text: `Contact added to list: ${JSON.stringify(addResult.body, null, 2)}` }]
        };

      case 'remove_from_list':
        const removeContactFromList = new brevo.RemoveContactFromList();
        removeContactFromList.emails = [args.identifier];
        const removeResult = await this.contactsApi.removeContactFromList(args.listId, removeContactFromList);
        return {
          content: [{ type: 'text', text: `Contact removed from list: ${JSON.stringify(removeResult.body, null, 2)}` }]
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

      case 'bulk_update':
        const updateBatchContacts = new brevo.UpdateBatchContacts();
        Object.assign(updateBatchContacts, args.contacts);
        const batchUpdateResult = await this.contactsApi.updateBatchContacts(updateBatchContacts);
        return {
          content: [{ type: 'text', text: `Batch update completed: ${JSON.stringify(batchUpdateResult.body, null, 2)}` }]
        };

      case 'update_attribute':
        const updateAttribute = new brevo.UpdateAttribute();
        Object.assign(updateAttribute, args.attributeData);
        await this.contactsApi.updateAttribute('category', args.attributeName, updateAttribute);
        return {
          content: [{ type: 'text', text: `Attribute '${args.attributeName}' updated successfully` }]
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
        if (args.sender) {
          sendSmtpEmail.sender = args.sender;
        } else if (this.defaultSender) {
          sendSmtpEmail.sender = this.defaultSender;
        } else {
          throw new Error('Sender is required. Either provide sender in args or set BREVO_DEFAULT_SENDER_EMAIL environment variable.');
        }
        
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

      case 'create_template':
        const createTemplate = new brevo.CreateSmtpTemplate();
        Object.assign(createTemplate, args.templateData);
        const newTemplate = await this.transactionalEmailsApi.createSmtpTemplate(createTemplate);
        return {
          content: [{ type: 'text', text: `Template created with ID: ${newTemplate.body.id}` }]
        };

      case 'update_template':
        const updateTemplate = new brevo.UpdateSmtpTemplate();
        Object.assign(updateTemplate, args.templateData);
        await this.transactionalEmailsApi.updateSmtpTemplate(args.templateId, updateTemplate);
        return {
          content: [{ type: 'text', text: `Template ${args.templateId} updated successfully` }]
        };

      case 'delete_template':
        await this.transactionalEmailsApi.deleteSmtpTemplate(args.templateId);
        return {
          content: [{ type: 'text', text: `Template ${args.templateId} deleted successfully` }]
        };

      case 'get_blocked_domains':
        const blockedDomains = await this.transactionalEmailsApi.getBlockedDomains();
        return {
          content: [{ type: 'text', text: JSON.stringify(blockedDomains.body, null, 2) }]
        };

      case 'get_email_statistics':
        const emailStats = await this.transactionalEmailsApi.getAggregatedSmtpReport(
          args.startDate, args.endDate, args.days, args.tag
        );
        return {
          content: [{ type: 'text', text: JSON.stringify(emailStats.body, null, 2) }]
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

      case 'update_email_campaign':
        const updateEmailCampaign = new brevo.UpdateEmailCampaign();
        Object.assign(updateEmailCampaign, args.campaignData);
        await this.emailCampaignsApi.updateEmailCampaign(args.campaignId, updateEmailCampaign);
        return {
          content: [{ type: 'text', text: `Email campaign ${args.campaignId} updated successfully` }]
        };

      case 'send_email_campaign':
        await this.emailCampaignsApi.sendEmailCampaignNow(args.campaignId);
        return {
          content: [{ type: 'text', text: `Email campaign ${args.campaignId} sent successfully` }]
        };

      case 'schedule_email_campaign':
        const scheduleData = new brevo.UpdateCampaignStatus();
        Object.assign(scheduleData, args.campaignData);
        await this.emailCampaignsApi.updateCampaignStatus(args.campaignId, scheduleData);
        return {
          content: [{ type: 'text', text: `Email campaign ${args.campaignId} scheduled successfully` }]
        };

      case 'delete_email_campaign':
        await this.emailCampaignsApi.deleteEmailCampaign(args.campaignId);
        return {
          content: [{ type: 'text', text: `Email campaign ${args.campaignId} deleted successfully` }]
        };

      case 'create_sms_campaign':
        const createSmsCampaign = new brevo.CreateSmsCampaign();
        Object.assign(createSmsCampaign, args.campaignData);
        const newSmsCampaign = await this.smsCampaignsApi.createSmsCampaign(createSmsCampaign);
        return {
          content: [{ type: 'text', text: `SMS campaign created with ID: ${newSmsCampaign.body.id}` }]
        };

      case 'update_sms_campaign':
        const updateSmsCampaign = new brevo.UpdateSmsCampaign();
        Object.assign(updateSmsCampaign, args.campaignData);
        await this.smsCampaignsApi.updateSmsCampaign(args.campaignId, updateSmsCampaign);
        return {
          content: [{ type: 'text', text: `SMS campaign ${args.campaignId} updated successfully` }]
        };

      case 'send_sms_campaign':
        await this.smsCampaignsApi.sendSmsCampaignNow(args.campaignId);
        return {
          content: [{ type: 'text', text: `SMS campaign ${args.campaignId} sent successfully` }]
        };

      case 'schedule_sms_campaign':
        const scheduleSmsData = new brevo.UpdateCampaignStatus();
        Object.assign(scheduleSmsData, args.campaignData);
        await this.smsCampaignsApi.updateSmsCampaignStatus(args.campaignId, scheduleSmsData);
        return {
          content: [{ type: 'text', text: `SMS campaign ${args.campaignId} scheduled successfully` }]
        };

      case 'delete_sms_campaign':
        await this.smsCampaignsApi.deleteSmsCampaign(args.campaignId);
        return {
          content: [{ type: 'text', text: `SMS campaign ${args.campaignId} deleted successfully` }]
        };

      case 'export_email_recipients':
        const emailExport = new brevo.EmailExportRecipients();
        Object.assign(emailExport, args.campaignData);
        const emailExportResult = await this.emailCampaignsApi.emailExportRecipients(args.campaignId, emailExport);
        return {
          content: [{ type: 'text', text: `Email recipients export initiated: ${JSON.stringify(emailExportResult.body, null, 2)}` }]
        };

      case 'export_sms_recipients':
        const smsExport = new brevo.RequestSmsRecipientExport();
        Object.assign(smsExport, args.campaignData);
        const smsExportResult = await this.smsCampaignsApi.requestSmsRecipientExport(args.campaignId, smsExport);
        return {
          content: [{ type: 'text', text: `SMS recipients export initiated: ${JSON.stringify(smsExportResult.body, null, 2)}` }]
        };

      case 'get_campaign_statistics':
        const campaignStats = await this.emailCampaignsApi.getEmailCampaign(args.campaignId, true);
        return {
          content: [{ type: 'text', text: JSON.stringify(campaignStats.body, null, 2) }]
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

      case 'get_events':
        const smsEvents = await this.transactionalSMSApi.getSmsEvents({
          limit: args.limit,
          startDate: args.startDate,
          endDate: args.endDate,
          offset: args.offset,
          days: args.days,
          phoneNumber: args.phoneNumber,
          event: args.event,
          tags: args.tags,
          sort: args.sort
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(smsEvents.body, null, 2) }]
        };

      case 'get_statistics':
        const smsStats = await this.transactionalSMSApi.getTransacAggregatedSmsReport(
          args.startDate, args.endDate, args.days, args.tag
        );
        return {
          content: [{ type: 'text', text: JSON.stringify(smsStats.body, null, 2) }]
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
        const conversation = await this.conversationsApi.conversationsMessagesIdGet(args.conversationId);
        return {
          content: [{ type: 'text', text: JSON.stringify(conversation.body, null, 2) }]
        };

      case 'get_messages':
        const messages = await this.conversationsApi.conversationsMessagesIdGet(args.conversationId);
        return {
          content: [{ type: 'text', text: JSON.stringify(messages.body, null, 2) }]
        };

      case 'send_message':
        const messageData = {
          content: args.message,
          agentId: args.agentId
        };
        const sentMessage = await this.conversationsApi.conversationsMessagesPost(messageData);
        return {
          content: [{ type: 'text', text: `Message sent: ${JSON.stringify(sentMessage.body, null, 2)}` }]
        };

      case 'update_conversation':
        const updateData = {
          status: args.status,
          agentId: args.agentId
        };
        await this.conversationsApi.conversationsMessagesIdPut(args.conversationId, updateData);
        return {
          content: [{ type: 'text', text: `Conversation ${args.conversationId} updated successfully` }]
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

      case 'export_history':
        const exportHistory = new brevo.ExportWebhooksHistory();
        Object.assign(exportHistory, args.exportData);
        const historyExport = await this.webhooksApi.exportWebhooksHistory(exportHistory);
        return {
          content: [{ type: 'text', text: `Webhook history export initiated: ${JSON.stringify(historyExport.body, null, 2)}` }]
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

      case 'create_sender':
        const createSender = new brevo.CreateSender();
        Object.assign(createSender, args.senderData);
        const newSender = await this.sendersApi.createSender(createSender);
        return {
          content: [{ type: 'text', text: `Sender created: ${JSON.stringify(newSender.body, null, 2)}` }]
        };

      case 'update_sender':
        const updateSender = new brevo.UpdateSender();
        Object.assign(updateSender, args.senderData);
        await this.sendersApi.updateSender(args.senderId, updateSender);
        return {
          content: [{ type: 'text', text: `Sender ${args.senderId} updated successfully` }]
        };

      case 'delete_sender':
        await this.sendersApi.deleteSender(args.senderId);
        return {
          content: [{ type: 'text', text: `Sender ${args.senderId} deleted successfully` }]
        };

      case 'get_domains':
        const domains = await this.domainsApi.getDomains();
        return {
          content: [{ type: 'text', text: JSON.stringify(domains.body, null, 2) }]
        };

      case 'create_domain':
        const createDomain = new brevo.CreateDomain();
        createDomain.name = args.domain;
        const newDomain = await this.domainsApi.createDomain(createDomain);
        return {
          content: [{ type: 'text', text: `Domain created: ${JSON.stringify(newDomain.body, null, 2)}` }]
        };

      case 'validate_domain':
        await this.domainsApi.authenticateDomain(args.domain);
        return {
          content: [{ type: 'text', text: `Domain ${args.domain} validated successfully` }]
        };

      case 'get_folders':
        const folders = await this.contactsApi.getFolders(args.limit || 50, args.offset || 0);
        return {
          content: [{ type: 'text', text: JSON.stringify(folders.body, null, 2) }]
        };

      case 'create_folder':
        const createFolder = new brevo.CreateUpdateFolder();
        Object.assign(createFolder, args.folderData);
        const newFolder = await this.contactsApi.createFolder(createFolder);
        return {
          content: [{ type: 'text', text: `Folder created with ID: ${newFolder.body.id}` }]
        };

      case 'update_folder':
        const updateFolder = new brevo.CreateUpdateFolder();
        Object.assign(updateFolder, args.folderData);
        await this.contactsApi.updateFolder(args.folderId, updateFolder);
        return {
          content: [{ type: 'text', text: `Folder ${args.folderId} updated successfully` }]
        };

      case 'delete_folder':
        await this.contactsApi.deleteFolder(args.folderId);
        return {
          content: [{ type: 'text', text: `Folder ${args.folderId} deleted successfully` }]
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

      case 'get_products':
        const products = await this.ecommerceApi.getProducts({
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(products.body, null, 2) }]
        };

      case 'create_product':
        const product = new brevo.CreateProductModel();
        Object.assign(product, args.productData);
        const newProduct = await this.ecommerceApi.createProduct(product);
        return {
          content: [{ type: 'text', text: `Product created: ${JSON.stringify(newProduct.body, null, 2)}` }]
        };

      case 'update_product':
        const updateProduct = new brevo.CreateProductModel();
        Object.assign(updateProduct, args.productData);
        await this.ecommerceApi.updateProduct(args.productId, updateProduct);
        return {
          content: [{ type: 'text', text: `Product ${args.productId} updated successfully` }]
        };

      case 'delete_product':
        await this.ecommerceApi.deleteProduct(args.productId);
        return {
          content: [{ type: 'text', text: `Product ${args.productId} deleted successfully` }]
        };

      case 'get_categories':
        const categories = await this.ecommerceApi.getCategories({
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(categories.body, null, 2) }]
        };

      case 'create_category':
        const category = new brevo.CreateCategoryModel();
        Object.assign(category, args.categoryData);
        const newCategory = await this.ecommerceApi.createCategory(category);
        return {
          content: [{ type: 'text', text: `Category created: ${JSON.stringify(newCategory.body, null, 2)}` }]
        };

      case 'update_category':
        const updateCategory = new brevo.CreateCategoryModel();
        Object.assign(updateCategory, args.categoryData);
        await this.ecommerceApi.updateCategory(args.categoryId, updateCategory);
        return {
          content: [{ type: 'text', text: `Category ${args.categoryId} updated successfully` }]
        };

      case 'delete_category':
        await this.ecommerceApi.deleteCategory(args.categoryId);
        return {
          content: [{ type: 'text', text: `Category ${args.categoryId} deleted successfully` }]
        };

      case 'create_batch_order':
        const orderBatch = new brevo.OrderBatch();
        Object.assign(orderBatch, args.orderData);
        const batchOrderResult = await this.ecommerceApi.createBatchOrder(orderBatch);
        return {
          content: [{ type: 'text', text: `Batch order created: ${JSON.stringify(batchOrderResult.body, null, 2)}` }]
        };

      case 'create_update_batch_products':
        const batchProducts = new brevo.CreateUpdateBatchProducts();
        Object.assign(batchProducts, args.productData);
        const batchProductResult = await this.ecommerceApi.createUpdateBatchProducts(batchProducts);
        return {
          content: [{ type: 'text', text: `Batch products processed: ${JSON.stringify(batchProductResult.body, null, 2)}` }]
        };

      case 'create_update_batch_category':
        const batchCategories = new brevo.CreateUpdateBatchCategory();
        Object.assign(batchCategories, args.categoryData);
        const batchCategoryResult = await this.ecommerceApi.createUpdateBatchCategory(batchCategories);
        return {
          content: [{ type: 'text', text: `Batch categories processed: ${JSON.stringify(batchCategoryResult.body, null, 2)}` }]
        };

      // Coupon operations
      case 'get_coupon_collections':
        const collections = await this.couponsApi.getCouponCollections({
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(collections.body, null, 2) }]
        };

      case 'get_coupon_collection':
        const collection = await this.couponsApi.getCouponCollection(args.couponCollectionId);
        return {
          content: [{ type: 'text', text: JSON.stringify(collection.body, null, 2) }]
        };

      case 'create_coupon_collection':
        const createCouponCollection = new brevo.CreateCouponCollectionRequest();
        Object.assign(createCouponCollection, args.couponData);
        const newCollection = await this.couponsApi.createCouponCollection(createCouponCollection);
        return {
          content: [{ type: 'text', text: `Coupon collection created: ${JSON.stringify(newCollection.body, null, 2)}` }]
        };

      case 'create_coupons':
        const createCoupons = new brevo.CreateCouponsRequest();
        Object.assign(createCoupons, args.couponData);
        const coupons = await this.couponsApi.createCoupons(createCoupons);
        return {
          content: [{ type: 'text', text: `Coupons created: ${JSON.stringify(coupons.body, null, 2)}` }]
        };

      // Payment operations
      case 'create_payment_request':
        const paymentRequest = new brevo.CreatePaymentRequest();
        Object.assign(paymentRequest, args.paymentData);
        const payment = await this.paymentsApi.createPaymentRequest(paymentRequest);
        return {
          content: [{ type: 'text', text: `Payment request created: ${JSON.stringify(payment.body, null, 2)}` }]
        };

      case 'get_payment_request':
        const paymentDetails = await this.paymentsApi.getPaymentRequest(args.paymentId);
        return {
          content: [{ type: 'text', text: JSON.stringify(paymentDetails.body, null, 2) }]
        };

      default:
        throw new Error(`Unknown e-commerce operation: ${operation}`);
    }
  }

  // CRM operations handler
  private async handleCRM(args: any) {
    const { operation } = args;

    switch (operation) {
      // Company operations
      case 'get_companies':
        const companies = await this.companiesApi.getCompanies({
          filters: args.filters,
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(companies.body, null, 2) }]
        };

      case 'get_company':
        const company = await this.companiesApi.getCompaniesId(args.companyId);
        return {
          content: [{ type: 'text', text: JSON.stringify(company.body, null, 2) }]
        };

      case 'create_company':
        const createCompany = new brevo.CompaniesPostRequest();
        Object.assign(createCompany, args.companyData);
        const newCompany = await this.companiesApi.companiesPost(createCompany);
        return {
          content: [{ type: 'text', text: `Company created with ID: ${newCompany.body.id}` }]
        };

      case 'update_company':
        const updateCompany = new brevo.CompaniesIdPatchRequest();
        Object.assign(updateCompany, args.companyData);
        await this.companiesApi.companiesIdPatch(args.companyId, updateCompany);
        return {
          content: [{ type: 'text', text: `Company ${args.companyId} updated successfully` }]
        };

      case 'delete_company':
        await this.companiesApi.companiesIdDelete(args.companyId);
        return {
          content: [{ type: 'text', text: `Company ${args.companyId} deleted successfully` }]
        };

      // Deal operations
      case 'get_deals':
        const deals = await this.dealsApi.getDeals({
          filters: args.filters,
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(deals.body, null, 2) }]
        };

      case 'get_deal':
        const deal = await this.dealsApi.getDealsId(args.dealId);
        return {
          content: [{ type: 'text', text: JSON.stringify(deal.body, null, 2) }]
        };

      case 'create_deal':
        const createDeal = new brevo.CrmDealsPostRequest();
        Object.assign(createDeal, args.dealData);
        const newDeal = await this.dealsApi.dealsPost(createDeal);
        return {
          content: [{ type: 'text', text: `Deal created with ID: ${newDeal.body.id}` }]
        };

      case 'update_deal':
        const updateDeal = new brevo.CrmDealsIdPatchRequest();
        Object.assign(updateDeal, args.dealData);
        await this.dealsApi.dealsIdPatch(args.dealId, updateDeal);
        return {
          content: [{ type: 'text', text: `Deal ${args.dealId} updated successfully` }]
        };

      case 'delete_deal':
        await this.dealsApi.dealsIdDelete(args.dealId);
        return {
          content: [{ type: 'text', text: `Deal ${args.dealId} deleted successfully` }]
        };

      // Task operations
      case 'get_tasks':
        const tasks = await this.tasksApi.getTasks({
          filters: args.filters,
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(tasks.body, null, 2) }]
        };

      case 'get_task':
        const task = await this.tasksApi.getTasksId(args.taskId);
        return {
          content: [{ type: 'text', text: JSON.stringify(task.body, null, 2) }]
        };

      case 'create_task':
        const createTask = new brevo.CrmTasksPostRequest();
        Object.assign(createTask, args.taskData);
        const newTask = await this.tasksApi.tasksPost(createTask);
        return {
          content: [{ type: 'text', text: `Task created with ID: ${newTask.body.id}` }]
        };

      case 'update_task':
        const updateTask = new brevo.CrmTasksIdPatchRequest();
        Object.assign(updateTask, args.taskData);
        await this.tasksApi.tasksIdPatch(args.taskId, updateTask);
        return {
          content: [{ type: 'text', text: `Task ${args.taskId} updated successfully` }]
        };

      case 'delete_task':
        await this.tasksApi.tasksIdDelete(args.taskId);
        return {
          content: [{ type: 'text', text: `Task ${args.taskId} deleted successfully` }]
        };

      // Note operations
      case 'get_notes':
        const notes = await this.notesApi.getNotes({
          entityType: args.entityType,
          entityId: args.entityId,
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(notes.body, null, 2) }]
        };

      case 'get_note':
        const note = await this.notesApi.getNotesId(args.noteId);
        return {
          content: [{ type: 'text', text: JSON.stringify(note.body, null, 2) }]
        };

      case 'create_note':
        const createNote = new brevo.Note();
        Object.assign(createNote, args.noteData);
        const newNote = await this.notesApi.notesPost(createNote);
        return {
          content: [{ type: 'text', text: `Note created with ID: ${newNote.body.id}` }]
        };

      case 'update_note':
        const updateNote = new brevo.Note();
        Object.assign(updateNote, args.noteData);
        await this.notesApi.notesIdPatch(args.noteId, updateNote);
        return {
          content: [{ type: 'text', text: `Note ${args.noteId} updated successfully` }]
        };

      case 'delete_note':
        await this.notesApi.notesIdDelete(args.noteId);
        return {
          content: [{ type: 'text', text: `Note ${args.noteId} deleted successfully` }]
        };

      // Additional CRM operations
      case 'get_company_attributes':
        const companyAttributes = await this.companiesApi.getCompaniesAttributes();
        return {
          content: [{ type: 'text', text: JSON.stringify(companyAttributes.body, null, 2) }]
        };

      case 'get_deal_attributes':
        const dealAttributes = await this.dealsApi.getDealsAttributes();
        return {
          content: [{ type: 'text', text: JSON.stringify(dealAttributes.body, null, 2) }]
        };

      case 'get_pipelines':
        const pipelines = await this.dealsApi.getPipelines();
        return {
          content: [{ type: 'text', text: JSON.stringify(pipelines.body, null, 2) }]
        };

      case 'get_task_types':
        const taskTypes = await this.tasksApi.getTaskTypes();
        return {
          content: [{ type: 'text', text: JSON.stringify(taskTypes.body, null, 2) }]
        };

      default:
        throw new Error(`Unknown CRM operation: ${operation}`);
    }
  }

  // WhatsApp operations handler
  private async handleWhatsApp(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'send_message':
        const sendWhatsAppMessage = new brevo.SendWhatsappMessage();
        sendWhatsAppMessage.contactNumbers = [args.recipient];
        Object.assign(sendWhatsAppMessage, args.templateData);
        const messageResult = await this.transactionalWhatsAppApi.sendWhatsAppMessage(sendWhatsAppMessage);
        return {
          content: [{ type: 'text', text: `WhatsApp message sent: ${JSON.stringify(messageResult.body, null, 2)}` }]
        };

      case 'get_whatsapp_campaigns':
        const whatsappCampaigns = await this.whatsAppCampaignsApi.getWhatsAppCampaigns({
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(whatsappCampaigns.body, null, 2) }]
        };

      case 'get_whatsapp_campaign':
        const campaign = await this.whatsAppCampaignsApi.getWhatsAppCampaign(args.campaignId);
        return {
          content: [{ type: 'text', text: JSON.stringify(campaign.body, null, 2) }]
        };

      case 'create_whatsapp_campaign':
        const createCampaign = new brevo.CreateWhatsAppCampaign();
        Object.assign(createCampaign, args.campaignData);
        const newCampaign = await this.whatsAppCampaignsApi.createWhatsAppCampaign(createCampaign);
        return {
          content: [{ type: 'text', text: `WhatsApp campaign created with ID: ${newCampaign.body.id}` }]
        };

      case 'update_whatsapp_campaign':
        const updateCampaign = new brevo.UpdateWhatsAppCampaign();
        Object.assign(updateCampaign, args.campaignData);
        await this.whatsAppCampaignsApi.updateWhatsAppCampaign(args.campaignId, updateCampaign);
        return {
          content: [{ type: 'text', text: `WhatsApp campaign ${args.campaignId} updated successfully` }]
        };

      case 'delete_whatsapp_campaign':
        await this.whatsAppCampaignsApi.deleteWhatsAppCampaign(args.campaignId);
        return {
          content: [{ type: 'text', text: `WhatsApp campaign ${args.campaignId} deleted successfully` }]
        };

      case 'get_whatsapp_templates':
        const templates = await this.whatsAppCampaignsApi.getWhatsAppTemplates({
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(templates.body, null, 2) }]
        };

      default:
        throw new Error(`Unknown WhatsApp operation: ${operation}`);
    }
  }

  // Events operations handler
  private async handleEvents(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'create_event':
        const createEvent = new brevo.Event();
        createEvent.identifiers = { emailId: args.email };
        createEvent.eventName = args.eventName;
        Object.assign(createEvent, args.eventData);
        const eventResult = await this.eventsApi.createEvent(createEvent);
        return {
          content: [{ type: 'text', text: `Event created: ${JSON.stringify(eventResult.body, null, 2)}` }]
        };

      default:
        throw new Error(`Unknown events operation: ${operation}`);
    }
  }

  // Inbound parsing operations handler
  private async handleInbound(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'get_inbound_email_events':
        const events = await this.inboundParsingApi.getInboundEmailEvents({
          sender: args.sender,
          startDate: args.startDate,
          endDate: args.endDate,
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(events.body, null, 2) }]
        };

      case 'get_inbound_email_by_uuid':
        const email = await this.inboundParsingApi.getInboundEmailEventsByUuid(args.uuid);
        return {
          content: [{ type: 'text', text: JSON.stringify(email.body, null, 2) }]
        };

      case 'get_inbound_email_attachment':
        const attachment = await this.inboundParsingApi.getInboundEmailAttachment(args.uuid, args.attachmentId);
        return {
          content: [{ type: 'text', text: `Attachment downloaded: ${JSON.stringify(attachment.body, null, 2)}` }]
        };

      default:
        throw new Error(`Unknown inbound operation: ${operation}`);
    }
  }

  // Enterprise operations handler
  private async handleEnterprise(args: any) {
    const { operation } = args;

    switch (operation) {
      case 'get_master_account':
        const masterAccount = await this.masterAccountApi.getMasterAccount();
        return {
          content: [{ type: 'text', text: JSON.stringify(masterAccount.body, null, 2) }]
        };

      case 'get_sub_accounts':
        const subAccounts = await this.masterAccountApi.getSubAccounts({
          limit: args.limit || 50,
          offset: args.offset || 0
        });
        return {
          content: [{ type: 'text', text: JSON.stringify(subAccounts.body, null, 2) }]
        };

      case 'create_sub_account':
        const createSubAccount = new brevo.CreateSubAccount();
        Object.assign(createSubAccount, args.subAccountData);
        const newSubAccount = await this.masterAccountApi.createSubAccount(createSubAccount);
        return {
          content: [{ type: 'text', text: `Sub-account created: ${JSON.stringify(newSubAccount.body, null, 2)}` }]
        };

      case 'get_sub_account':
        const subAccount = await this.masterAccountApi.getSubAccountDetails(args.subAccountId);
        return {
          content: [{ type: 'text', text: JSON.stringify(subAccount.body, null, 2) }]
        };

      case 'delete_sub_account':
        await this.masterAccountApi.deleteSubAccount(args.subAccountId);
        return {
          content: [{ type: 'text', text: `Sub-account ${args.subAccountId} deleted successfully` }]
        };

      case 'get_invited_users':
        const invitedUsers = await this.userApi.getInvitedUsers();
        return {
          content: [{ type: 'text', text: JSON.stringify(invitedUsers.body, null, 2) }]
        };

      case 'get_user_permission':
        const userPermission = await this.userApi.getUserPermission(args.userId);
        return {
          content: [{ type: 'text', text: JSON.stringify(userPermission.body, null, 2) }]
        };

      case 'edit_user_permission':
        const editPermission = new brevo.InviteAdminUser();
        Object.assign(editPermission, args.permissions);
        await this.userApi.editUserPermission(args.userId, editPermission);
        return {
          content: [{ type: 'text', text: `User ${args.userId} permissions updated successfully` }]
        };

      default:
        throw new Error(`Unknown enterprise operation: ${operation}`);
    }
  }

  // Bulk contact import handler
  private async handleBulkContactImport(args: any) {
    const { text, listId, updateExisting = true, dryRun = false } = args;

    try {
      // Parse the input text to extract contacts
      const contacts = this.parseContactText(text);
      
      if (contacts.length === 0) {
        return {
          content: [{ type: 'text', text: 'No valid contacts found in the provided text.' }]
        };
      }

      if (dryRun) {
        return {
          content: [{ 
            type: 'text', 
            text: `DRY RUN: Would import ${contacts.length} contacts:\n${JSON.stringify(contacts, null, 2)}` 
          }]
        };
      }

      // Create the import request
      const importRequest = new brevo.RequestContactImport();
      importRequest.jsonBody = contacts;
      importRequest.updateExistingContacts = updateExisting;
      
      if (listId) {
        importRequest.listIds = [listId];
      }

      // Execute the import
      const importResult = await this.contactsApi.importContacts(importRequest);
      
      return {
        content: [{ 
          type: 'text', 
          text: `Bulk import initiated successfully! Process ID: ${importResult.body.processId}\nImported ${contacts.length} contacts.` 
        }]
      };

    } catch (error) {
      throw new Error(`Bulk import failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // Helper method to parse contact text
  private parseContactText(text: string): any[] {
    const contacts: any[] = [];
    const lines = text.split('\n').filter(line => line.trim());

    for (const line of lines) {
      const contact = this.extractContactFromLine(line.trim());
      if (contact) {
        contacts.push(contact);
      }
    }

    return contacts;
  }

  // Helper method to extract contact info from a single line
  private extractContactFromLine(line: string): any | null {
    // Email regex
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    const phoneRegex = /(\+?[\d\s\-\(\)]{10,})/g;
    
    const emails = line.match(emailRegex);
    if (!emails || emails.length === 0) {
      return null; // Skip lines without email
    }

    const email = emails[0];
    const phones = line.match(phoneRegex);
    
    // Extract name (everything before email or in quotes/brackets)
    let name = '';
    let firstName = '';
    let lastName = '';
    
    // Try to extract name from various formats
    const nameMatch = line.match(/^([^<@]+)<?/) || line.match(/["']([^"']+)["']/) || line.match(/\(([^)]+)\)/);
    if (nameMatch) {
      name = nameMatch[1].trim();
      const nameParts = name.split(/\s+/);
      if (nameParts.length >= 2) {
        firstName = nameParts[0];
        lastName = nameParts.slice(1).join(' ');
      } else if (nameParts.length === 1) {
        firstName = nameParts[0];
      }
    }

    // Build contact object
    const contact: any = { email };
    const attributes: any = {};

    if (firstName) attributes.FIRSTNAME = firstName;
    if (lastName) attributes.LASTNAME = lastName;
    if (phones && phones.length > 0) {
      const phone = phones[0].replace(/[\s\-\(\)]/g, '');
      if (phone.startsWith('+')) {
        attributes.SMS = phone;
      } else {
        attributes.SMS = phone;
      }
    }

    // Extract company (look for patterns like "at Company" or "@ Company")
    const companyMatch = line.match(/(?:at|@)\s+([^,<@]+)/i);
    if (companyMatch) {
      attributes.COMPANY = companyMatch[1].trim();
    }

    if (Object.keys(attributes).length > 0) {
      contact.attributes = attributes;
    }

    return contact;
  }

  async run(): Promise<void> {
    try {
      const transport = new StdioServerTransport();
      await this.server.connect(transport);
      console.error('Brevo MCP server running on stdio');
    } catch (error) {
      console.error('Failed to start Brevo MCP server:', error);
      process.exit(1);
    }
  }
}

// Start the server
const server = new BrevoMCPServer();
server.run().catch((error) => {
  console.error('Unhandled error in Brevo MCP server:', error);
  process.exit(1);
});