#!/usr/bin/env node

// Script to properly handle Smithery integration for Brevo MCP
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Default configuration
const defaultConfig = {
  debug: false,
  apiKey: process.env.BREVO_API_KEY || '',
  defaultSenderEmail: process.env.BREVO_DEFAULT_SENDER_EMAIL || '',
  defaultSenderName: process.env.BREVO_DEFAULT_SENDER_NAME || ''
};

// Parse command line arguments
const args = process.argv.slice(2);
const config = { ...defaultConfig };

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--debug') {
    config.debug = true;
  } else if (arg === '--api-key' && i + 1 < args.length) {
    config.apiKey = args[i + 1];
    i++;
  } else if (arg === '--sender-email' && i + 1 < args.length) {
    config.defaultSenderEmail = args[i + 1];
    i++;
  } else if (arg === '--sender-name' && i + 1 < args.length) {
    config.defaultSenderName = args[i + 1];
    i++;
  }
}

// Create environment variables for the process
const env = {
  ...process.env,
  DEBUG: config.debug ? "true" : "false",
  BREVO_API_KEY: config.apiKey,
  BREVO_DEFAULT_SENDER_EMAIL: config.defaultSenderEmail,
  BREVO_DEFAULT_SENDER_NAME: config.defaultSenderName
};

// Print startup message
console.log('📧 Starting Brevo MCP Server');
console.log('============================');
console.log('Configuration:');
console.log(`  Debug: ${config.debug}`);
console.log(`  API Key: ${config.apiKey ? '***configured***' : 'not set'}`);
console.log(`  Default Sender Email: ${config.defaultSenderEmail || 'not set'}`);
console.log(`  Default Sender Name: ${config.defaultSenderName || 'not set'}`);
console.log('============================');

// Start the MCP server
const serverProcess = spawn('node', [path.join(rootDir, 'build', 'index.js')], {
  env,
  stdio: 'inherit'
});

// Handle process exit
serverProcess.on('exit', (code) => {
  console.log(`Server exited with code ${code}`);
  process.exit(code);
});

// Handle process errors
serverProcess.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

// Handle termination signals
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT, shutting down server...');
  serverProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, shutting down server...');
  serverProcess.kill('SIGTERM');
});