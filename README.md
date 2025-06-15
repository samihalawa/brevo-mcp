# Brevo MCP Server

📧 **Complete Brevo API Integration for Claude & Smithery using Official SDK**

A comprehensive MCP server that provides Claude with full access to Brevo's marketing automation platform using the official `@getbrevo/brevo` Node.js SDK. Features 8 organized tools covering all major Brevo functionalities.

## ✨ Features

- 🔧 **Official Brevo SDK** - Built with `@getbrevo/brevo` for maximum compatibility
- 📧 **Email Operations** - Transactional emails, templates, tracking, events
- 📱 **SMS & WhatsApp** - Send SMS, manage campaigns, WhatsApp integration
- 👥 **Contact Management** - Contacts, lists, attributes, bulk operations
- 🎯 **Campaign Management** - Email and SMS campaigns, scheduling, analytics
- 💬 **Conversations** - Chat and conversation management
- 🔗 **Webhooks** - Event-driven automation and notifications
- 🛒 **E-commerce** - Orders, products, categories integration
- 🏢 **Account Management** - Senders, domains, folders, account info
- 🚀 **Smithery Compatible** - Ready for Smithery deployment
- 🛡️ **Type-Safe** - Full TypeScript support

## 🚀 Quick Start

### Option 1: Using Smithery (Recommended)

1. **Configure in Smithery:**
   ```yaml
   brevo-mcp:
     apiKey: "your-brevo-api-key"           # Required
     defaultSenderEmail: "your@domain.com" # Optional
     defaultSenderName: "Your Name"        # Optional
   ```

### Option 2: Local Installation

1. **Install:**
   ```bash
   npm install
   npm run build
   ```

2. **Set Environment Variables:**
   ```bash
   export BREVO_API_KEY="your-brevo-api-key"
   export BREVO_DEFAULT_SENDER_EMAIL="your@domain.com"
   export BREVO_DEFAULT_SENDER_NAME="Your Name"
   ```

3. **Run:**
   ```bash
   npm start
   ```

## 🛠️ Available Tools

### 1. `contacts` - Contact Management
Complete contact database operations with bulk capabilities.

**Operations:**
- `get` - Retrieve contact by email/ID
- `create` - Create new contact
- `update` - Update contact information
- `delete` - Delete contact
- `bulk_import` - Import contacts in bulk
- `export` - Export contacts
- `add_to_list` / `remove_from_list` - List management
- `get_lists` / `create_list` - Manage contact lists
- `get_attributes` / `create_attribute` / `update_attribute` - Custom attributes

**Example:**
```json
{
  "operation": "bulk_import",
  "contacts": [
    {
      "email": "user1@example.com",
      "attributes": {
        "FIRSTNAME": "John",
        "LASTNAME": "Doe"
      }
    }
  ]
}
```

### 2. `email` - Transactional Emails
Send emails, manage templates, track delivery and events.

**Operations:**
- `send` - Send transactional email
- `send_template` - Send using template
- `get_events` - Track email events
- `get_templates` - List email templates
- `create_template` / `update_template` / `delete_template` - Template management
- `get_blocked_domains` - Check blocked domains
- `get_email_statistics` - Email analytics

**Example:**
```json
{
  "operation": "send",
  "to": [{"email": "recipient@example.com", "name": "John Doe"}],
  "subject": "Welcome to our service",
  "htmlContent": "<h1>Welcome!</h1><p>Thank you for joining us.</p>",
  "sender": {"email": "noreply@yourcompany.com", "name": "Your Company"}
}
```

### 3. `campaigns` - Marketing Campaigns
Create and manage email and SMS marketing campaigns.

**Operations:**
- `get_email_campaigns` / `create_email_campaign` / `update_email_campaign`
- `send_email_campaign` / `schedule_email_campaign` / `delete_email_campaign`
- `get_sms_campaigns` / `create_sms_campaign` / `update_sms_campaign`
- `send_sms_campaign` / `schedule_sms_campaign` / `delete_sms_campaign`
- `get_campaign_statistics` - Campaign analytics

**Example:**
```json
{
  "operation": "create_email_campaign",
  "campaignData": {
    "name": "Newsletter Campaign",
    "subject": "Monthly Newsletter",
    "htmlContent": "<h1>Newsletter</h1>",
    "recipients": {"listIds": [1, 2]}
  }
}
```

### 4. `sms` - SMS Operations
Send transactional SMS and manage SMS campaigns.

**Operations:**
- `send` - Send single SMS
- `send_batch` - Send to multiple recipients
- `get_events` - Track SMS events
- `get_statistics` - SMS analytics

**Example:**
```json
{
  "operation": "send_batch",
  "recipients": ["+1234567890", "+0987654321"],
  "content": "Your order is ready for pickup!",
  "sender": "YourBrand"
}
```

### 5. `conversations` - Chat Management
Handle customer conversations and chat interactions.

**Operations:**
- `get_conversations` - List conversations
- `get_conversation` - Get specific conversation
- `get_messages` - Get conversation messages
- `send_message` - Send message
- `update_conversation` - Update conversation status

### 6. `webhooks` - Event Automation
Manage webhooks for real-time event notifications.

**Operations:**
- `get_webhooks` / `create_webhook` / `update_webhook` / `delete_webhook`
- `get_webhook` - Get specific webhook

**Example:**
```json
{
  "operation": "create_webhook",
  "url": "https://your-app.com/brevo-webhook",
  "events": ["delivered", "opened", "clicked"],
  "description": "Email tracking webhook",
  "type": "transactional"
}
```

### 7. `account` - Account Management
Manage account settings, senders, domains, and folders.

**Operations:**
- `get_account` - Account information
- `get_senders` / `create_sender` / `update_sender` / `delete_sender`
- `get_domains` / `create_domain` / `validate_domain`
- `get_folders` / `create_folder` / `update_folder` / `delete_folder`

### 8. `ecommerce` - E-commerce Integration
Manage orders, products, and categories for e-commerce tracking.

**Operations:**
- `get_orders` / `create_order` / `get_order` / `update_order`
- `get_products` / `create_product` / `update_product` / `delete_product`
- `get_categories` / `create_category` / `update_category` / `delete_category`

**Example:**
```json
{
  "operation": "create_order",
  "orderData": {
    "id": "order-123",
    "email": "customer@example.com",
    "products": [
      {
        "id": "product-1",
        "name": "Widget",
        "price": 29.99,
        "quantity": 2
      }
    ],
    "total": 59.98
  }
}
```

## 📋 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BREVO_API_KEY` | Your Brevo API key | ✅ Yes |
| `BREVO_DEFAULT_SENDER_EMAIL` | Default sender email | ❌ No |
| `BREVO_DEFAULT_SENDER_NAME` | Default sender name | ❌ No |
| `DEBUG` | Enable debug logging | ❌ No |

### Smithery Configuration

```yaml
version: 1
startCommand:
  type: stdio
  configSchema:
    type: object
    required: ['apiKey']
    properties:
      apiKey:
        type: string
        description: "Brevo API key for authentication (required)"
      defaultSenderEmail:
        type: string
        description: "Default sender email address"
      defaultSenderName:
        type: string
        description: "Default sender name"
      debug:
        type: boolean
        description: "Enable debug mode"
        default: false
```

## 🔧 Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run the server
npm start

# Test the server
npm test

# Run with Smithery
npm run smithery
```

## 📊 Common Use Cases

### Bulk Contact Import
```json
{
  "operation": "bulk_import",
  "contacts": [
    {
      "email": "user1@example.com",
      "attributes": {
        "FIRSTNAME": "John",
        "LASTNAME": "Doe",
        "COMPANY": "Acme Corp"
      }
    }
  ]
}
```

### Email Campaign with Tracking
```json
{
  "operation": "create_email_campaign",
  "campaignData": {
    "name": "Product Launch",
    "subject": "Introducing Our New Product",
    "htmlContent": "<h1>New Product Launch</h1>",
    "recipients": {"listIds": [1]},
    "scheduler": {
      "sendAt": "2024-01-01T10:00:00Z"
    }
  }
}
```

### E-commerce Order Tracking
```json
{
  "operation": "create_order",
  "orderData": {
    "id": "order-456",
    "email": "customer@example.com",
    "products": [
      {"id": "prod-1", "name": "T-Shirt", "price": 25.00, "quantity": 1}
    ],
    "total": 25.00,
    "status": "pending"
  }
}
```

## 🔒 Security

- API keys are securely handled through environment variables
- All communications use HTTPS through official Brevo SDK
- Input validation on all tool parameters
- Error handling prevents information leakage

## 📄 License

MIT License

## 🆘 Support

- **Issues**: Report on GitHub
- **Brevo API Docs**: https://developers.brevo.com/
- **Official SDK**: https://github.com/getbrevo/brevo-node

---

**Built with ❤️ using the official Brevo Node.js SDK for maximum reliability and features**