#!/bin/bash
# ============================================================
# Sleep Cycle Optimizer - Init Script
# ============================================================
# This script sets up and starts the local development server.

echo "=== Sleep Cycle Optimizer - Dev Environment ==="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start Vite dev server
echo "Starting development server..."
npx vite --open
