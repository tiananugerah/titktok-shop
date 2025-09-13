import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { tiktokService } from '../services/tiktokService';
import { TikTokApiError, ValidationError } from '../types';

// Request schemas
const searchTransactionsSchema = z.object({
  page_number: z.number().min(1).default(1),
  page_size: z.number().min(1).max(100).default(20),
  start_time: z.string().optional(),
  end_time: z.string().optional(),
  transaction_type: z.enum(['ORDER', 'REFUND', 'COMMISSION', 'SETTLEMENT']).optional(),
  status: z.enum(['PENDING', 'COMPLETED', 'FAILED', 'CANCELLED']).optional(),
});

const searchSettlementsSchema = z.object({
  page_number: z.number().min(1).default(1),
  page_size: z.number().min(1).max(100).default(20),
  start_time: z.string().optional(),
  end_time: z.string().optional(),
  settlement_status: z.enum(['PENDING', 'COMPLETED', 'FAILED']).optional(),
});

export async function financeRoutes(fastify: FastifyInstance) {
  // Search transactions
  fastify.get('/finance/transactions', {
    schema: {
      description: 'Search for financial transactions',
      tags: ['Finance'],
      querystring: {
        type: 'object',
        properties: {
          page_number: { type: 'number', minimum: 1, default: 1 },
          page_size: { type: 'number', minimum: 1, maximum: 100, default: 20 },
          start_time: { type: 'string' },
          end_time: { type: 'string' },
          transaction_type: { 
            type: 'string', 
            enum: ['ORDER', 'REFUND', 'COMMISSION', 'SETTLEMENT'] 
          },
          status: { 
            type: 'string', 
            enum: ['PENDING', 'COMPLETED', 'FAILED', 'CANCELLED'] 
          },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: { type: 'object' },
            message: { type: 'string' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const query = searchTransactionsSchema.parse(request.query);
      const result = await tiktokService.getTransactions([query.page_number, query]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Transactions retrieved successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Search settlements
  fastify.get('/finance/settlements', {
    schema: {
      description: 'Search for settlements',
      tags: ['Finance'],
      querystring: {
        type: 'object',
        properties: {
          page_number: { type: 'number', minimum: 1, default: 1 },
          page_size: { type: 'number', minimum: 1, maximum: 100, default: 20 },
          start_time: { type: 'string' },
          end_time: { type: 'string' },
          settlement_status: { 
            type: 'string', 
            enum: ['PENDING', 'COMPLETED', 'FAILED'] 
          },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: { type: 'object' },
            message: { type: 'string' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const query = searchSettlementsSchema.parse(request.query);
      const result = await tiktokService.getSettlements([query.page_number, query]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Settlements retrieved successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });
}

// Error handler utility
function handleError(error: any, reply: FastifyReply) {
  console.error('Route error:', error);

  if (error instanceof TikTokApiError) {
    return reply.status(error.code).send({
      success: false,
      error: {
        code: error.code,
        message: error.message,
        request_id: error.requestId,
        details: error.details,
      },
    });
  }

  if (error instanceof ValidationError) {
    return reply.status(400).send({
      success: false,
      error: {
        code: 400,
        message: error.message,
        field: error.field,
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
}
