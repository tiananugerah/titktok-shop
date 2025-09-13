import http from 'http';
import { AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse } from '../model/affiliateSeller/V202406/GetMarketplaceCreatorPerformanceResponse';
import { AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody } from '../model/affiliateSeller/V202406/SellerSearchCreatoronMarketplaceRequestBody';
import { AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse } from '../model/affiliateSeller/V202406/SellerSearchCreatoronMarketplaceResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateSellerV202406ApiApiKeys {
}
export declare class AffiliateSellerV202406Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateSellerV202406Api";
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
    setApiKey(key: AffiliateSellerV202406ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    MarketplaceCreatorsCreatorUserIdGet(creatorUserId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse;
    }>;
    MarketplaceCreatorsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, shopCipher?: string, SellerSearchCreatoronMarketplaceRequestBody?: AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse;
    }>;
}
export declare const AffiliateSellerV202406ApiOperationNames: {
    readonly MarketplaceCreatorsCreatorUserIdGet: "MarketplaceCreatorsCreatorUserIdGet";
    readonly MarketplaceCreatorsSearchPost: "MarketplaceCreatorsSearchPost";
};
export type AffiliateSellerV202406ApiOperationTypes = {
    MarketplaceCreatorsCreatorUserIdGet: AffiliateSellerV202406Api['MarketplaceCreatorsCreatorUserIdGet'];
    MarketplaceCreatorsSearchPost: AffiliateSellerV202406Api['MarketplaceCreatorsSearchPost'];
};
//# sourceMappingURL=affiliateSellerV202406Api.d.ts.map