import { FastifyRequest, FastifyReply } from 'fastify';

// TikTok API Response Types
export interface TikTokApiResponse<T = any> {
  code: number;
  message: string;
  request_id: string;
  data?: T;
}

export interface TikTokErrorResponse {
  code: number;
  message: string;
  request_id: string;
  error_detail?: string;
}

// Request/Response Types
export interface ApiRequest extends FastifyRequest {
  body: any;
  query: any;
  params: any;
}

export interface ApiResponse extends FastifyReply {}

// TikTok Shop API Categories
export enum TikTokApiCategory {
  PRODUCT = 'product',
  ORDER = 'order',
  AFFILIATE = 'affiliate',
  AUTHORIZATION = 'authorization',
  FINANCE = 'finance',
  FULFILLMENT = 'fulfillment',
  LOGISTICS = 'logistics',
  PROMOTION = 'promotion',
  RETURN_REFUND = 'returnRefund',
  SELLER = 'seller',
  SUPPLY_CHAIN = 'supplyChain',
  DATA_RECONCILIATION = 'dataReconciliation',
  EVENT = 'event'
}

// API Version Types
export type ApiVersion = 
  | 'V202309' | 'V202310' | 'V202312' | 'V202401' | 'V202402' | 'V202403' 
  | 'V202404' | 'V202405' | 'V202406' | 'V202407' | 'V202409' | 'V202410' 
  | 'V202411' | 'V202412' | 'V202501' | 'V202502' | 'V202504' | 'V202505' 
  | 'V202506' | 'V202507';

// Generic API Request
export interface GenericApiRequest {
  category: TikTokApiCategory;
  version: ApiVersion;
  operation: string;
  params?: Record<string, any>;
  body?: Record<string, any>;
  query?: Record<string, any>;
}

// Error Types
export class TikTokApiError extends Error {
  constructor(
    public code: number,
    message: string,
    public requestId?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'TikTokApiError';
  }
}

export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
  }
}
