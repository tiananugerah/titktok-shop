import http from 'http';
import { Affiliate202403CheckAnchorContentRequestBody } from '../model/affiliate/V202403/CheckAnchorContentRequestBody';
import { Affiliate202403CheckAnchorContentResponse } from '../model/affiliate/V202403/CheckAnchorContentResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateV202403ApiApiKeys {
}
export declare class AffiliateV202403Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateV202403Api";
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
    setApiKey(key: AffiliateV202403ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    AnchorsContentCheckPost(xTtsAccessToken: string, contentType: string, CheckAnchorContentRequestBody?: Affiliate202403CheckAnchorContentRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202403CheckAnchorContentResponse;
    }>;
}
export declare const AffiliateV202403ApiOperationNames: {
    readonly AnchorsContentCheckPost: "AnchorsContentCheckPost";
};
export type AffiliateV202403ApiOperationTypes = {
    AnchorsContentCheckPost: AffiliateV202403Api['AnchorsContentCheckPost'];
};
//# sourceMappingURL=affiliateV202403Api.d.ts.map