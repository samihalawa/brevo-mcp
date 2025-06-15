#!/bin/bash

# Smithery installation script for Brevo MCP
echo "📦 Installing Brevo MCP for Smithery..."

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Make scripts executable
chmod +x scripts/*.js
chmod +x scripts/*.sh

echo "✅ Brevo MCP installed and ready for Smithery"
echo ""
echo "Usage:"
echo "  npm run smithery          # Run with Smithery"
echo "  npm run smithery:run      # Alternative run command"
echo "  npm test                  # Test the MCP server"
echo ""
echo "Configuration:"
echo "  Set BREVO_API_KEY environment variable"
echo "  Set BREVO_DEFAULT_SENDER_EMAIL environment variable"
echo "  Set BREVO_DEFAULT_SENDER_NAME environment variable (optional)"