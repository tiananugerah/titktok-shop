import http from 'http';
import { Product202502SearchProductsRequestBody } from '../model/product/V202502/SearchProductsRequestBody';
import { Product202502SearchProductsResponse } from '../model/product/V202502/SearchProductsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202502ApiApiKeys {
}
export declare class ProductV202502Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202502Api";
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
    setApiKey(key: ProductV202502ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ProductsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, shopCipher?: string, SearchProductsRequestBody?: Product202502SearchProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202502SearchProductsResponse;
    }>;
}
export declare const ProductV202502ApiOperationNames: {
    readonly ProductsSearchPost: "ProductsSearchPost";
};
export type ProductV202502ApiOperationTypes = {
    ProductsSearchPost: ProductV202502Api['ProductsSearchPost'];
};
//# sourceMappingURL=productV202502Api.d.ts.map