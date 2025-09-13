import http from 'http';
import { AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse } from '../model/affiliatePartner/V202501/GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse';
import { AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse } from '../model/affiliatePartner/V202501/GetAffiliateCampaignCreatorFulfillmentStatusListResponse';
import { AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse } from '../model/affiliatePartner/V202501/GetAffiliateCampaignCreatorProductContentStatisticsResponse';
import { AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse } from '../model/affiliatePartner/V202501/GetAffiliateCampaignCreatorProductSampleStatusResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliatePartnerV202501ApiApiKeys {
}
export declare class AffiliatePartnerV202501Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliatePartnerV202501Api";
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
    setApiKey(key: AffiliatePartnerV202501ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    CampaignsCampaignIdProductsPerformanceGet(campaignId: string, xTtsAccessToken: string, contentType: string, pageSize?: number, pageToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponse;
    }>;
    CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet(campaignId: string, productId: string, creatorTempId: string, affiliateProductId: string, xTtsAccessToken: string, contentType2: string, contentType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202501GetAffiliateCampaignCreatorProductContentStatisticsResponse;
    }>;
    CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet(campaignId: string, productId: string, creatorTempId: string, xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponse;
    }>;
    CampaignsCampaignIdProductsProductIdPerformanceGet(campaignId: string, productId: string, xTtsAccessToken: string, contentType: string, pageSize?: number, pageToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusInfoResponse;
    }>;
}
export declare const AffiliatePartnerV202501ApiOperationNames: {
    readonly CampaignsCampaignIdProductsPerformanceGet: "CampaignsCampaignIdProductsPerformanceGet";
    readonly CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet: "CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet";
    readonly CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet: "CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet";
    readonly CampaignsCampaignIdProductsProductIdPerformanceGet: "CampaignsCampaignIdProductsProductIdPerformanceGet";
};
export type AffiliatePartnerV202501ApiOperationTypes = {
    CampaignsCampaignIdProductsPerformanceGet: AffiliatePartnerV202501Api['CampaignsCampaignIdProductsPerformanceGet'];
    CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet: AffiliatePartnerV202501Api['CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsGet'];
    CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet: AffiliatePartnerV202501Api['CampaignsCampaignIdProductsProductIdCreatorCreatorTempIdContentStatisticsSampleStatusGet'];
    CampaignsCampaignIdProductsProductIdPerformanceGet: AffiliatePartnerV202501Api['CampaignsCampaignIdProductsProductIdPerformanceGet'];
};
//# sourceMappingURL=affiliatePartnerV202501Api.d.ts.map