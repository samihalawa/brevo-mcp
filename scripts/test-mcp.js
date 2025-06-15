#!/usr/bin/env node

// Test script for Brevo MCP Server
import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';

console.log('🧪 Testing Brevo MCP Server...');

// Start the server
const serverProcess = spawn('node', ['build/index.js'], {
  stdio: ['pipe', 'pipe', 'pipe']
});

let serverOutput = '';
let serverError = '';

serverProcess.stdout.on('data', (data) => {
  serverOutput += data.toString();
});

serverProcess.stderr.on('data', (data) => {
  serverError += data.toString();
});

// Wait a moment for server to start
await setTimeout(2000);

// Test basic MCP protocol
const testRequest = {
  jsonrpc: '2.0',
  id: 1,
  method: 'tools/list'
};

console.log('📤 Sending test request...');
serverProcess.stdin.write(JSON.stringify(testRequest) + '\n');

// Wait for response
await setTimeout(1000);

// Test tool execution
const accountRequest = {
  jsonrpc: '2.0',
  id: 2,
  method: 'tools/call',
  params: {
    name: 'account',
    arguments: {
      operation: 'get_account'
    }
  }
};

console.log('📤 Testing account tool...');
serverProcess.stdin.write(JSON.stringify(accountRequest) + '\n');

// Wait for response
await setTimeout(1000);

// Clean up
serverProcess.kill('SIGTERM');

console.log('✅ Test completed');
console.log('Server output:', serverOutput);
if (serverError) {
  console.log('Server errors:', serverError);
}

process.exit(0);