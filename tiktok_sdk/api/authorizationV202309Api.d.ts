import http from 'http';
import { Authorization202309GetAuthorizedShopsResponse } from '../model/authorization/V202309/GetAuthorizedShopsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AuthorizationV202309ApiApiKeys {
}
export declare class AuthorizationV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AuthorizationV202309Api";
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
    setApiKey(key: AuthorizationV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ShopsGet(xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Authorization202309GetAuthorizedShopsResponse;
    }>;
}
export declare const AuthorizationV202309ApiOperationNames: {
    readonly ShopsGet: "ShopsGet";
};
export type AuthorizationV202309ApiOperationTypes = {
    ShopsGet: AuthorizationV202309Api['ShopsGet'];
};
//# sourceMappingURL=authorizationV202309Api.d.ts.map