import http from 'http';
import { AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody } from '../model/affiliateCreator/V202407/GenerateAffiliateSharingLinkRequestBody';
import { AffiliateCreator202407GenerateAffiliateSharingLinkResponse } from '../model/affiliateCreator/V202407/GenerateAffiliateSharingLinkResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateCreatorV202407ApiApiKeys {
}
export declare class AffiliateCreatorV202407Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateCreatorV202407Api";
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
    setApiKey(key: AffiliateCreatorV202407ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    AffiliateSharingLinksGenerateBatchPost(xTtsAccessToken: string, contentType: string, GenerateAffiliateSharingLinkRequestBody?: AffiliateCreator202407GenerateAffiliateSharingLinkRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202407GenerateAffiliateSharingLinkResponse;
    }>;
}
export declare const AffiliateCreatorV202407ApiOperationNames: {
    readonly AffiliateSharingLinksGenerateBatchPost: "AffiliateSharingLinksGenerateBatchPost";
};
export type AffiliateCreatorV202407ApiOperationTypes = {
    AffiliateSharingLinksGenerateBatchPost: AffiliateCreatorV202407Api['AffiliateSharingLinksGenerateBatchPost'];
};
//# sourceMappingURL=affiliateCreatorV202407Api.d.ts.map