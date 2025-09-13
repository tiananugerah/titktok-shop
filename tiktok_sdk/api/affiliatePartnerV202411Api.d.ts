import http from 'http';
import { AffiliatePartner202411SearchTapAffiliateOrdersRequestBody } from '../model/affiliatePartner/V202411/SearchTapAffiliateOrdersRequestBody';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponse } from '../model/affiliatePartner/V202411/SearchTapAffiliateOrdersResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliatePartnerV202411ApiApiKeys {
}
export declare class AffiliatePartnerV202411Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliatePartnerV202411Api";
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
    setApiKey(key: AffiliatePartnerV202411ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersSearchPost(pageSize: number, categoryAssetCipher: string, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchTapAffiliateOrdersRequestBody?: AffiliatePartner202411SearchTapAffiliateOrdersRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202411SearchTapAffiliateOrdersResponse;
    }>;
}
export declare const AffiliatePartnerV202411ApiOperationNames: {
    readonly OrdersSearchPost: "OrdersSearchPost";
};
export type AffiliatePartnerV202411ApiOperationTypes = {
    OrdersSearchPost: AffiliatePartnerV202411Api['OrdersSearchPost'];
};
//# sourceMappingURL=affiliatePartnerV202411Api.d.ts.map