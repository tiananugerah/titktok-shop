import http from 'http';
import { Product202404OptimizedImagesRequestBody } from '../model/product/V202404/OptimizedImagesRequestBody';
import { Product202404OptimizedImagesResponse } from '../model/product/V202404/OptimizedImagesResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202404ApiApiKeys {
}
export declare class ProductV202404Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202404Api";
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
    setApiKey(key: ProductV202404ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ImagesOptimizePost(xTtsAccessToken: string, contentType: string, shopCipher?: string, OptimizedImagesRequestBody?: Product202404OptimizedImagesRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202404OptimizedImagesResponse;
    }>;
}
export declare const ProductV202404ApiOperationNames: {
    readonly ImagesOptimizePost: "ImagesOptimizePost";
};
export type ProductV202404ApiOperationTypes = {
    ImagesOptimizePost: ProductV202404Api['ImagesOptimizePost'];
};
//# sourceMappingURL=productV202404Api.d.ts.map