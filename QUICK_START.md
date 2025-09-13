# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Prerequisites
- Node.js 16+ installed
- TikTok Shop developer account
- TikTok Shop app credentials

### 2. Setup
```bash
# Run the setup script
./setup.sh

# Or manually:
npm install
cp env.example .env
npm run build
```

### 3. Configure Credentials
Edit `.env` file with your TikTok Shop credentials:
```env
TIKTOK_APP_KEY=your_app_key_here
TIKTOK_APP_SECRET=your_app_secret_here
TIKTOK_ACCESS_TOKEN=your_access_token_here
```

### 4. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 5. Test the API
```bash
# Health check
curl http://localhost:3000/health

# Search products
curl "http://localhost:3000/api/products/search?page_number=1&page_size=10"

# API documentation
open http://localhost:3000/docs
```

## 📚 Key Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/docs` | GET | API documentation |
| `/api/products/search` | GET | Search products |
| `/api/products` | POST | Create product |
| `/api/orders/search` | GET | Search orders |
| `/api/finance/transactions` | GET | Get transactions |
| `/api/call` | POST | Generic API calls |

## 🔧 Common Issues

### Issue: "TikTok SDK not found"
**Solution**: Ensure `tiktok_sdk` folder is present in the project root.

### Issue: "Configuration validation failed"
**Solution**: Check your `.env` file has all required TikTok credentials.

### Issue: "Port already in use"
**Solution**: Change the PORT in `.env` file or kill the process using the port.

## 📖 Next Steps
- Read the full [README.md](README.md) for detailed documentation
- Explore the [API documentation](http://localhost:3000/docs)
- Check out the [examples](README.md#usage-examples) section
