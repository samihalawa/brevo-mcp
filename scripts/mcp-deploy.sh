#!/bin/bash

# Deployment script for Brevo MCP
set -e

DEPLOY_TYPE=${1:-"npm"}

echo "📦 Deploying Brevo MCP..."
echo "Deployment type: $DEPLOY_TYPE"

# Build the project
echo "🔨 Building project..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm test

case $DEPLOY_TYPE in
  "npm")
    echo "📤 Publishing to npm..."
    npm publish
    ;;
  "docker")
    echo "🐳 Building Docker image..."
    docker build -t brevo-mcp:latest .
    echo "🚀 Docker image built successfully"
    ;;
  "all")
    echo "📤 Publishing to npm..."
    npm publish
    echo "🐳 Building Docker image..."
    docker build -t brevo-mcp:latest .
    ;;
  *)
    echo "❌ Unknown deployment type: $DEPLOY_TYPE"
    echo "Usage: $0 [npm|docker|all]"
    exit 1
    ;;
esac

echo "✅ Deployment completed successfully!"