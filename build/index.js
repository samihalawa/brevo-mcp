#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ErrorCode, ListToolsRequestSchema, ListResourcesRequestSchema, ReadResourceRequestSchema, McpError, } from '@modelcontextprotocol/sdk/types.js';
import * as brevo from '@getbrevo/brevo';
// MCP Server Implementation
class BrevoMCPServer {
    constructor() {
        this.server = new Server({
            name: 'brevo-mcp',
            version: '1.0.0',
        }, {
            capabilities: {
                tools: {},
                resources: {},
            },
        });
        // Initialize from environment variables
        this.apiKey = process.env.BREVO_API_KEY || '';
        // Optional default sender configuration
        if (process.env.BREVO_DEFAULT_SENDER_EMAIL) {
            this.defaultSender = {
                email: process.env.BREVO_DEFAULT_SENDER_EMAIL,
                name: process.env.BREVO_DEFAULT_SENDER_NAME || 'Brevo Sender'
            };
        }
        if (!this.apiKey) {
            console.error('BREVO_API_KEY environment variable is required');
            process.exit(1);
        }
        this.initializeBrevoAPIs();
        this.setupToolHandlers();
        this.setupResourceHandlers();
        this.setupErrorHandling();
    }
    initializeBrevoAPIs() {
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
    setupErrorHandling() {
        this.server.onerror = (error) => {
            console.error('[MCP Error]', error);
        };
        process.on('SIGINT', async () => {
            await this.server.close();
            process.exit(0);
        });
    }
    setupToolHandlers() {
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
                        throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
                }
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                throw new McpError(ErrorCode.InternalError, `Error executing ${name}: ${errorMessage}`);
            }
        });
    }
    setupResourceHandlers() {
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
                    }
                    catch (error) {
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
                    }
                    catch (error) {
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
                default:
                    throw new McpError(ErrorCode.InvalidRequest, `Unknown resource: ${uri}`);
            }
        });
    }
    // Contact operations handler
    async handleContacts(args) {
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
    async handleEmail(args) {
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
                }
                else if (this.defaultSender) {
                    sendSmtpEmail.sender = this.defaultSender;
                }
                else {
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
                const emailStats = await this.transactionalEmailsApi.getAggregatedSmtpReport(args.startDate, args.endDate, args.days, args.tag);
                return {
                    content: [{ type: 'text', text: JSON.stringify(emailStats.body, null, 2) }]
                };
            default:
                throw new Error(`Unknown email operation: ${operation}`);
        }
    }
    // Campaign operations handler
    async handleCampaigns(args) {
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
    async handleSMS(args) {
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
                const smsStats = await this.transactionalSMSApi.getTransacAggregatedSmsReport(args.startDate, args.endDate, args.days, args.tag);
                return {
                    content: [{ type: 'text', text: JSON.stringify(smsStats.body, null, 2) }]
                };
            default:
                throw new Error(`Unknown SMS operation: ${operation}`);
        }
    }
    // Conversations operations handler
    async handleConversations(args) {
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
    async handleWebhooks(args) {
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
    async handleAccount(args) {
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
    async handleEcommerce(args) {
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
    async handleCRM(args) {
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
    async handleWhatsApp(args) {
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
    async handleEvents(args) {
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
    async handleInbound(args) {
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
    async handleEnterprise(args) {
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
    async handleBulkContactImport(args) {
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
        }
        catch (error) {
            throw new Error(`Bulk import failed: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    // Helper method to parse contact text
    parseContactText(text) {
        const contacts = [];
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
    extractContactFromLine(line) {
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
            }
            else if (nameParts.length === 1) {
                firstName = nameParts[0];
            }
        }
        // Build contact object
        const contact = { email };
        const attributes = {};
        if (firstName)
            attributes.FIRSTNAME = firstName;
        if (lastName)
            attributes.LASTNAME = lastName;
        if (phones && phones.length > 0) {
            const phone = phones[0].replace(/[\s\-\(\)]/g, '');
            if (phone.startsWith('+')) {
                attributes.SMS = phone;
            }
            else {
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
    async run() {
        try {
            const transport = new StdioServerTransport();
            await this.server.connect(transport);
            console.error('Brevo MCP server running on stdio');
        }
        catch (error) {
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
