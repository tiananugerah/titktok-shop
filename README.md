# TikTok Shop API Gateway

A comprehensive API gateway for TikTok Shop operations built with Fastify.js and TypeScript. This gateway provides a unified interface to interact with TikTok Shop APIs, including product management, order processing, financial operations, and more.

## 🚀 Features

- **Fastify.js Framework**: High-performance Node.js web framework
- **TypeScript Support**: Full type safety and IntelliSense support
- **JWT Authentication**: Secure token-based authentication system
- **Role-based Access Control**: Admin and User roles with different permissions
- **TikTok SDK Integration**: Seamless integration with official TikTok Shop SDK
- **Comprehensive API Coverage**: Support for all major TikTok Shop API categories
- **Swagger Documentation**: Interactive API documentation
- **Health Checks**: Built-in health monitoring endpoints
- **Error Handling**: Robust error handling and validation
- **Environment Configuration**: Flexible configuration management
- **CORS Support**: Cross-origin resource sharing configuration
- **Security**: Helmet.js security middleware
- **Postman Collection**: Complete API collection with authentication

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 16+ installed
- TikTok Shop developer account
- TikTok Shop app credentials (App Key, App Secret, Access Token)

## 🛠️ Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the directory
   cd tiktok-shop-gateway
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp env.example .env
   
   # Edit the .env file with your TikTok Shop credentials
   nano .env
   ```

4. **Configure your TikTok Shop credentials**
   ```env
   # TikTok Shop API Configuration
   TIKTOK_APP_KEY=your_app_key_here
   TIKTOK_APP_SECRET=your_app_secret_here
   TIKTOK_ACCESS_TOKEN=your_access_token_here
   TIKTOK_BASE_PATH=https://open-api.tiktokglobalshop.com
   TIKTOK_SANDBOX=false

   # Server Configuration
   PORT=3000
   HOST=0.0.0.0
   NODE_ENV=development

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-12345
   ```

## 🚀 Getting Started

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Register First Admin User
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "password123",
    "role": "admin"
  }'
```

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 📚 API Documentation

Once the server is running, you can access:

- **Interactive API Documentation**: http://localhost:3000/docs
- **Health Check**: http://localhost:3000/health
- **API Info**: http://localhost:3000/info

## 🔌 API Endpoints

### Authentication Endpoints
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - Logout user
- `GET /auth/profile` - Get user profile (🔒 Auth Required)
- `PUT /auth/profile` - Update user profile (🔒 Auth Required)
- `GET /auth/users` - Get all users (🔒 Admin Only)
- `DELETE /auth/users/:id` - Delete user (🔒 Admin Only)

### Health Endpoints
- `GET /health` - Health check
- `GET /ready` - Readiness check
- `GET /live` - Liveness check
- `GET /info` - API information

### Product Management (🔒 Auth Required)
- `GET /api/products/search` - Search products
- `GET /api/products/:product_id` - Get product details
- `POST /api/products` - Create product
- `PUT /api/products/:product_id` - Update product
- `DELETE /api/products/:product_id` - Delete product

### Order Management (🔒 Auth Required)
- `GET /api/orders/search` - Search orders
- `GET /api/orders/:order_id` - Get order details
- `PUT /api/orders/:order_id/status` - Update order status

### Financial Operations (🔒 Auth Required)
- `GET /api/finance/transactions` - Search transactions
- `GET /api/finance/settlements` - Search settlements

### Generic API (🔒 Auth Required)
- `POST /api/call` - Make generic TikTok Shop API calls
- `GET /api/categories` - Get available API categories
- `GET /api/categories/:category/operations` - Get operations for a category

**🔒 = Authentication Required**

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `TIKTOK_APP_KEY` | TikTok Shop App Key | - | ✅ |
| `TIKTOK_APP_SECRET` | TikTok Shop App Secret | - | ✅ |
| `TIKTOK_ACCESS_TOKEN` | TikTok Shop Access Token | - | ✅ |
| `TIKTOK_BASE_PATH` | TikTok API Base URL | https://open-api.tiktokglobalshop.com | ❌ |
| `TIKTOK_SANDBOX` | Use sandbox environment | false | ❌ |
| `PORT` | Server port | 3000 | ❌ |
| `HOST` | Server host | 0.0.0.0 | ❌ |
| `NODE_ENV` | Environment | development | ❌ |
| `CORS_ORIGIN` | CORS origin | * | ❌ |
| `LOG_LEVEL` | Log level | info | ❌ |

## 📖 Usage Examples

### 1. Search Products
```bash
curl -X GET "http://localhost:3000/api/products/search?page_number=1&page_size=20&search_keyword=laptop"
```

### 2. Create Product
```bash
curl -X POST "http://localhost:3000/api/products" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Product",
    "category_id": "123456",
    "images": ["https://example.com/image.jpg"],
    "price": {
      "amount": "99.99",
      "currency": "USD"
    }
  }'
```

### 3. Generic API Call
```bash
curl -X POST "http://localhost:3000/api/call" \
  -H "Content-Type: application/json" \
  -d '{
    "category": "product",
    "version": "V202502",
    "operation": "ProductsSearchPost",
    "params": [1, {"page_size": 20}]
  }'
```

### 4. Health Check
```bash
curl -X GET "http://localhost:3000/health"
```

## 🏗️ Architecture

```
src/
├── config/           # Configuration management
├── routes/           # API route handlers
│   ├── productRoutes.ts
│   ├── orderRoutes.ts
│   ├── financeRoutes.ts
│   ├── genericRoutes.ts
│   └── healthRoutes.ts
├── services/         # Business logic services
│   └── tiktokService.ts
├── types/           # TypeScript type definitions
│   └── index.ts
└── index.ts         # Main application entry point

tiktok_sdk/          # TikTok Shop SDK (provided)
├── api/            # API definitions
├── client/         # SDK client
├── model/          # Data models
└── utils/          # Utilities
```

## 🔒 Security

- **Helmet.js**: Security headers middleware
- **CORS**: Configurable cross-origin resource sharing
- **Input Validation**: Zod schema validation
- **Error Handling**: Secure error responses
- **Environment Variables**: Sensitive data protection

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 Error Handling

The gateway provides comprehensive error handling:

- **Validation Errors**: 400 Bad Request
- **TikTok API Errors**: Propagated with original status codes
- **Configuration Errors**: 500 Internal Server Error
- **Generic Errors**: 500 Internal Server Error

Error response format:
```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Validation error",
    "field": "product_id",
    "request_id": "optional-request-id"
  }
}
```

## 🚀 Deployment

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist/ ./dist/
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Setup
1. Set production environment variables
2. Configure reverse proxy (nginx/Apache)
3. Set up SSL certificates
4. Configure monitoring and logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Check the [TikTok Shop API Documentation](https://partner.tiktokshop.com/docv2/page/integrate-node-js-sdk)
- Review the interactive API documentation at `/docs`
- Check the health endpoint at `/health`
- Review the logs for detailed error information

## 🔄 Updates

To update the TikTok SDK:

1. Download the latest SDK from TikTok Shop Partner Center
2. Replace the `tiktok_sdk` folder
3. Update any breaking changes in the service layer
4. Test thoroughly before deployment

## 📊 Monitoring

The gateway includes built-in monitoring endpoints:

- **Health Check**: `/health` - Overall system health
- **Readiness**: `/ready` - Service readiness
- **Liveness**: `/live` - Service liveness
- **Info**: `/info` - API information and endpoints

## 🎯 Best Practices

1. **Environment Variables**: Never commit sensitive credentials
2. **Error Handling**: Always handle errors gracefully
3. **Validation**: Validate all input data
4. **Logging**: Use appropriate log levels
5. **Security**: Keep dependencies updated
6. **Testing**: Write comprehensive tests
7. **Documentation**: Keep API documentation updated

---

**Built with ❤️ using Fastify.js and TypeScript**
