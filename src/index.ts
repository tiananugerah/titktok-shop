import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

import config from './config';
import { productRoutes } from './routes/productRoutes';
import { orderRoutes } from './routes/orderRoutes';
import { financeRoutes } from './routes/financeRoutes';
import { genericRoutes } from './routes/genericRoutes';
import { healthRoutes } from './routes/healthRoutes';
import { authRoutes } from './routes/authRoutes';

// Create Fastify instance
const fastify: FastifyInstance = Fastify({
  logger: {
    level: config.LOG_LEVEL,
    transport: config.NODE_ENV === 'development' ? {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    } : undefined,
  },
  disableRequestLogging: config.NODE_ENV === 'production',
});

// Register plugins
async function registerPlugins() {
  // Security
  await fastify.register(helmet, {
    contentSecurityPolicy: false,
  });

  // CORS
  await fastify.register(cors, {
    origin: config.CORS_ORIGIN === '*' ? true : config.CORS_ORIGIN.split(','),
    credentials: config.CORS_CREDENTIALS,
  });

  // Swagger documentation
  await fastify.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'TikTok Shop API Gateway',
        description: 'A comprehensive API gateway for TikTok Shop operations built with Fastify.js and TypeScript',
        version: '1.0.0',
        contact: {
          name: 'TikTok Shop Gateway',
          email: 'support@example.com',
        },
        license: {
          name: 'MIT',
          url: 'https://opensource.org/licenses/MIT',
        },
      },
      servers: [
        {
          url: `http://${config.HOST}:${config.PORT}`,
          description: 'Development server',
        },
      ],
      tags: [
        { name: 'Authentication', description: 'User authentication and authorization' },
        { name: 'Products', description: 'Product management operations' },
        { name: 'Orders', description: 'Order management operations' },
        { name: 'Finance', description: 'Financial operations' },
        { name: 'Generic API', description: 'Generic TikTok Shop API calls' },
        { name: 'Health', description: 'Health check endpoints' },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  });

  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
}

// Register routes
async function registerRoutes() {
  // Health routes
  await fastify.register(healthRoutes);

  // Authentication routes
  await fastify.register(authRoutes);

  // API routes
  await fastify.register(productRoutes, { prefix: '/api' });
  await fastify.register(orderRoutes, { prefix: '/api' });
  await fastify.register(financeRoutes, { prefix: '/api' });
  await fastify.register(genericRoutes, { prefix: '/api' });

  // Root endpoint
  fastify.get('/', {
    schema: {
      description: 'Root endpoint with API information',
      tags: ['Health'],
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
            version: { type: 'string' },
            documentation: { type: 'string' },
            endpoints: {
              type: 'object',
              properties: {
                health: { type: 'string' },
                products: { type: 'string' },
                orders: { type: 'string' },
                finance: { type: 'string' },
                generic_api: { type: 'string' },
                docs: { type: 'string' },
              },
            },
          },
        },
      },
    },
  }, async (request, reply) => {
    const baseUrl = `${request.protocol}://${request.hostname}`;
    
    return reply.send({
      message: 'Welcome to TikTok Shop API Gateway',
      version: '1.0.0',
      documentation: `${baseUrl}/docs`,
      endpoints: {
        auth: `${baseUrl}/auth`,
        health: `${baseUrl}/health`,
        products: `${baseUrl}/api/products`,
        orders: `${baseUrl}/api/orders`,
        finance: `${baseUrl}/api/finance`,
        generic_api: `${baseUrl}/api/call`,
        docs: `${baseUrl}/docs`,
      },
    });
  });
}

// Error handler
fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(error);

  // Handle validation errors
  if (error.validation) {
    return reply.status(400).send({
      success: false,
      error: {
        code: 400,
        message: 'Validation error',
        details: error.validation,
      },
    });
  }

  // Handle TikTok API errors
  if (error.code && error.message) {
    return reply.status(Number(error.code)).send({
      success: false,
      error: {
        code: error.code,
        message: error.message,
        request_id: (error as any).requestId,
        details: (error as any).details,
      },
    });
  }

  // Generic error
  return reply.status(500).send({
    success: false,
    error: {
      code: 500,
      message: 'Internal server error',
    },
  });
});

// Not found handler
fastify.setNotFoundHandler((request, reply) => {
  reply.status(404).send({
    success: false,
    error: {
      code: 404,
      message: 'Endpoint not found',
      path: request.url,
    },
  });
});

// Graceful shutdown
const gracefulShutdown = async (signal: string) => {
  fastify.log.info(`Received ${signal}, shutting down gracefully...`);
  
  try {
    await fastify.close();
    fastify.log.info('Server closed successfully');
    process.exit(0);
  } catch (error) {
    fastify.log.error({ error }, 'Error during shutdown');
    process.exit(1);
  }
};

// Start server
async function start() {
  try {
    // Register plugins and routes
    await registerPlugins();
    await registerRoutes();

    // Start the server
    await fastify.listen({
      port: config.PORT,
      host: config.HOST,
    });

    fastify.log.info(`🚀 TikTok Shop API Gateway is running on http://${config.HOST}:${config.PORT}`);
    fastify.log.info(`📚 API Documentation available at http://${config.HOST}:${config.PORT}/docs`);
    fastify.log.info(`🔍 Health check available at http://${config.HOST}:${config.PORT}/health`);

  } catch (error) {
    fastify.log.error({ error }, 'Failed to start server');
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  fastify.log.error({ error }, 'Uncaught Exception');
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  fastify.log.error({ reason, promise }, 'Unhandled Rejection');
  process.exit(1);
});

// Start the application
start();
