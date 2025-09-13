import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { tiktokService } from '../services/tiktokService';
import { TikTokApiError, ValidationError } from '../types';

// Request schemas
const searchOrdersSchema = z.object({
  page_number: z.number().min(1).default(1),
  page_size: z.number().min(1).max(100).default(20),
  order_status: z.enum(['UNPAID', 'AWAITING_SHIPMENT', 'AWAITING_COLLECTION', 'IN_TRANSIT', 'DELIVERED', 'COMPLETED', 'CANCELLED']).optional(),
  start_time: z.string().optional(),
  end_time: z.string().optional(),
  order_id: z.string().optional(),
});

const orderDetailsSchema = z.object({
  order_id: z.string().min(1, 'Order ID is required'),
});

const updateOrderStatusSchema = z.object({
  order_id: z.string().min(1, 'Order ID is required'),
  status: z.enum(['AWAITING_SHIPMENT', 'AWAITING_COLLECTION', 'IN_TRANSIT', 'DELIVERED', 'COMPLETED', 'CANCELLED']),
  tracking_number: z.string().optional(),
  carrier: z.string().optional(),
});

export async function orderRoutes(fastify: FastifyInstance) {
  // Search orders
  fastify.get('/orders/search', {
    schema: {
      description: 'Search for orders',
      tags: ['Orders'],
      querystring: {
        type: 'object',
        properties: {
          page_number: { type: 'number', minimum: 1, default: 1 },
          page_size: { type: 'number', minimum: 1, maximum: 100, default: 20 },
          order_status: { 
            type: 'string', 
            enum: ['UNPAID', 'AWAITING_SHIPMENT', 'AWAITING_COLLECTION', 'IN_TRANSIT', 'DELIVERED', 'COMPLETED', 'CANCELLED'] 
          },
          start_time: { type: 'string' },
          end_time: { type: 'string' },
          order_id: { type: 'string' },
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
      const query = searchOrdersSchema.parse(request.query);
      const result = await tiktokService.getOrders([query.page_number, query]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Orders retrieved successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Get order details
  fastify.get('/orders/:order_id', {
    schema: {
      description: 'Get order details by ID',
      tags: ['Orders'],
      params: {
        type: 'object',
        properties: {
          order_id: { type: 'string' },
        },
        required: ['order_id'],
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
      const params = orderDetailsSchema.parse(request.params);
      const result = await tiktokService.getOrderDetails([params.order_id]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Order details retrieved successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Update order status
  fastify.put('/orders/:order_id/status', {
    schema: {
      description: 'Update order status',
      tags: ['Orders'],
      params: {
        type: 'object',
        properties: {
          order_id: { type: 'string' },
        },
        required: ['order_id'],
      },
      body: {
        type: 'object',
        properties: {
          status: { 
            type: 'string', 
            enum: ['AWAITING_SHIPMENT', 'AWAITING_COLLECTION', 'IN_TRANSIT', 'DELIVERED', 'COMPLETED', 'CANCELLED'] 
          },
          tracking_number: { type: 'string' },
          carrier: { type: 'string' },
        },
        required: ['status'],
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
      const params = updateOrderStatusSchema.pick({ order_id: true }).parse(request.params);
      const body = updateOrderStatusSchema.omit({ order_id: true }).parse(request.body);
      
      const updateData = { ...body, order_id: params.order_id };
      const result = await tiktokService.updateOrderStatus([updateData]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Order status updated successfully',
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
