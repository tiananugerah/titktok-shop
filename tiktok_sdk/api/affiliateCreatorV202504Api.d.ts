import http from 'http';
import { AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody } from '../model/affiliateCreator/V202504/CreatorGeneratePublisherLinkRequestBody';
import { AffiliateCreator202504CreatorGeneratePublisherLinkResponse } from '../model/affiliateCreator/V202504/CreatorGeneratePublisherLinkResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateCreatorV202504ApiApiKeys {
}
export declare class AffiliateCreatorV202504Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateCreatorV202504Api";
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
    setApiKey(key: AffiliateCreatorV202504ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost(publisherId: string, xTtsAccessToken: string, contentType: string, CreatorGeneratePublisherLinkRequestBody?: AffiliateCreator202504CreatorGeneratePublisherLinkRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202504CreatorGeneratePublisherLinkResponse;
    }>;
}
export declare const AffiliateCreatorV202504ApiOperationNames: {
    readonly AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost: "AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost";
};
export type AffiliateCreatorV202504ApiOperationTypes = {
    AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost: AffiliateCreatorV202504Api['AffiliateSharingLinksPublisherPublisherIdGenerateBatchPost'];
};
//# sourceMappingURL=affiliateCreatorV202504Api.d.ts.map