import http from 'http';
import { Authorization202312GetWidgetTokenResponse } from '../model/authorization/V202312/GetWidgetTokenResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AuthorizationV202312ApiApiKeys {
}
export declare class AuthorizationV202312Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AuthorizationV202312Api";
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
    setApiKey(key: AuthorizationV202312ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    WidgetTokenGet(xTtsAccessToken: string, contentType: string, shopId?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Authorization202312GetWidgetTokenResponse;
    }>;
}
export declare const AuthorizationV202312ApiOperationNames: {
    readonly WidgetTokenGet: "WidgetTokenGet";
};
export type AuthorizationV202312ApiOperationTypes = {
    WidgetTokenGet: AuthorizationV202312Api['WidgetTokenGet'];
};
//# sourceMappingURL=authorizationV202312Api.d.ts.map