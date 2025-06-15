#!/usr/bin/env node

// Enhanced Smithery runner for Brevo MCP
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Check if build exists
const buildPath = path.join(rootDir, 'build', 'index.js');
if (!fs.existsSync(buildPath)) {
  console.log('🔨 Building project first...');
  const buildProcess = spawn('npm', ['run', 'build'], {
    cwd: rootDir,
    stdio: 'inherit'
  });
  
  buildProcess.on('exit', (code) => {
    if (code !== 0) {
      console.error('❌ Build failed');
      process.exit(1);
    }
    startSmithery();
  });
} else {
  startSmithery();
}

function startSmithery() {
  console.log('🚀 Starting Brevo MCP with Smithery...');
  
  const smitheryProcess = spawn('node', ['scripts/start-smithery.js'], {
    cwd: rootDir,
    stdio: 'inherit'
  });
  
  smitheryProcess.on('exit', (code) => {
    console.log(`Smithery process exited with code ${code}`);
    process.exit(code);
  });
  
  smitheryProcess.on('error', (err) => {
    console.error('Failed to start Smithery:', err);
    process.exit(1);
  });
  
  // Handle termination
  process.on('SIGINT', () => {
    smitheryProcess.kill('SIGINT');
  });
  
  process.on('SIGTERM', () => {
    smitheryProcess.kill('SIGTERM');
  });
}