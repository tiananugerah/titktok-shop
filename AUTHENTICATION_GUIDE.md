# 🔐 TikTok Shop API Gateway - Authentication Guide

## Overview

TikTok Shop API Gateway sekarang dilengkapi dengan sistem autentikasi JWT yang lengkap. Sistem ini menyediakan:

- **JWT Access Tokens** (expires in 1 hour)
- **Refresh Tokens** (expires in 7 days)
- **Role-based Access Control** (Admin & User)
- **Secure Password Hashing** (bcrypt)
- **Token Refresh Mechanism**

## 🚀 Quick Start

### 1. Register User Pertama (Admin)

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

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "uuid-refresh-token",
  "user": {
    "id": "user-id",
    "username": "admin",
    "email": "admin@example.com",
    "role": "admin"
  },
  "expiresIn": 3600
}
```

### 2. Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "password123"
  }'
```

### 3. Gunakan Token untuk API Calls

```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  http://localhost:3000/auth/profile
```

## 📋 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | Login user | No |
| POST | `/auth/refresh` | Refresh access token | No |
| POST | `/auth/logout` | Logout user | No |
| GET | `/auth/profile` | Get user profile | Yes |
| PUT | `/auth/profile` | Update user profile | Yes |
| GET | `/auth/users` | Get all users | Admin only |
| DELETE | `/auth/users/:id` | Delete user | Admin only |

### Protected Endpoints

Semua endpoint TikTok Shop API sekarang memerlukan autentikasi:

- `/api/products/*` - Product management
- `/api/orders/*` - Order management  
- `/api/finance/*` - Financial operations
- `/api/call` - Generic API calls

## 🔑 Token Management

### Access Token
- **Expires**: 1 hour
- **Usage**: Include in `Authorization: Bearer <token>` header
- **Refresh**: Use refresh token to get new access token

### Refresh Token
- **Expires**: 7 days
- **Usage**: Use to get new access token when expired
- **Storage**: Store securely (not in localStorage for production)

### Token Refresh Flow

```bash
# When access token expires, use refresh token
curl -X POST http://localhost:3000/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "your-refresh-token"
  }'
```

## 👥 User Roles

### Admin Role
- Full access to all endpoints
- Can manage users (view, delete)
- Can access all TikTok Shop APIs

### User Role  
- Standard user access
- Can access TikTok Shop APIs
- Cannot manage other users

## 🛡️ Security Features

### Password Security
- Passwords hashed with bcrypt (12 rounds)
- Minimum 6 characters required
- Never stored in plain text

### Token Security
- JWT signed with secret key
- Tokens include user ID, username, email, role
- Refresh tokens stored securely in memory

### API Security
- All TikTok Shop endpoints require authentication
- Role-based access control
- CORS enabled for cross-origin requests

## 📱 Postman Collection

### Import Collection
1. Download `TikTok_Shop_API_Gateway.postman_collection.json`
2. Download `TikTok_Shop_API_Gateway.postman_environment.json`
3. Import both files into Postman
4. Set environment to "TikTok Shop API Gateway - Development"

### Using the Collection

1. **Register/Login First**
   - Run "Register User" or "Login User" request
   - Tokens will be automatically saved to environment variables

2. **Use Authenticated Requests**
   - All protected endpoints will automatically use the stored token
   - Token is included in Authorization header

3. **Token Refresh**
   - Use "Refresh Token" request when access token expires
   - New tokens will be automatically saved

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `base_url` | API base URL | `http://localhost:3000` |
| `access_token` | JWT access token | Auto-populated |
| `refresh_token` | Refresh token | Auto-populated |
| `username` | Default username | `admin` |
| `password` | Default password | `password123` |

## 🔧 Configuration

### Environment Variables

Add to your `.env` file:

```env
# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-12345
```

### Default Users

The system starts with no users. You must register the first admin user:

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

## 🚨 Error Handling

### Common Error Responses

#### 401 Unauthorized
```json
{
  "success": false,
  "error": {
    "code": 401,
    "message": "Authorization header is required"
  }
}
```

#### 403 Forbidden
```json
{
  "success": false,
  "error": {
    "code": 403,
    "message": "Insufficient permissions",
    "requiredRoles": ["admin"],
    "userRole": "user"
  }
}
```

#### 400 Bad Request
```json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Invalid credentials"
  }
}
```

## 🔄 Token Refresh Strategy

### Client-Side Implementation

```javascript
// Example token refresh logic
async function refreshToken() {
  try {
    const response = await fetch('/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refreshToken: localStorage.getItem('refreshToken')
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      localStorage.setItem('accessToken', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data.token;
    }
  } catch (error) {
    // Redirect to login
    window.location.href = '/login';
  }
}

// Use token in API calls
async function apiCall(endpoint) {
  let token = localStorage.getItem('accessToken');
  
  let response = await fetch(endpoint, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  // If token expired, refresh and retry
  if (response.status === 401) {
    token = await refreshToken();
    response = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  
  return response.json();
}
```

## 🏗️ Production Considerations

### Security Checklist

- [ ] Change default JWT secret to strong random string
- [ ] Use HTTPS in production
- [ ] Implement rate limiting
- [ ] Add request logging
- [ ] Use database instead of in-memory storage
- [ ] Implement token blacklisting
- [ ] Add password complexity requirements
- [ ] Implement account lockout after failed attempts

### Database Integration

For production, replace in-memory storage with a database:

```typescript
// Example with Prisma
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AuthService {
  async register(userData: CreateUserRequest): Promise<AuthResponse> {
    const user = await prisma.user.create({
      data: {
        username: userData.username,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 12),
        role: userData.role || 'user',
      }
    });
    
    // Generate tokens...
  }
}
```

## 📞 Support

For issues or questions:
- Check the API documentation at `/docs`
- Review error responses for debugging
- Ensure tokens are properly formatted in headers
- Verify user roles and permissions

---

**🎉 Your TikTok Shop API Gateway is now fully secured with JWT authentication!**
