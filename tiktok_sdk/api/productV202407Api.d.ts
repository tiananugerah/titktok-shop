import http from 'http';
import { Product202407CreateCategoryUpgradeTaskResponse } from '../model/product/V202407/CreateCategoryUpgradeTaskResponse';
import { Product202407ListingSchemasResponse } from '../model/product/V202407/ListingSchemasResponse';
import { Product202407SearchSizeChartsRequestBody } from '../model/product/V202407/SearchSizeChartsRequestBody';
import { Product202407SearchSizeChartsResponse } from '../model/product/V202407/SearchSizeChartsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202407ApiApiKeys {
}
export declare class ProductV202407Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202407Api";
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
    setApiKey(key: ProductV202407ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ListingSchemasGet(categoryIds: Array<number>, xTtsAccessToken: string, contentType: string, locale?: string, categoryVersion?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202407ListingSchemasResponse;
    }>;
    ProductsCategoryUpgradeTaskPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202407CreateCategoryUpgradeTaskResponse;
    }>;
    SizechartsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, locales?: Array<string>, SearchSizeChartsRequestBody?: Product202407SearchSizeChartsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202407SearchSizeChartsResponse;
    }>;
}
export declare const ProductV202407ApiOperationNames: {
    readonly ListingSchemasGet: "ListingSchemasGet";
    readonly ProductsCategoryUpgradeTaskPost: "ProductsCategoryUpgradeTaskPost";
    readonly SizechartsSearchPost: "SizechartsSearchPost";
};
export type ProductV202407ApiOperationTypes = {
    ListingSchemasGet: ProductV202407Api['ListingSchemasGet'];
    ProductsCategoryUpgradeTaskPost: ProductV202407Api['ProductsCategoryUpgradeTaskPost'];
    SizechartsSearchPost: ProductV202407Api['SizechartsSearchPost'];
};
//# sourceMappingURL=productV202407Api.d.ts.map