import { FastifyRequest, FastifyReply } from 'fastify';
import { authService } from '../services/authService';
import { User } from '../models/User';

// Extend FastifyRequest to include user
declare module 'fastify' {
  interface FastifyRequest {
    user?: User;
  }
}

export interface AuthMiddlewareOptions {
  required?: boolean;
  roles?: string[];
}

/**
 * Authentication middleware
 */
export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply,
  options: AuthMiddlewareOptions = { required: true }
) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.authorization;
    
    if (!authHeader) {
      if (options.required) {
        return reply.status(401).send({
          success: false,
          error: {
            code: 401,
            message: 'Authorization header is required',
          },
        });
      }
      return; // Continue without authentication
    }

    // Extract token from "Bearer <token>" format
    const token = authHeader.replace(/^Bearer\s+/i, '');
    
    if (!token) {
      if (options.required) {
        return reply.status(401).send({
          success: false,
          error: {
            code: 401,
            message: 'Token is required',
          },
        });
      }
      return;
    }

    // Verify token
    const user = await authService.verifyToken(token);
    
    // Check role permissions if specified
    if (options.roles && !options.roles.includes(user.role)) {
      return reply.status(403).send({
        success: false,
        error: {
          code: 403,
          message: 'Insufficient permissions',
          requiredRoles: options.roles,
          userRole: user.role,
        },
      });
    }

    // Attach user to request
    request.user = user;
    
  } catch (error) {
    if (options.required) {
      return reply.status(401).send({
        success: false,
        error: {
          code: 401,
          message: 'Invalid or expired token',
        },
      });
    }
    // Continue without authentication if not required
  }
}

/**
 * Require authentication
 */
export function requireAuth(options: AuthMiddlewareOptions = {}) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    return authMiddleware(request, reply, { ...options, required: true });
  };
}

/**
 * Optional authentication
 */
export function optionalAuth(options: AuthMiddlewareOptions = {}) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    return authMiddleware(request, reply, { ...options, required: false });
  };
}

/**
 * Require admin role
 */
export function requireAdmin() {
  return requireAuth({ roles: ['admin'] });
}

/**
 * Require specific roles
 */
export function requireRoles(roles: string[]) {
  return requireAuth({ roles });
}
