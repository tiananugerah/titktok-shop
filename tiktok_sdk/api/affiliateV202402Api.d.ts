import http from 'http';
import { Affiliate202402CheckAnchorPrerequisitesRequestBody } from '../model/affiliate/V202402/CheckAnchorPrerequisitesRequestBody';
import { Affiliate202402CheckAnchorPrerequisitesResponse } from '../model/affiliate/V202402/CheckAnchorPrerequisitesResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateV202402ApiApiKeys {
}
export declare class AffiliateV202402Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateV202402Api";
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
    setApiKey(key: AffiliateV202402ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    AnchorsPrerequisiteCheckPost(xTtsAccessToken: string, contentType: string, CheckAnchorPrerequisitesRequestBody?: Affiliate202402CheckAnchorPrerequisitesRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202402CheckAnchorPrerequisitesResponse;
    }>;
}
export declare const AffiliateV202402ApiOperationNames: {
    readonly AnchorsPrerequisiteCheckPost: "AnchorsPrerequisiteCheckPost";
};
export type AffiliateV202402ApiOperationTypes = {
    AnchorsPrerequisiteCheckPost: AffiliateV202402Api['AnchorsPrerequisiteCheckPost'];
};
//# sourceMappingURL=affiliateV202402Api.d.ts.map