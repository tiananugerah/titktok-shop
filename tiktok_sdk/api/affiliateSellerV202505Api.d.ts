import http from 'http';
import { AffiliateSeller202505GetConversationListRequestBody } from '../model/affiliateSeller/V202505/GetConversationListRequestBody';
import { AffiliateSeller202505GetConversationListResponse } from '../model/affiliateSeller/V202505/GetConversationListResponse';
import { AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse } from '../model/affiliateSeller/V202505/GetMarketplaceCreatorPerformanceResponse';
import { AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody } from '../model/affiliateSeller/V202505/SellerSearchCreatoronMarketplaceRequestBody';
import { AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse } from '../model/affiliateSeller/V202505/SellerSearchCreatoronMarketplaceResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateSellerV202505ApiApiKeys {
}
export declare class AffiliateSellerV202505Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateSellerV202505Api";
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
    setApiKey(key: AffiliateSellerV202505ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ConversationsGet(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, onlyNeedConversationId?: boolean, shopCipher?: string, GetConversationListRequestBody?: AffiliateSeller202505GetConversationListRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202505GetConversationListResponse;
    }>;
    MarketplaceCreatorsCreatorUserIdGet(creatorUserId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse;
    }>;
    MarketplaceCreatorsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, shopCipher?: string, SellerSearchCreatoronMarketplaceRequestBody?: AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse;
    }>;
}
export declare const AffiliateSellerV202505ApiOperationNames: {
    readonly ConversationsGet: "ConversationsGet";
    readonly MarketplaceCreatorsCreatorUserIdGet: "MarketplaceCreatorsCreatorUserIdGet";
    readonly MarketplaceCreatorsSearchPost: "MarketplaceCreatorsSearchPost";
};
export type AffiliateSellerV202505ApiOperationTypes = {
    ConversationsGet: AffiliateSellerV202505Api['ConversationsGet'];
    MarketplaceCreatorsCreatorUserIdGet: AffiliateSellerV202505Api['MarketplaceCreatorsCreatorUserIdGet'];
    MarketplaceCreatorsSearchPost: AffiliateSellerV202505Api['MarketplaceCreatorsSearchPost'];
};
//# sourceMappingURL=affiliateSellerV202505Api.d.ts.map