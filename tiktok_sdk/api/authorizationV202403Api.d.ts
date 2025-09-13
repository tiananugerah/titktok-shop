import http from 'http';
import { Authorization202403DeauthorizeShopResponse } from '../model/authorization/V202403/DeauthorizeShopResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AuthorizationV202403ApiApiKeys {
}
export declare class AuthorizationV202403Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AuthorizationV202403Api";
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
    setApiKey(key: AuthorizationV202403ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ShopsDelete(shopCipher: string, xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Authorization202403DeauthorizeShopResponse;
    }>;
}
export declare const AuthorizationV202403ApiOperationNames: {
    readonly ShopsDelete: "ShopsDelete";
};
export type AuthorizationV202403ApiOperationTypes = {
    ShopsDelete: AuthorizationV202403Api['ShopsDelete'];
};
//# sourceMappingURL=authorizationV202403Api.d.ts.map