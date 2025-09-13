import http from 'http';
import { Product202505CreateImageTranslationTasksRequestBody } from '../model/product/V202505/CreateImageTranslationTasksRequestBody';
import { Product202505CreateImageTranslationTasksResponse } from '../model/product/V202505/CreateImageTranslationTasksResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202505ApiApiKeys {
}
export declare class ProductV202505Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202505Api";
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
    setApiKey(key: ProductV202505ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ImagesTranslationTasksPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CreateImageTranslationTasksRequestBody?: Product202505CreateImageTranslationTasksRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202505CreateImageTranslationTasksResponse;
    }>;
}
export declare const ProductV202505ApiOperationNames: {
    readonly ImagesTranslationTasksPost: "ImagesTranslationTasksPost";
};
export type ProductV202505ApiOperationTypes = {
    ImagesTranslationTasksPost: ProductV202505Api['ImagesTranslationTasksPost'];
};
//# sourceMappingURL=productV202505Api.d.ts.map