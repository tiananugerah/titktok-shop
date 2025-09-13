import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { tiktokService } from '../services/tiktokService';
import config from '../config';

export async function healthRoutes(fastify: FastifyInstance) {
  // Health check endpoint
  fastify.get('/health', {
    schema: {
      description: 'Health check endpoint',
      tags: ['Health'],
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            timestamp: { type: 'string' },
            uptime: { type: 'number' },
            environment: { type: 'string' },
            version: { type: 'string' },
            services: {
              type: 'object',
              properties: {
                tiktok_api: { type: 'string' },
                database: { type: 'string' },
              },
            },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const healthData = await tiktokService.healthCheck();
      
      return reply.send({
        uptime: process.uptime(),
        environment: config.NODE_ENV,
        version: '1.0.0',
        services: {
          tiktok_api: 'connected',
          database: 'not_configured',
        },
        ...healthData,
      });
    } catch (error) {
      return reply.status(503).send({
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: config.NODE_ENV,
        version: '1.0.0',
        services: {
          tiktok_api: 'disconnected',
          database: 'not_configured',
        },
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  });

  // Readiness check endpoint
  fastify.get('/ready', {
    schema: {
      description: 'Readiness check endpoint',
      tags: ['Health'],
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            timestamp: { type: 'string' },
            ready: { type: 'boolean' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      // Check if TikTok service is ready
      await tiktokService.healthCheck();
      
      return reply.send({
        status: 'ready',
        timestamp: new Date().toISOString(),
        ready: true,
      });
    } catch (error) {
      return reply.status(503).send({
        status: 'not_ready',
        timestamp: new Date().toISOString(),
        ready: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  });

  // Liveness check endpoint
  fastify.get('/live', {
    schema: {
      description: 'Liveness check endpoint',
      tags: ['Health'],
      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            timestamp: { type: 'string' },
            alive: { type: 'boolean' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    return reply.send({
      status: 'alive',
      timestamp: new Date().toISOString(),
      alive: true,
    });
  });

  // API info endpoint
  fastify.get('/info', {
    schema: {
      description: 'API information endpoint',
      tags: ['Health'],
      response: {
        200: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            version: { type: 'string' },
            description: { type: 'string' },
            environment: { type: 'string' },
            timestamp: { type: 'string' },
            endpoints: {
              type: 'object',
              properties: {
                products: { type: 'string' },
                orders: { type: 'string' },
                finance: { type: 'string' },
                generic_api: { type: 'string' },
                health: { type: 'string' },
                docs: { type: 'string' },
              },
            },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    const baseUrl = `${request.protocol}://${request.hostname}`;
    
    return reply.send({
      name: 'TikTok Shop API Gateway',
      version: '1.0.0',
      description: 'A comprehensive API gateway for TikTok Shop operations built with Fastify.js and TypeScript',
      environment: config.NODE_ENV,
      timestamp: new Date().toISOString(),
      endpoints: {
        products: `${baseUrl}/api/products`,
        orders: `${baseUrl}/api/orders`,
        finance: `${baseUrl}/api/finance`,
        generic_api: `${baseUrl}/api/call`,
        health: `${baseUrl}/health`,
        docs: `${baseUrl}/docs`,
      },
    });
  });
}
