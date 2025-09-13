import http from 'http';
import { Authorization202401GetWidgetTokenResponse } from '../model/authorization/V202401/GetWidgetTokenResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AuthorizationV202401ApiApiKeys {
}
export declare class AuthorizationV202401Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AuthorizationV202401Api";
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
    setApiKey(key: AuthorizationV202401ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    WidgetTokenGet(xTtsAccessToken: string, contentType: string, shopId?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Authorization202401GetWidgetTokenResponse;
    }>;
}
export declare const AuthorizationV202401ApiOperationNames: {
    readonly WidgetTokenGet: "WidgetTokenGet";
};
export type AuthorizationV202401ApiOperationTypes = {
    WidgetTokenGet: AuthorizationV202401Api['WidgetTokenGet'];
};
//# sourceMappingURL=authorizationV202401Api.d.ts.map