import http from 'http';
import { Product202312CheckListingPrerequisitesResponse } from '../model/product/V202312/CheckListingPrerequisitesResponse';
import { Product202312SearchGlobalProductsRequestBody } from '../model/product/V202312/SearchGlobalProductsRequestBody';
import { Product202312SearchGlobalProductsResponse } from '../model/product/V202312/SearchGlobalProductsResponse';
import { Product202312SearchProductsRequestBody } from '../model/product/V202312/SearchProductsRequestBody';
import { Product202312SearchProductsResponse } from '../model/product/V202312/SearchProductsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202312ApiApiKeys {
}
export declare class ProductV202312Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202312Api";
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
    setApiKey(key: ProductV202312ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    GlobalProductsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchGlobalProductsRequestBody?: Product202312SearchGlobalProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202312SearchGlobalProductsResponse;
    }>;
    PrerequisitesGet(xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202312CheckListingPrerequisitesResponse;
    }>;
    ProductsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, shopCipher?: string, SearchProductsRequestBody?: Product202312SearchProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202312SearchProductsResponse;
    }>;
}
export declare const ProductV202312ApiOperationNames: {
    readonly GlobalProductsSearchPost: "GlobalProductsSearchPost";
    readonly PrerequisitesGet: "PrerequisitesGet";
    readonly ProductsSearchPost: "ProductsSearchPost";
};
export type ProductV202312ApiOperationTypes = {
    GlobalProductsSearchPost: ProductV202312Api['GlobalProductsSearchPost'];
    PrerequisitesGet: ProductV202312Api['PrerequisitesGet'];
    ProductsSearchPost: ProductV202312Api['ProductsSearchPost'];
};
//# sourceMappingURL=productV202312Api.d.ts.map