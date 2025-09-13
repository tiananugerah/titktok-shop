import http from 'http';
import { Authorization202405GetAuthorizedCategoryAssetsResponse } from '../model/authorization/V202405/GetAuthorizedCategoryAssetsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AuthorizationV202405ApiApiKeys {
}
export declare class AuthorizationV202405Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AuthorizationV202405Api";
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
    setApiKey(key: AuthorizationV202405ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    CategoryAssetsGet(xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Authorization202405GetAuthorizedCategoryAssetsResponse;
    }>;
}
export declare const AuthorizationV202405ApiOperationNames: {
    readonly CategoryAssetsGet: "CategoryAssetsGet";
};
export type AuthorizationV202405ApiOperationTypes = {
    CategoryAssetsGet: AuthorizationV202405Api['CategoryAssetsGet'];
};
//# sourceMappingURL=authorizationV202405Api.d.ts.map