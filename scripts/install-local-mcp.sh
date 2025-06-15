#!/bin/bash

# Local installation script for Brevo MCP
echo "🔧 Installing Brevo MCP locally..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Make scripts executable
chmod +x scripts/*.js
chmod +x scripts/*.sh

# Link globally for local testing
echo "🔗 Linking package globally..."
npm link

echo "✅ Brevo MCP installed locally"
echo ""
echo "You can now use:"
echo "  brevo-mcp                 # Run MCP server directly"
echo "  brevo-mcp-smithery        # Run with Smithery launcher"
echo "  npm run smithery          # Run from project directory"
echo ""
echo "Don't forget to set your environment variables:"
echo "  export BREVO_API_KEY='your-api-key'"
echo "  export BREVO_DEFAULT_SENDER_EMAIL='your-email@domain.com'"
echo "  export BREVO_DEFAULT_SENDER_NAME='Your Name'"