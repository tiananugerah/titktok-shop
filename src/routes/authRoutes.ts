import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { authService } from '../services/authService';
import { CreateUserRequest, LoginRequest, RefreshTokenRequest } from '../models/User';
import { requireAuth, requireAdmin } from '../middleware/auth';

// Request schemas
const registerSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['admin', 'user']).optional().default('user'),
});

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  auth_code: z.string().min(1, 'Auth code is required'),
});

const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

export async function authRoutes(fastify: FastifyInstance) {
  // Register endpoint
  fastify.post('/auth/register', {
    schema: {
      description: 'Register a new user',
      tags: ['Authentication'],
      body: {
        type: 'object',
        properties: {
          username: { type: 'string', minLength: 3 },
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 6 },
          role: { type: 'string', enum: ['admin', 'user'] },
        },
        required: ['username', 'email', 'password'],
      },
      response: {
        201: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            token: { type: 'string' },
            refreshToken: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                username: { type: 'string' },
                email: { type: 'string' },
                role: { type: 'string' },
              },
            },
            expiresIn: { type: 'number' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = registerSchema.parse(request.body);
      
      const result = await authService.register(body as CreateUserRequest);
      
      return reply.status(201).send(result);
    } catch (error: any) {
      return reply.status(400).send({
        success: false,
        error: {
          code: 400,
          message: error.message || 'Registration failed',
        },
      });
    }
  });

  // Login endpoint
  fastify.post('/auth/login', {
    schema: {
      description: 'Login user',
      tags: ['Authentication'],
      body: {
        type: 'object',
        properties: {
          username: { type: 'string' },
          password: { type: 'string' },
          auth_code: { type: 'string' },
        },
        required: ['username', 'password', 'auth_code'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            token: { type: 'string' },
            refreshToken: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                username: { type: 'string' },
                email: { type: 'string' },
                role: { type: 'string' },
              },
            },
            expiresIn: { type: 'number' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = loginSchema.parse(request.body);
      
      const result = await authService.login(body as LoginRequest);
      
      return reply.send(result);
    } catch (error: any) {
      return reply.status(401).send({
        success: false,
        error: {
          code: 401,
          message: error.message || 'Login failed',
        },
      });
    }
  });

  // Refresh token endpoint
  fastify.post('/auth/refresh', {
    schema: {
      description: 'Refresh access token',
      tags: ['Authentication'],
      body: {
        type: 'object',
        properties: {
          refreshToken: { type: 'string' },
        },
        required: ['refreshToken'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            token: { type: 'string' },
            refreshToken: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                username: { type: 'string' },
                email: { type: 'string' },
                role: { type: 'string' },
              },
            },
            expiresIn: { type: 'number' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = refreshTokenSchema.parse(request.body);
      
      const result = await authService.refreshToken(body as RefreshTokenRequest);
      
      return reply.send(result);
    } catch (error: any) {
      return reply.status(401).send({
        success: false,
        error: {
          code: 401,
          message: error.message || 'Token refresh failed',
        },
      });
    }
  });

  // Logout endpoint
  fastify.post('/auth/logout', {
    schema: {
      description: 'Logout user (invalidate refresh token)',
      tags: ['Authentication'],
      body: {
        type: 'object',
        properties: {
          refreshToken: { type: 'string' },
        },
        required: ['refreshToken'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = refreshTokenSchema.parse(request.body);
      
      const success = await authService.logout(body.refreshToken);
      
      return reply.send({
        success,
        message: success ? 'Logged out successfully' : 'Logout failed',
      });
    } catch (error: any) {
      return reply.status(400).send({
        success: false,
        error: {
          code: 400,
          message: error.message || 'Logout failed',
        },
      });
    }
  });

  // Get current user profile
  fastify.get('/auth/profile', {
    preHandler: requireAuth(),
    schema: {
      description: 'Get current user profile',
      tags: ['Authentication'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                username: { type: 'string' },
                email: { type: 'string' },
                role: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const user = await authService.getUserById(request.user!.id);
      
      if (!user) {
        return reply.status(404).send({
          success: false,
          error: {
            code: 404,
            message: 'User not found',
          },
        });
      }

      return reply.send({
        success: true,
        user,
      });
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        error: {
          code: 500,
          message: error.message || 'Failed to get user profile',
        },
      });
    }
  });

  // Update user profile
  fastify.put('/auth/profile', {
    preHandler: requireAuth(),
    schema: {
      description: 'Update current user profile',
      tags: ['Authentication'],
      security: [{ bearerAuth: [] }],
      body: {
        type: 'object',
        properties: {
          username: { type: 'string', minLength: 3 },
          email: { type: 'string', format: 'email' },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                username: { type: 'string' },
                email: { type: 'string' },
                role: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
                isActive: { type: 'boolean' },
              },
            },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = request.body as any;
      const updateData: any = {};
      
      if (body.username) updateData.username = body.username;
      if (body.email) updateData.email = body.email;

      const user = await authService.updateUser(request.user!.id, updateData);
      
      if (!user) {
        return reply.status(404).send({
          success: false,
          error: {
            code: 404,
            message: 'User not found',
          },
        });
      }

      return reply.send({
        success: true,
        user,
      });
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        error: {
          code: 500,
          message: error.message || 'Failed to update user profile',
        },
      });
    }
  });

  // Get all users (admin only)
  fastify.get('/auth/users', {
    preHandler: requireAdmin(),
    schema: {
      description: 'Get all users (admin only)',
      tags: ['Authentication'],
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            users: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  username: { type: 'string' },
                  email: { type: 'string' },
                  role: { type: 'string' },
                  createdAt: { type: 'string' },
                  updatedAt: { type: 'string' },
                  isActive: { type: 'boolean' },
                },
              },
            },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const users = await authService.getAllUsers();
      
      return reply.send({
        success: true,
        users,
      });
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        error: {
          code: 500,
          message: error.message || 'Failed to get users',
        },
      });
    }
  });

  // Delete user (admin only)
  fastify.delete('/auth/users/:id', {
    preHandler: requireAdmin(),
    schema: {
      description: 'Delete user (admin only)',
      tags: ['Authentication'],
      security: [{ bearerAuth: [] }],
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
        required: ['id'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const params = request.params as { id: string };
      
      const success = await authService.deleteUser(params.id);
      
      if (!success) {
        return reply.status(404).send({
          success: false,
          error: {
            code: 404,
            message: 'User not found',
          },
        });
      }

      return reply.send({
        success: true,
        message: 'User deleted successfully',
      });
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        error: {
          code: 500,
          message: error.message || 'Failed to delete user',
        },
      });
    }
  });
}
