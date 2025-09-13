import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { tiktokService } from '../services/tiktokService';
import { TikTokApiError, ValidationError } from '../types';

// Request schemas
const searchProductsSchema = z.object({
  page_number: z.number().min(1).default(1),
  page_size: z.number().min(1).max(100).default(20),
  search_keyword: z.string().optional(),
  category_id: z.string().optional(),
  sort_type: z.enum(['CREATE_TIME', 'UPDATE_TIME', 'SALES']).optional(),
  sort_order: z.enum(['ASC', 'DESC']).optional(),
});

const productDetailsSchema = z.object({
  product_id: z.string().min(1, 'Product ID is required'),
});

const createProductSchema = z.object({
  title: z.string().min(1, 'Product title is required'),
  description: z.string().optional(),
  category_id: z.string().min(1, 'Category ID is required'),
  brand_id: z.string().optional(),
  images: z.array(z.string().url()).min(1, 'At least one image is required'),
  price: z.object({
    amount: z.string().min(1, 'Price amount is required'),
    currency: z.string().min(1, 'Currency is required'),
  }),
  stock_quantity: z.number().min(0).optional(),
  sku_list: z.array(z.object({
    id: z.string().min(1),
    price: z.object({
      amount: z.string().min(1),
      currency: z.string().min(1),
    }),
    stock_quantity: z.number().min(0),
  })).optional(),
});

const updateProductSchema = z.object({
  product_id: z.string().min(1, 'Product ID is required'),
  title: z.string().optional(),
  description: z.string().optional(),
  price: z.object({
    amount: z.string().min(1),
    currency: z.string().min(1),
  }).optional(),
  stock_quantity: z.number().min(0).optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'DELETED']).optional(),
});

const deleteProductSchema = z.object({
  product_id: z.string().min(1, 'Product ID is required'),
});

export async function productRoutes(fastify: FastifyInstance) {
  // Search products
  fastify.get('/products/search', {
    schema: {
      description: 'Search for products',
      tags: ['Products'],
      querystring: {
        type: 'object',
        properties: {
          page_number: { type: 'number', minimum: 1, default: 1 },
          page_size: { type: 'number', minimum: 1, maximum: 100, default: 20 },
          search_keyword: { type: 'string' },
          category_id: { type: 'string' },
          sort_type: { type: 'string', enum: ['CREATE_TIME', 'UPDATE_TIME', 'SALES'] },
          sort_order: { type: 'string', enum: ['ASC', 'DESC'] },
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
      const query = searchProductsSchema.parse(request.query);
      const result = await tiktokService.searchProducts([query.page_number, query]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Products retrieved successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Get product details
  fastify.get('/products/:product_id', {
    schema: {
      description: 'Get product details by ID',
      tags: ['Products'],
      params: {
        type: 'object',
        properties: {
          product_id: { type: 'string' },
        },
        required: ['product_id'],
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
      const params = productDetailsSchema.parse(request.params);
      const result = await tiktokService.getProductDetails([params.product_id]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Product details retrieved successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Create product
  fastify.post('/products', {
    schema: {
      description: 'Create a new product',
      tags: ['Products'],
      body: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          description: { type: 'string' },
          category_id: { type: 'string' },
          brand_id: { type: 'string' },
          images: { type: 'array', items: { type: 'string' } },
          price: {
            type: 'object',
            properties: {
              amount: { type: 'string' },
              currency: { type: 'string' },
            },
            required: ['amount', 'currency'],
          },
          stock_quantity: { type: 'number' },
          sku_list: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                price: {
                  type: 'object',
                  properties: {
                    amount: { type: 'string' },
                    currency: { type: 'string' },
                  },
                  required: ['amount', 'currency'],
                },
                stock_quantity: { type: 'number' },
              },
              required: ['id', 'price', 'stock_quantity'],
            },
          },
        },
        required: ['title', 'category_id', 'images', 'price'],
      },
      response: {
        201: {
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
      const body = createProductSchema.parse(request.body);
      const result = await tiktokService.createProduct([body]);
      
      return reply.status(201).send({
        success: true,
        data: result,
        message: 'Product created successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Update product
  fastify.put('/products/:product_id', {
    schema: {
      description: 'Update an existing product',
      tags: ['Products'],
      params: {
        type: 'object',
        properties: {
          product_id: { type: 'string' },
        },
        required: ['product_id'],
      },
      body: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          description: { type: 'string' },
          price: {
            type: 'object',
            properties: {
              amount: { type: 'string' },
              currency: { type: 'string' },
            },
            required: ['amount', 'currency'],
          },
          stock_quantity: { type: 'number' },
          status: { type: 'string', enum: ['ACTIVE', 'INACTIVE', 'DELETED'] },
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
      const params = updateProductSchema.pick({ product_id: true }).parse(request.params);
      const body = updateProductSchema.omit({ product_id: true }).parse(request.body);
      
      const updateData = { ...body, product_id: params.product_id };
      const result = await tiktokService.updateProduct([updateData]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Product updated successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Delete product
  fastify.delete('/products/:product_id', {
    schema: {
      description: 'Delete a product',
      tags: ['Products'],
      params: {
        type: 'object',
        properties: {
          product_id: { type: 'string' },
        },
        required: ['product_id'],
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
      const params = deleteProductSchema.parse(request.params);
      const result = await tiktokService.deleteProduct([params.product_id]);
      
      return reply.send({
        success: true,
        data: result,
        message: 'Product deleted successfully',
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
