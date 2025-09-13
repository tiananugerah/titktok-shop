import http from 'http';
import { Product202507GetGlobalListingRulesResponse } from '../model/product/V202507/GetGlobalListingRulesResponse';
import { Product202507GetGlobalReplicatedProductsResponse } from '../model/product/V202507/GetGlobalReplicatedProductsResponse';
import { Product202507ReplicateProductRequestBody } from '../model/product/V202507/ReplicateProductRequestBody';
import { Product202507ReplicateProductResponse } from '../model/product/V202507/ReplicateProductResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202507ApiApiKeys {
}
export declare class ProductV202507Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202507Api";
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
    setApiKey(key: ProductV202507ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    GlobalListingRulesGet(xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202507GetGlobalListingRulesResponse;
    }>;
    ProductsProductIdGlobalReplicatePost(productId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, ReplicateProductRequestBody?: Product202507ReplicateProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202507ReplicateProductResponse;
    }>;
    ProductsProductIdReplicatedProductsGet(productId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202507GetGlobalReplicatedProductsResponse;
    }>;
}
export declare const ProductV202507ApiOperationNames: {
    readonly GlobalListingRulesGet: "GlobalListingRulesGet";
    readonly ProductsProductIdGlobalReplicatePost: "ProductsProductIdGlobalReplicatePost";
    readonly ProductsProductIdReplicatedProductsGet: "ProductsProductIdReplicatedProductsGet";
};
export type ProductV202507ApiOperationTypes = {
    GlobalListingRulesGet: ProductV202507Api['GlobalListingRulesGet'];
    ProductsProductIdGlobalReplicatePost: ProductV202507Api['ProductsProductIdGlobalReplicatePost'];
    ProductsProductIdReplicatedProductsGet: ProductV202507Api['ProductsProductIdReplicatedProductsGet'];
};
//# sourceMappingURL=productV202507Api.d.ts.map