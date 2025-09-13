import http from 'http';
import { AffiliateSeller202405CreateOpenCollaborationRequestBody } from '../model/affiliateSeller/V202405/CreateOpenCollaborationRequestBody';
import { AffiliateSeller202405CreateOpenCollaborationResponse } from '../model/affiliateSeller/V202405/CreateOpenCollaborationResponse';
import { AffiliateSeller202405CreateTargetCollaborationRequestBody } from '../model/affiliateSeller/V202405/CreateTargetCollaborationRequestBody';
import { AffiliateSeller202405CreateTargetCollaborationResponse } from '../model/affiliateSeller/V202405/CreateTargetCollaborationResponse';
import { AffiliateSeller202405EditOpenCollaborationSettingsRequestBody } from '../model/affiliateSeller/V202405/EditOpenCollaborationSettingsRequestBody';
import { AffiliateSeller202405EditOpenCollaborationSettingsResponse } from '../model/affiliateSeller/V202405/EditOpenCollaborationSettingsResponse';
import { AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse } from '../model/affiliateSeller/V202405/GenerateAffiliateProductPromotionLinkResponse';
import { AffiliateSeller202405RemoveCreatorFromOpenCollaborationRequestBody } from '../model/affiliateSeller/V202405/RemoveCreatorFromOpenCollaborationRequestBody';
import { AffiliateSeller202405RemoveCreatorFromOpenCollaborationResponse } from '../model/affiliateSeller/V202405/RemoveCreatorFromOpenCollaborationResponse';
import { AffiliateSeller202405SearchSellerAffiliateOrdersResponse } from '../model/affiliateSeller/V202405/SearchSellerAffiliateOrdersResponse';
import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody } from '../model/affiliateSeller/V202405/SellerSearchAffiliateOpenCollaborationProductRequestBody';
import { AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse } from '../model/affiliateSeller/V202405/SellerSearchAffiliateOpenCollaborationProductResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateSellerV202405ApiApiKeys {
}
export declare class AffiliateSellerV202405Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateSellerV202405Api";
    protected authentications: {
        default: Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AffiliateSellerV202405ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OpenCollaborationSettingsPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, EditOpenCollaborationSettingsRequestBody?: AffiliateSeller202405EditOpenCollaborationSettingsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202405EditOpenCollaborationSettingsResponse;
    }>;
    OpenCollaborationsOpenCollaborationIdRemoveCreatorPost(openCollaborationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, RemoveCreatorFromOpenCollaborationRequestBody?: AffiliateSeller202405RemoveCreatorFromOpenCollaborationRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202405RemoveCreatorFromOpenCollaborationResponse;
    }>;
    OpenCollaborationsPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CreateOpenCollaborationRequestBody?: AffiliateSeller202405CreateOpenCollaborationRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202405CreateOpenCollaborationResponse;
    }>;
    OpenCollaborationsProductsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, sortOrder?: string, sortField?: string, pageToken?: string, shopCipher?: string, SellerSearchAffiliateOpenCollaborationProductRequestBody?: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse;
    }>;
    OrdersSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, version?: number, pageToken?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202405SearchSellerAffiliateOrdersResponse;
    }>;
    ProductsProductIdPromotionLinkGeneratePost(productId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202405GenerateAffiliateProductPromotionLinkResponse;
    }>;
    TargetCollaborationsPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CreateTargetCollaborationRequestBody?: AffiliateSeller202405CreateTargetCollaborationRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202405CreateTargetCollaborationResponse;
    }>;
}
export declare const AffiliateSellerV202405ApiOperationNames: {
    readonly OpenCollaborationSettingsPost: "OpenCollaborationSettingsPost";
    readonly OpenCollaborationsOpenCollaborationIdRemoveCreatorPost: "OpenCollaborationsOpenCollaborationIdRemoveCreatorPost";
    readonly OpenCollaborationsPost: "OpenCollaborationsPost";
    readonly OpenCollaborationsProductsSearchPost: "OpenCollaborationsProductsSearchPost";
    readonly OrdersSearchPost: "OrdersSearchPost";
    readonly ProductsProductIdPromotionLinkGeneratePost: "ProductsProductIdPromotionLinkGeneratePost";
    readonly TargetCollaborationsPost: "TargetCollaborationsPost";
};
export type AffiliateSellerV202405ApiOperationTypes = {
    OpenCollaborationSettingsPost: AffiliateSellerV202405Api['OpenCollaborationSettingsPost'];
    OpenCollaborationsOpenCollaborationIdRemoveCreatorPost: AffiliateSellerV202405Api['OpenCollaborationsOpenCollaborationIdRemoveCreatorPost'];
    OpenCollaborationsPost: AffiliateSellerV202405Api['OpenCollaborationsPost'];
    OpenCollaborationsProductsSearchPost: AffiliateSellerV202405Api['OpenCollaborationsProductsSearchPost'];
    OrdersSearchPost: AffiliateSellerV202405Api['OrdersSearchPost'];
    ProductsProductIdPromotionLinkGeneratePost: AffiliateSellerV202405Api['ProductsProductIdPromotionLinkGeneratePost'];
    TargetCollaborationsPost: AffiliateSellerV202405Api['TargetCollaborationsPost'];
};
//# sourceMappingURL=affiliateSellerV202405Api.d.ts.map