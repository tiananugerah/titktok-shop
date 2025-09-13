import http from 'http';
import { Product202401ListingSchemasResponse } from '../model/product/V202401/ListingSchemasResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202401ApiApiKeys {
}
export declare class ProductV202401Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202401Api";
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
    setApiKey(key: ProductV202401ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ListingSchemasGet(categoryIds: Array<number>, xTtsAccessToken: string, contentType: string, locale?: string, categoryVersion?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202401ListingSchemasResponse;
    }>;
}
export declare const ProductV202401ApiOperationNames: {
    readonly ListingSchemasGet: "ListingSchemasGet";
};
export type ProductV202401ApiOperationTypes = {
    ListingSchemasGet: ProductV202401Api['ListingSchemasGet'];
};
//# sourceMappingURL=productV202401Api.d.ts.map