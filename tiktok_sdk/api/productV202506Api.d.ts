import http from 'http';
import { Product202506GetImageTranslationTasksResponse } from '../model/product/V202506/GetImageTranslationTasksResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202506ApiApiKeys {
}
export declare class ProductV202506Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202506Api";
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
    setApiKey(key: ProductV202506ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ImagesTranslationTasksGet(xTtsAccessToken: string, contentType: string, translationTaskIds?: Array<string>, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202506GetImageTranslationTasksResponse;
    }>;
}
export declare const ProductV202506ApiOperationNames: {
    readonly ImagesTranslationTasksGet: "ImagesTranslationTasksGet";
};
export type ProductV202506ApiOperationTypes = {
    ImagesTranslationTasksGet: ProductV202506Api['ImagesTranslationTasksGet'];
};
//# sourceMappingURL=productV202506Api.d.ts.map