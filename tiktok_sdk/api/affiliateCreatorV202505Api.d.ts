import http from 'http';
import { AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody } from '../model/affiliateCreator/V202505/CreatorGenerateGeneralLinkRequestBody';
import { AffiliateCreator202505CreatorGenerateGeneralLinkResponse } from '../model/affiliateCreator/V202505/CreatorGenerateGeneralLinkResponse';
import { AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody } from '../model/affiliateCreator/V202505/CreatorSearchAffiliateTraceOrdersRequestBody';
import { AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse } from '../model/affiliateCreator/V202505/CreatorSearchAffiliateTraceOrdersResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateCreatorV202505ApiApiKeys {
}
export declare class AffiliateCreatorV202505Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateCreatorV202505Api";
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
    setApiKey(key: AffiliateCreatorV202505ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    AffiliateSharingLinksGeneralPublishersGenerateBatchPost(xTtsAccessToken: string, contentType: string, CreatorGenerateGeneralLinkRequestBody?: AffiliateCreator202505CreatorGenerateGeneralLinkRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202505CreatorGenerateGeneralLinkResponse;
    }>;
    OrdersTraceSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, CreatorSearchAffiliateTraceOrdersRequestBody?: AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponse;
    }>;
}
export declare const AffiliateCreatorV202505ApiOperationNames: {
    readonly AffiliateSharingLinksGeneralPublishersGenerateBatchPost: "AffiliateSharingLinksGeneralPublishersGenerateBatchPost";
    readonly OrdersTraceSearchPost: "OrdersTraceSearchPost";
};
export type AffiliateCreatorV202505ApiOperationTypes = {
    AffiliateSharingLinksGeneralPublishersGenerateBatchPost: AffiliateCreatorV202505Api['AffiliateSharingLinksGeneralPublishersGenerateBatchPost'];
    OrdersTraceSearchPost: AffiliateCreatorV202505Api['OrdersTraceSearchPost'];
};
//# sourceMappingURL=affiliateCreatorV202505Api.d.ts.map