#!/bin/bash

# Simple GitHub Pages deployment script
echo "🚀 Starting deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Create CNAME file for custom domain
echo "🌐 Setting up custom domain..."
echo "nycyounginvestors.com" > dist/CNAME

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "✅ Deployment complete!"
echo "🌍 Your site should be live at: http://nycyounginvestors.com"
echo "⏰ It may take a few minutes for changes to propagate"
