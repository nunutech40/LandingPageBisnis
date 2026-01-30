#!/bin/bash

echo "🔪 Killing conflicting servers..."

# 1. Kill specific ports common for web dev
PORTS="4321 3000 5173 8000 8080"
echo "Checking ports: $PORTS"
lsof -ti:${PORTS// /,} | xargs kill -9 2>/dev/null

# 2. Kill all Node.js processes (Aggressive cleanup)
echo "Stopping all Node.js processes..."
pkill -f node

echo "✅ All clean! You can now run run_app.command"
# Keep window open briefly to show result
sleep 2
