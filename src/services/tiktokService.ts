import { 
  TikTokShopNodeApiClient, 
  ClientConfiguration 
} from '../../tiktok_sdk';
import config from '../config';
import { 
  TikTokApiError, 
  TikTokApiResponse, 
  TikTokApiCategory, 
  ApiVersion 
} from '../types';

export class TikTokService {
  private client!: TikTokShopNodeApiClient;
  private accessToken: string;

  constructor() {
    this.initializeClient();
    this.accessToken = config.TIKTOK_ACCESS_TOKEN;
  }

  private initializeClient(): void {
    try {
      // Set global configuration
      ClientConfiguration.globalConfig.app_key = config.TIKTOK_APP_KEY;
      ClientConfiguration.globalConfig.app_secret = config.TIKTOK_APP_SECRET;
      ClientConfiguration.globalConfig.basePath = config.TIKTOK_BASE_PATH;

      // Create client instance
      this.client = new TikTokShopNodeApiClient({
        config: new ClientConfiguration(
          config.TIKTOK_APP_KEY,
          config.TIKTOK_APP_SECRET,
          config.TIKTOK_BASE_PATH
        ),
      });

      console.log('TikTok SDK client initialized successfully');
    } catch (error) {
      console.error('Failed to initialize TikTok SDK client:', error);
      throw new TikTokApiError(500, 'Failed to initialize TikTok SDK client');
    }
  }

  /**
   * Generic method to call TikTok Shop APIs
   */
  async callApi<T = any>(
    category: TikTokApiCategory,
    version: ApiVersion,
    operation: string,
    params: any[] = []
  ): Promise<TikTokApiResponse<T>> {
    try {
      console.log(`Calling TikTok API: ${category}${version}.${operation}`);
      
      // Get the appropriate API instance based on category and version
      const apiInstance = this.getApiInstance(category, version);
      
      if (!apiInstance) {
        throw new TikTokApiError(404, `API instance not found for ${category}${version}`);
      }

      // Call the operation with access token and parameters
      const result = await (apiInstance as any)[operation](
        this.accessToken,
        'application/json',
        ...params
      );

      console.log(`TikTok API call successful: ${category}${version}.${operation}`);
      return result.body;

    } catch (error: any) {
      console.error(`TikTok API call failed: ${category}${version}.${operation}`, error);
      
      if (error instanceof TikTokApiError) {
        throw error;
      }

      // Handle different types of errors
      if (error.response) {
        const statusCode = error.statusCode || error.response.statusCode || 500;
        const message = error.message || 'API call failed';
        const requestId = error.response.headers?.['x-request-id'] || 'unknown';
        
        throw new TikTokApiError(statusCode, message, requestId, error.body);
      }

      throw new TikTokApiError(500, 'Internal server error during API call', undefined, error.message);
    }
  }

  /**
   * Get API instance based on category and version
   */
  private getApiInstance(category: TikTokApiCategory, version: ApiVersion): any {
    const apiName = this.getApiName(category, version);
    return (this.client.api as any)[apiName];
  }

  /**
   * Generate API name from category and version
   */
  private getApiName(category: TikTokApiCategory, version: ApiVersion): string {
    const categoryMap: Record<TikTokApiCategory, string> = {
      [TikTokApiCategory.PRODUCT]: 'Product',
      [TikTokApiCategory.ORDER]: 'Order',
      [TikTokApiCategory.AFFILIATE]: 'Affiliate',
      [TikTokApiCategory.AUTHORIZATION]: 'Authorization',
      [TikTokApiCategory.FINANCE]: 'Finance',
      [TikTokApiCategory.FULFILLMENT]: 'Fulfillment',
      [TikTokApiCategory.LOGISTICS]: 'Logistics',
      [TikTokApiCategory.PROMOTION]: 'Promotion',
      [TikTokApiCategory.RETURN_REFUND]: 'ReturnRefund',
      [TikTokApiCategory.SELLER]: 'Seller',
      [TikTokApiCategory.SUPPLY_CHAIN]: 'SupplyChain',
      [TikTokApiCategory.DATA_RECONCILIATION]: 'DataReconciliation',
      [TikTokApiCategory.EVENT]: 'Event'
    };

    const categoryName = categoryMap[category];
    if (!categoryName) {
      throw new TikTokApiError(400, `Invalid API category: ${category}`);
    }

    return `${categoryName}${version}Api`;
  }

  /**
   * Product API Methods
   */
  async searchProducts(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.PRODUCT, 'V202502', 'ProductsSearchPost', params);
  }

  async getProductDetails(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.PRODUCT, 'V202502', 'ProductsGetPost', params);
  }

  async createProduct(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.PRODUCT, 'V202502', 'ProductsCreatePost', params);
  }

  async updateProduct(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.PRODUCT, 'V202502', 'ProductsUpdatePost', params);
  }

  async deleteProduct(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.PRODUCT, 'V202502', 'ProductsDeletePost', params);
  }

  /**
   * Order API Methods
   */
  async getOrders(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.ORDER, 'V202507', 'OrdersSearchPost', params);
  }

  async getOrderDetails(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.ORDER, 'V202507', 'OrdersGetPost', params);
  }

  async updateOrderStatus(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.ORDER, 'V202507', 'OrdersUpdatePost', params);
  }

  /**
   * Authorization API Methods
   */
  async getAccessToken(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.AUTHORIZATION, 'V202405', 'AuthorizePost', params);
  }

  async refreshAccessToken(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.AUTHORIZATION, 'V202405', 'RefreshTokenPost', params);
  }

  /**
   * Finance API Methods
   */
  async getTransactions(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.FINANCE, 'V202507', 'TransactionsSearchPost', params);
  }

  async getSettlements(params: any[] = []): Promise<TikTokApiResponse> {
    return this.callApi(TikTokApiCategory.FINANCE, 'V202507', 'SettlementsSearchPost', params);
  }

  /**
   * Health check method
   */
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString()
    };
  }
}

// Export singleton instance
export const tiktokService = new TikTokService();
