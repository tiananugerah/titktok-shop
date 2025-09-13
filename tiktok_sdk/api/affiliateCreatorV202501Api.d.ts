import http from 'http';
import { AffiliateCreator202501CreatorSelectAffiliateProductRequestBody } from '../model/affiliateCreator/V202501/CreatorSelectAffiliateProductRequestBody';
import { AffiliateCreator202501CreatorSelectAffiliateProductResponse } from '../model/affiliateCreator/V202501/CreatorSelectAffiliateProductResponse';
import { AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody } from '../model/affiliateCreator/V202501/GenerateAffiliateSharingLinkRequestBody';
import { AffiliateCreator202501GenerateAffiliateSharingLinkResponse } from '../model/affiliateCreator/V202501/GenerateAffiliateSharingLinkResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateCreatorV202501ApiApiKeys {
}
export declare class AffiliateCreatorV202501Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateCreatorV202501Api";
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
    setApiKey(key: AffiliateCreatorV202501ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    AffiliateSharingLinksGenerateBatchPost(xTtsAccessToken: string, contentType: string, GenerateAffiliateSharingLinkRequestBody?: AffiliateCreator202501GenerateAffiliateSharingLinkRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202501GenerateAffiliateSharingLinkResponse;
    }>;
    SelectionProductsSearchPost(xTtsAccessToken: string, contentType: string, pageToken?: string, pageSize?: number, CreatorSelectAffiliateProductRequestBody?: AffiliateCreator202501CreatorSelectAffiliateProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202501CreatorSelectAffiliateProductResponse;
    }>;
}
export declare const AffiliateCreatorV202501ApiOperationNames: {
    readonly AffiliateSharingLinksGenerateBatchPost: "AffiliateSharingLinksGenerateBatchPost";
    readonly SelectionProductsSearchPost: "SelectionProductsSearchPost";
};
export type AffiliateCreatorV202501ApiOperationTypes = {
    AffiliateSharingLinksGenerateBatchPost: AffiliateCreatorV202501Api['AffiliateSharingLinksGenerateBatchPost'];
    SelectionProductsSearchPost: AffiliateCreatorV202501Api['SelectionProductsSearchPost'];
};
//# sourceMappingURL=affiliateCreatorV202501Api.d.ts.map