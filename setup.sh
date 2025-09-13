#!/bin/bash

# TikTok Shop API Gateway Setup Script
echo "🚀 Setting up TikTok Shop API Gateway..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp env.example .env
    echo "✅ .env file created from env.example"
    echo "⚠️  Please edit .env file with your TikTok Shop credentials"
else
    echo "✅ .env file already exists"
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Project built successfully"

# Check if TikTok SDK exists
if [ ! -d "tiktok_sdk" ]; then
    echo "⚠️  TikTok SDK directory not found. Please ensure the tiktok_sdk folder is present."
    echo "   You can download it from: https://partner.tiktokshop.com/docv2/page/integrate-node-js-sdk"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Edit .env file with your TikTok Shop credentials:"
echo "   - TIKTOK_APP_KEY"
echo "   - TIKTOK_APP_SECRET"
echo "   - TIKTOK_ACCESS_TOKEN"
echo ""
echo "2. Start the development server:"
echo "   npm run dev"
echo ""
echo "3. Or start the production server:"
echo "   npm start"
echo ""
echo "4. Access the API documentation at:"
echo "   http://localhost:3000/docs"
echo ""
echo "5. Check health status at:"
echo "   http://localhost:3000/health"
echo ""
echo "📚 For more information, see README.md"
