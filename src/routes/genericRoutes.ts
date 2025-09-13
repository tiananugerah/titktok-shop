import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { tiktokService } from '../services/tiktokService';
import { TikTokApiError, ValidationError, TikTokApiCategory, ApiVersion } from '../types';

// Request schemas
const genericApiRequestSchema = z.object({
  category: z.nativeEnum(TikTokApiCategory),
  version: z.string().regex(/^V\d{6}$/, 'Version must be in format V202309'),
  operation: z.string().min(1, 'Operation is required'),
  params: z.array(z.any()).optional().default([]),
  body: z.record(z.any()).optional(),
  query: z.record(z.any()).optional(),
});

const apiCategoriesSchema = z.object({
  category: z.nativeEnum(TikTokApiCategory).optional(),
});

export async function genericRoutes(fastify: FastifyInstance) {
  // Generic API call endpoint
  fastify.post('/call', {
    schema: {
      description: 'Make a generic TikTok Shop API call',
      tags: ['Generic API'],
      body: {
        type: 'object',
        properties: {
          category: { 
            type: 'string', 
            enum: Object.keys(TikTokApiCategory),
            description: 'API category (PRODUCT, ORDER, AFFILIATE, etc.)'
          },
          version: { 
            type: 'string', 
            pattern: '^V\\d{6}$',
            description: 'API version (e.g., V202502)'
          },
          operation: { 
            type: 'string',
            description: 'API operation name (e.g., ProductsSearchPost)'
          },
          params: { 
            type: 'array',
            description: 'Parameters to pass to the API call'
          },
          body: { 
            type: 'object',
            description: 'Request body data'
          },
          query: { 
            type: 'object',
            description: 'Query parameters'
          },
        },
        required: ['category', 'version', 'operation'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: { type: 'object' },
            message: { type: 'string' },
            request_info: {
              type: 'object',
              properties: {
                category: { type: 'string' },
                version: { type: 'string' },
                operation: { type: 'string' },
              },
            },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const body = genericApiRequestSchema.parse(request.body);
      
      // Prepare parameters array
      const params: any[] = [];
      
      // Add query parameters if provided
      if (body.query) {
        params.push(body.query);
      }
      
      // Add body parameters if provided
      if (body.body) {
        params.push(body.body);
      }
      
      // Add additional params if provided
      if (body.params && body.params.length > 0) {
        params.push(...body.params);
      }
      
      const result = await tiktokService.callApi(
        body.category,
        body.version as ApiVersion,
        body.operation,
        params
      );
      
      return reply.send({
        success: true,
        data: result,
        message: 'API call completed successfully',
        request_info: {
          category: body.category,
          version: body.version,
          operation: body.operation,
        },
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Get available API categories
  fastify.get('/categories', {
    schema: {
      description: 'Get available TikTok Shop API categories',
      tags: ['Generic API'],
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {
              type: 'object',
              properties: {
                categories: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      key: { type: 'string' },
                      value: { type: 'string' },
                      description: { type: 'string' },
                    },
                  },
                },
                versions: {
                  type: 'array',
                  items: { type: 'string' },
                },
              },
            },
            message: { type: 'string' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const categories = Object.entries(TikTokApiCategory).map(([key, value]) => ({
        key,
        value,
        description: getCategoryDescription(value),
      }));

      const versions: ApiVersion[] = [
        'V202309', 'V202310', 'V202312', 'V202401', 'V202402', 'V202403',
        'V202404', 'V202405', 'V202406', 'V202407', 'V202409', 'V202410',
        'V202411', 'V202412', 'V202501', 'V202502', 'V202504', 'V202505',
        'V202506', 'V202507'
      ];

      return reply.send({
        success: true,
        data: {
          categories,
          versions,
        },
        message: 'API categories retrieved successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });

  // Get API operations for a specific category
  fastify.get('/categories/:category/operations', {
    schema: {
      description: 'Get available operations for a specific API category',
      tags: ['Generic API'],
      params: {
        type: 'object',
        properties: {
          category: { 
            type: 'string', 
            enum: Object.keys(TikTokApiCategory)
          },
        },
        required: ['category'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            data: {
              type: 'object',
              properties: {
                category: { type: 'string' },
                operations: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      description: { type: 'string' },
                      versions: { type: 'array', items: { type: 'string' } },
                    },
                  },
                },
              },
            },
            message: { type: 'string' },
          },
        },
      },
    },
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const params = apiCategoriesSchema.parse(request.params);
      const operations = getCategoryOperations(params.category!);

      return reply.send({
        success: true,
        data: {
          category: params.category,
          operations,
        },
        message: 'API operations retrieved successfully',
      });
    } catch (error) {
      return handleError(error, reply);
    }
  });
}

// Helper functions
function getCategoryDescription(category: TikTokApiCategory): string {
  const descriptions: Record<TikTokApiCategory, string> = {
    [TikTokApiCategory.PRODUCT]: 'Product management operations (create, update, delete, search products)',
    [TikTokApiCategory.ORDER]: 'Order management operations (search, update order status)',
    [TikTokApiCategory.AFFILIATE]: 'Affiliate program operations',
    [TikTokApiCategory.AUTHORIZATION]: 'Authentication and authorization operations',
    [TikTokApiCategory.FINANCE]: 'Financial operations (transactions, settlements)',
    [TikTokApiCategory.FULFILLMENT]: 'Order fulfillment operations',
    [TikTokApiCategory.LOGISTICS]: 'Logistics and shipping operations',
    [TikTokApiCategory.PROMOTION]: 'Promotion and marketing operations',
    [TikTokApiCategory.RETURN_REFUND]: 'Return and refund operations',
    [TikTokApiCategory.SELLER]: 'Seller account operations',
    [TikTokApiCategory.SUPPLY_CHAIN]: 'Supply chain operations',
    [TikTokApiCategory.DATA_RECONCILIATION]: 'Data reconciliation operations',
    [TikTokApiCategory.EVENT]: 'Event and webhook operations',
  };
  return descriptions[category] || 'Unknown category';
}

function getCategoryOperations(category: TikTokApiCategory): Array<{ name: string; description: string; versions: string[] }> {
  const operations: Record<TikTokApiCategory, Array<{ name: string; description: string; versions: string[] }>> = {
    [TikTokApiCategory.PRODUCT]: [
      { name: 'ProductsSearchPost', description: 'Search for products', versions: ['V202502', 'V202507'] },
      { name: 'ProductsGetPost', description: 'Get product details', versions: ['V202502', 'V202507'] },
      { name: 'ProductsCreatePost', description: 'Create a new product', versions: ['V202502', 'V202507'] },
      { name: 'ProductsUpdatePost', description: 'Update an existing product', versions: ['V202502', 'V202507'] },
      { name: 'ProductsDeletePost', description: 'Delete a product', versions: ['V202502', 'V202507'] },
    ],
    [TikTokApiCategory.ORDER]: [
      { name: 'OrdersSearchPost', description: 'Search for orders', versions: ['V202507'] },
      { name: 'OrdersGetPost', description: 'Get order details', versions: ['V202507'] },
      { name: 'OrdersUpdatePost', description: 'Update order status', versions: ['V202507'] },
    ],
    [TikTokApiCategory.FINANCE]: [
      { name: 'TransactionsSearchPost', description: 'Search financial transactions', versions: ['V202507'] },
      { name: 'SettlementsSearchPost', description: 'Search settlements', versions: ['V202507'] },
    ],
    [TikTokApiCategory.AUTHORIZATION]: [
      { name: 'AuthorizePost', description: 'Get access token', versions: ['V202405'] },
      { name: 'RefreshTokenPost', description: 'Refresh access token', versions: ['V202405'] },
    ],
    [TikTokApiCategory.AFFILIATE]: [
      { name: 'AffiliateProgramsGetPost', description: 'Get affiliate programs', versions: ['V202505'] },
      { name: 'AffiliateOrdersSearchPost', description: 'Search affiliate orders', versions: ['V202505'] },
    ],
    [TikTokApiCategory.FULFILLMENT]: [
      { name: 'FulfillmentOrdersGetPost', description: 'Get fulfillment orders', versions: ['V202502'] },
      { name: 'FulfillmentOrdersUpdatePost', description: 'Update fulfillment orders', versions: ['V202502'] },
    ],
    [TikTokApiCategory.LOGISTICS]: [
      { name: 'LogisticsTrackingGetPost', description: 'Get tracking information', versions: ['V202309'] },
      { name: 'LogisticsShippingLabelsPost', description: 'Generate shipping labels', versions: ['V202309'] },
    ],
    [TikTokApiCategory.PROMOTION]: [
      { name: 'PromotionsSearchPost', description: 'Search promotions', versions: ['V202406'] },
      { name: 'PromotionsCreatePost', description: 'Create promotion', versions: ['V202406'] },
    ],
    [TikTokApiCategory.RETURN_REFUND]: [
      { name: 'ReturnsSearchPost', description: 'Search returns', versions: ['V202309'] },
      { name: 'RefundsProcessPost', description: 'Process refunds', versions: ['V202309'] },
    ],
    [TikTokApiCategory.SELLER]: [
      { name: 'SellerProfileGetPost', description: 'Get seller profile', versions: ['V202309'] },
      { name: 'SellerSettingsUpdatePost', description: 'Update seller settings', versions: ['V202309'] },
    ],
    [TikTokApiCategory.SUPPLY_CHAIN]: [
      { name: 'SupplyChainInventoryGetPost', description: 'Get inventory information', versions: ['V202309'] },
      { name: 'SupplyChainWarehousesGetPost', description: 'Get warehouse information', versions: ['V202309'] },
    ],
    [TikTokApiCategory.DATA_RECONCILIATION]: [
      { name: 'DataReconciliationOrdersPost', description: 'Reconcile order data', versions: ['V202401'] },
      { name: 'DataReconciliationTransactionsPost', description: 'Reconcile transaction data', versions: ['V202401'] },
    ],
    [TikTokApiCategory.EVENT]: [
      { name: 'EventsWebhookRegisterPost', description: 'Register webhook', versions: ['V202309'] },
      { name: 'EventsWebhookListPost', description: 'List webhooks', versions: ['V202309'] },
    ],
  };

  return operations[category] || [];
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
