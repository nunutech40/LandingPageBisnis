#!/bin/bash

# Navigate to the directory where this script is located
cd "$(dirname "$0")"

echo "🚀 Starting ConversionEngine Landing Page..."
echo "📂 Working Directory: $(pwd)"

# Kill port 4321 just in case it's stuck
lsof -ti:4321 | xargs kill -9 2>/dev/null

# Open the browser after a slight delay
(sleep 2 && open http://localhost:4321) &

# Start the server
npm run dev
