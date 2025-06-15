#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ErrorCode, ListToolsRequestSchema, McpError, } from '@modelcontextprotocol/sdk/types.js';
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
                        description: 'E-commerce integration - manage orders, products, coupons, and payments',
                        inputSchema: {
                            type: 'object',
                            properties: {
                                operation: {
                                    type: 'string',
                                    enum: [
                                        'create_order', 'get_order', 'get_orders', 'update_order',
                                        'get_products', 'create_product', 'update_product', 'delete_product',
                                        'get_categories', 'create_category', 'update_category', 'delete_category',
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
                const conversation = await this.conversationsApi.getConversation(args.conversationId);
                return {
                    content: [{ type: 'text', text: JSON.stringify(conversation.body, null, 2) }]
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
