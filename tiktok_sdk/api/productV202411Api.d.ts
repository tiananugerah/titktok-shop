import http from 'http';
import { Product202411DiagnoseandOptimizeProductRequestBody } from '../model/product/V202411/DiagnoseandOptimizeProductRequestBody';
import { Product202411DiagnoseandOptimizeProductResponse } from '../model/product/V202411/DiagnoseandOptimizeProductResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202411ApiApiKeys {
}
export declare class ProductV202411Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202411Api";
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
    setApiKey(key: ProductV202411ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ProductsDiagnoseOptimizePost(xTtsAccessToken: string, contentType: string, shopCipher?: string, DiagnoseandOptimizeProductRequestBody?: Product202411DiagnoseandOptimizeProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202411DiagnoseandOptimizeProductResponse;
    }>;
}
export declare const ProductV202411ApiOperationNames: {
    readonly ProductsDiagnoseOptimizePost: "ProductsDiagnoseOptimizePost";
};
export type ProductV202411ApiOperationTypes = {
    ProductsDiagnoseOptimizePost: ProductV202411Api['ProductsDiagnoseOptimizePost'];
};
//# sourceMappingURL=productV202411Api.d.ts.map