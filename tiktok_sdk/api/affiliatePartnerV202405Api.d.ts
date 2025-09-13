import http from 'http';
import { AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody } from '../model/affiliatePartner/V202405/CreateAffiliatePartnerCampaignRequestBody';
import { AffiliatePartner202405CreateAffiliatePartnerCampaignResponse } from '../model/affiliatePartner/V202405/CreateAffiliatePartnerCampaignResponse';
import { AffiliatePartner202405EditAffiliatePartnerCampaignRequestBody } from '../model/affiliatePartner/V202405/EditAffiliatePartnerCampaignRequestBody';
import { AffiliatePartner202405EditAffiliatePartnerCampaignResponse } from '../model/affiliatePartner/V202405/EditAffiliatePartnerCampaignResponse';
import { AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkRequestBody } from '../model/affiliatePartner/V202405/GenerateAffiliatePartnerCampaignProductLinkRequestBody';
import { AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse } from '../model/affiliatePartner/V202405/GenerateAffiliatePartnerCampaignProductLinkResponse';
import { AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse } from '../model/affiliatePartner/V202405/GetAffiliatePartnerCampaignDetailResponse';
import { AffiliatePartner202405GetAffiliatePartnerCampaignListResponse } from '../model/affiliatePartner/V202405/GetAffiliatePartnerCampaignListResponse';
import { AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse } from '../model/affiliatePartner/V202405/GetAffiliatePartnerCampaignProductListResponse';
import { AffiliatePartner202405PublishAffiliatePartnerCampaignResponse } from '../model/affiliatePartner/V202405/PublishAffiliatePartnerCampaignResponse';
import { AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody } from '../model/affiliatePartner/V202405/ReviewAffiliatePartnerCampaignProductRequestBody';
import { AffiliatePartner202405ReviewAffiliatePartnerCampaignProductResponse } from '../model/affiliatePartner/V202405/ReviewAffiliatePartnerCampaignProductResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliatePartnerV202405ApiApiKeys {
}
export declare class AffiliatePartnerV202405Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliatePartnerV202405Api";
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
    setApiKey(key: AffiliatePartnerV202405ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    CampaignsCampaignIdGet(campaignId: string, categoryAssetCipher: string, xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202405GetAffiliatePartnerCampaignDetailResponse;
    }>;
    CampaignsCampaignIdPartialEditPost(campaignId: string, categoryAssetCipher: string, xTtsAccessToken: string, contentType: string, EditAffiliatePartnerCampaignRequestBody?: AffiliatePartner202405EditAffiliatePartnerCampaignRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202405EditAffiliatePartnerCampaignResponse;
    }>;
    CampaignsCampaignIdProductsGet(campaignId: string, categoryAssetCipher: string, pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, reviewStatus?: string, productName?: string, productId?: string, shopName?: string, categoryId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponse;
    }>;
    CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost(campaignId: string, productId: string, categoryAssetCipher: string, xTtsAccessToken: string, contentType: string, GenerateAffiliatePartnerCampaignProductLinkRequestBody?: AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202405GenerateAffiliatePartnerCampaignProductLinkResponse;
    }>;
    CampaignsCampaignIdProductsProductIdReviewPost(campaignId: string, productId: string, categoryAssetCipher: string, xTtsAccessToken: string, contentType: string, ReviewAffiliatePartnerCampaignProductRequestBody?: AffiliatePartner202405ReviewAffiliatePartnerCampaignProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202405ReviewAffiliatePartnerCampaignProductResponse;
    }>;
    CampaignsCampaignIdPublishPost(campaignId: string, categoryAssetCipher: string, xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202405PublishAffiliatePartnerCampaignResponse;
    }>;
    CampaignsGet(categoryAssetCipher: string, pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, status?: string, type?: string, queryTypeFilter?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202405GetAffiliatePartnerCampaignListResponse;
    }>;
    CampaignsPost(categoryAssetCipher: string, xTtsAccessToken: string, contentType: string, CreateAffiliatePartnerCampaignRequestBody?: AffiliatePartner202405CreateAffiliatePartnerCampaignRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202405CreateAffiliatePartnerCampaignResponse;
    }>;
}
export declare const AffiliatePartnerV202405ApiOperationNames: {
    readonly CampaignsCampaignIdGet: "CampaignsCampaignIdGet";
    readonly CampaignsCampaignIdPartialEditPost: "CampaignsCampaignIdPartialEditPost";
    readonly CampaignsCampaignIdProductsGet: "CampaignsCampaignIdProductsGet";
    readonly CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost: "CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost";
    readonly CampaignsCampaignIdProductsProductIdReviewPost: "CampaignsCampaignIdProductsProductIdReviewPost";
    readonly CampaignsCampaignIdPublishPost: "CampaignsCampaignIdPublishPost";
    readonly CampaignsGet: "CampaignsGet";
    readonly CampaignsPost: "CampaignsPost";
};
export type AffiliatePartnerV202405ApiOperationTypes = {
    CampaignsCampaignIdGet: AffiliatePartnerV202405Api['CampaignsCampaignIdGet'];
    CampaignsCampaignIdPartialEditPost: AffiliatePartnerV202405Api['CampaignsCampaignIdPartialEditPost'];
    CampaignsCampaignIdProductsGet: AffiliatePartnerV202405Api['CampaignsCampaignIdProductsGet'];
    CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost: AffiliatePartnerV202405Api['CampaignsCampaignIdProductsProductIdPromotionLinkGeneratePost'];
    CampaignsCampaignIdProductsProductIdReviewPost: AffiliatePartnerV202405Api['CampaignsCampaignIdProductsProductIdReviewPost'];
    CampaignsCampaignIdPublishPost: AffiliatePartnerV202405Api['CampaignsCampaignIdPublishPost'];
    CampaignsGet: AffiliatePartnerV202405Api['CampaignsGet'];
    CampaignsPost: AffiliatePartnerV202405Api['CampaignsPost'];
};
//# sourceMappingURL=affiliatePartnerV202405Api.d.ts.map