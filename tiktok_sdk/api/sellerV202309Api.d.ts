import http from 'http';
import { Seller202309GetActiveShopsResponse } from '../model/seller/V202309/GetActiveShopsResponse';
import { Seller202309GetSellerPermissionsResponse } from '../model/seller/V202309/GetSellerPermissionsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum SellerV202309ApiApiKeys {
}
export declare class SellerV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "SellerV202309Api";
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
    setApiKey(key: SellerV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    PermissionsGet(xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Seller202309GetSellerPermissionsResponse;
    }>;
    ShopsGet(xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Seller202309GetActiveShopsResponse;
    }>;
}
export declare const SellerV202309ApiOperationNames: {
    readonly PermissionsGet: "PermissionsGet";
    readonly ShopsGet: "ShopsGet";
};
export type SellerV202309ApiOperationTypes = {
    PermissionsGet: SellerV202309Api['PermissionsGet'];
    ShopsGet: SellerV202309Api['ShopsGet'];
};
//# sourceMappingURL=sellerV202309Api.d.ts.map