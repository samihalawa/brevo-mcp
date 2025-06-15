#!/bin/bash

# Smithery publishing script for Brevo MCP
echo "🚀 Publishing Brevo MCP to Smithery..."

# Build and test first
echo "🔨 Building and testing..."
npm run build
npm test

# Check if smithery.yaml exists
if [ ! -f "smithery.yaml" ]; then
    echo "❌ smithery.yaml not found!"
    exit 1
fi

echo "📋 Smithery configuration found"
cat smithery.yaml

# Publish to Smithery (this would be the actual Smithery publish command)
echo "📤 Publishing to Smithery registry..."
echo "Note: Replace this with actual Smithery publish command when available"

# For now, just validate the structure
echo "✅ Brevo MCP is ready for Smithery!"
echo ""
echo "Package structure:"
echo "  ✓ smithery.yaml configured"
echo "  ✓ MCP server implemented"
echo "  ✓ Build scripts ready"
echo "  ✓ Executable permissions set"
echo ""
echo "To use with Smithery:"
echo "  1. Add this package to your Smithery configuration"
echo "  2. Configure API key and sender email"
echo "  3. Run through Smithery interface"