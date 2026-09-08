#!/bin/bash

echo "Starting Deployment..."

# 1. Pull the latest code
echo "Pulling latest code from GitHub..."
git pull

# 2. Install dependencies
echo "Installing dependencies..."
npm install

# 3. Build the project
echo "Building the project..."
npm run build

# 4. Restart the server
echo "Restarting PM2 process..."
# We use 'delete' and 'start' instead of 'restart' to ensure the flags are upda>
sudo pm2 delete acm-site || true 
sudo pm2 start "npx serve dist -l 8080" --name "acm-site"
sudo pm2 save



echo "Deployment Successful! Your changes are live."
