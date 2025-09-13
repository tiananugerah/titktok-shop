import http from 'http';
import { AffiliateSeller202507SellerReviewSampleApplicationsRequestBody } from '../model/affiliateSeller/V202507/SellerReviewSampleApplicationsRequestBody';
import { AffiliateSeller202507SellerReviewSampleApplicationsResponse } from '../model/affiliateSeller/V202507/SellerReviewSampleApplicationsResponse';
import { AffiliateSeller202507SellerSearchSampleApplicationsRequestBody } from '../model/affiliateSeller/V202507/SellerSearchSampleApplicationsRequestBody';
import { AffiliateSeller202507SellerSearchSampleApplicationsResponse } from '../model/affiliateSeller/V202507/SellerSearchSampleApplicationsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateSellerV202507ApiApiKeys {
}
export declare class AffiliateSellerV202507Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateSellerV202507Api";
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
    setApiKey(key: AffiliateSellerV202507ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    SampleApplicationsApplicationIdReviewPost(applicationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, SellerReviewSampleApplicationsRequestBody?: AffiliateSeller202507SellerReviewSampleApplicationsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202507SellerReviewSampleApplicationsResponse;
    }>;
    SampleApplicationsSearchPost(xTtsAccessToken: string, contentType: string, pageToken?: string, pageSize?: number, shopCipher?: string, SellerSearchSampleApplicationsRequestBody?: AffiliateSeller202507SellerSearchSampleApplicationsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202507SellerSearchSampleApplicationsResponse;
    }>;
}
export declare const AffiliateSellerV202507ApiOperationNames: {
    readonly SampleApplicationsApplicationIdReviewPost: "SampleApplicationsApplicationIdReviewPost";
    readonly SampleApplicationsSearchPost: "SampleApplicationsSearchPost";
};
export type AffiliateSellerV202507ApiOperationTypes = {
    SampleApplicationsApplicationIdReviewPost: AffiliateSellerV202507Api['SampleApplicationsApplicationIdReviewPost'];
    SampleApplicationsSearchPost: AffiliateSellerV202507Api['SampleApplicationsSearchPost'];
};
//# sourceMappingURL=affiliateSellerV202507Api.d.ts.map