import http from 'http';
import { AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkRequestBody } from '../model/affiliatePartner/V202505/PartnerGenerateMultiAffiliateCampaignProductLinkRequestBody';
import { AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse } from '../model/affiliatePartner/V202505/PartnerGenerateMultiAffiliateCampaignProductLinkResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliatePartnerV202505ApiApiKeys {
}
export declare class AffiliatePartnerV202505Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliatePartnerV202505Api";
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
    setApiKey(key: AffiliatePartnerV202505ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost(campaignId: string, xTtsAccessToken: string, contentType: string, categoryAssetCipher?: string, PartnerGenerateMultiAffiliateCampaignProductLinkRequestBody?: AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliatePartner202505PartnerGenerateMultiAffiliateCampaignProductLinkResponse;
    }>;
}
export declare const AffiliatePartnerV202505ApiOperationNames: {
    readonly CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost: "CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost";
};
export type AffiliatePartnerV202505ApiOperationTypes = {
    CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost: AffiliatePartnerV202505Api['CampaignsCampaignIdProductsPromotionLinksGenerateBatchPost'];
};
//# sourceMappingURL=affiliatePartnerV202505Api.d.ts.map