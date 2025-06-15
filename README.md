# Brevo MCP Server

[![smithery badge](https://smithery.ai/badge/@samihalawa/brevo-mcp)](https://smithery.ai/server/@samihalawa/brevo-mcp)

📧 **Multi-Channel Platform (MCP) for Brevo API integration with Claude & Smithery**

A powerful MCP server that enables Claude to interact with the Brevo email platform for sending emails, managing contacts, and tracking email events.

## ✨ Features

- 🔧 **Complete Brevo API Integration** - Send emails, manage contacts, track events
- 🎨 **Beautiful Email Templates** - Pre-built responsive HTML templates
- 🛡️ **Type-Safe** - Full TypeScript support with comprehensive type definitions
- 🚀 **Smithery Compatible** - Ready for Smithery deployment and management
- 🔌 **MCP Protocol** - Standard Model Context Protocol implementation
- 📊 **Contact Management** - Create, update, and retrieve contact information
- 📈 **Email Tracking** - Monitor email delivery, opens, clicks, and more

## 🚀 Quick Start

### Installing via Smithery

To install Brevo MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@samihalawa/brevo-mcp):

```bash
npx -y @smithery/cli install @samihalawa/brevo-mcp --client claude
```

### Option 1: Using Smithery (Recommended)

1. **Install via Smithery:**
   ```bash
   # Add to your Smithery configuration
   npm install brevo-mcp
   ```

2. **Configure in smithery.yaml:**
   ```yaml
   brevo-mcp:
     apiKey: "your-brevo-api-key"
     defaultSenderEmail: "your-email@domain.com"
     defaultSenderName: "Your Name"
   ```

### Option 2: Local Installation

1. **Clone and Install:**
   ```bash
   git clone <repository-url>
   cd brevo-mcp
   npm install
   npm run build
   ```

2. **Set Environment Variables:**
   ```bash
   export BREVO_API_KEY="your-brevo-api-key"
   export BREVO_DEFAULT_SENDER_EMAIL="your-email@domain.com"
   export BREVO_DEFAULT_SENDER_NAME="Your Name"
   ```

3. **Run the MCP Server:**
   ```bash
   npm start
   # or
   npm run smithery
   ```

## 🛠️ Available Tools

### 1. `initialize_brevo`
Initialize the Brevo API connection with your credentials.

```json
{
  "apiKey": "your-brevo-api-key",
  "defaultSenderEmail": "your-email@domain.com",
  "defaultSenderName": "Your Name"
}
```

### 2. `send_email`
Send emails using the Brevo API.

```json
{
  "to": [{"email": "recipient@example.com", "name": "John Doe"}],
  "subject": "Hello from Brevo MCP",
  "htmlContent": "<h1>Welcome!</h1><p>This is a test email.</p>"
}
```

### 3. `create_beautiful_email`
Generate beautiful HTML emails using pre-built responsive templates.

```json
{
  "title": "Welcome to Our Service",
  "content": "<p>Thank you for joining us!</p>",
  "accentColor": "#667eea",
  "senderName": "John Smith",
  "senderTitle": "Customer Success Manager"
}
```

### 4. `get_contact`
Retrieve contact information by email or ID.

```json
{
  "identifier": "user@example.com"
}
```

### 5. `update_contact`
Update existing contact information.

```json
{
  "id": 123,
  "data": {
    "attributes": {
      "FIRSTNAME": "John",
      "LASTNAME": "Doe"
    }
  }
}
```

### 6. `create_attribute`
Create new contact attributes for better segmentation.

```json
{
  "name": "COMPANY",
  "type": "text"
}
```

### 7. `get_attributes`
List all available contact attributes.

### 8. `get_email_events`
Track email delivery and engagement events.

```json
{
  "messageId": "msg-123",
  "email": "user@example.com"
}
```

### 9. `get_senders`
List all verified sender addresses.

## 📋 Scripts

- `npm run build` - Build the TypeScript project
- `npm start` - Start the MCP server
- `npm run smithery` - Run with Smithery integration
- `npm test` - Test the MCP server functionality
- `npm run smithery:install` - Install for Smithery use
- `npm run smithery:publish` - Publish to Smithery registry

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BREVO_API_KEY` | Your Brevo API key | Yes |
| `BREVO_DEFAULT_SENDER_EMAIL` | Default sender email address | Yes |
| `BREVO_DEFAULT_SENDER_NAME` | Default sender name | No |
| `DEBUG` | Enable debug logging | No |

### Smithery Configuration

The server includes a `smithery.yaml` configuration file for easy deployment:

```yaml
version: 1
startCommand:
  type: stdio
  configSchema:
    type: object
    properties:
      apiKey:
        type: string
        description: "Brevo API key for authentication"
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

## 🎨 Email Templates

The server includes beautiful, responsive email templates:

- **Modern gradient headers** with customizable accent colors
- **Responsive design** that works on all devices
- **Professional signatures** with customizable information
- **Clean typography** using web-safe fonts

## 🔒 Security

- API keys are handled securely through environment variables
- All API communications use HTTPS
- Input validation on all tool parameters
- Error handling prevents sensitive information leakage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: Report issues on GitHub
- **Documentation**: Full API documentation available
- **Community**: Join our community discussions

---

**Made with ❤️ for the Claude & Smithery ecosystem**
