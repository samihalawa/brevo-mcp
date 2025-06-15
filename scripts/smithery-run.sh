#!/bin/bash

# Smithery run script for Brevo MCP
echo "🚀 Running Brevo MCP with Smithery..."

# Check if build exists
if [ ! -f "build/index.js" ]; then
    echo "🔨 Building project first..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "❌ Build failed"
        exit 1
    fi
fi

# Run with Smithery
node scripts/start-smithery.js "$@"