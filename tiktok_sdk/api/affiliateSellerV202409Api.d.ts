import http from 'http';
import { AffiliateSeller202409GetOpenCollaborationSettingsResponse } from '../model/affiliateSeller/V202409/GetOpenCollaborationSettingsResponse';
import { AffiliateSeller202409QueryTargetCollaborationDetailResponse } from '../model/affiliateSeller/V202409/QueryTargetCollaborationDetailResponse';
import { AffiliateSeller202409RemoveOpenCollaborationResponse } from '../model/affiliateSeller/V202409/RemoveOpenCollaborationResponse';
import { AffiliateSeller202409RemoveTargetCollaborationResponse } from '../model/affiliateSeller/V202409/RemoveTargetCollaborationResponse';
import { AffiliateSeller202409SearchOpenCollaborationRequestBody } from '../model/affiliateSeller/V202409/SearchOpenCollaborationRequestBody';
import { AffiliateSeller202409SearchOpenCollaborationResponse } from '../model/affiliateSeller/V202409/SearchOpenCollaborationResponse';
import { AffiliateSeller202409SearchTargetCollaborationsRequestBody } from '../model/affiliateSeller/V202409/SearchTargetCollaborationsRequestBody';
import { AffiliateSeller202409SearchTargetCollaborationsResponse } from '../model/affiliateSeller/V202409/SearchTargetCollaborationsResponse';
import { AffiliateSeller202409SellerReviewSampleApplicationsRequestBody } from '../model/affiliateSeller/V202409/SellerReviewSampleApplicationsRequestBody';
import { AffiliateSeller202409SellerReviewSampleApplicationsResponse } from '../model/affiliateSeller/V202409/SellerReviewSampleApplicationsResponse';
import { AffiliateSeller202409SellerSearchSampleApplicationsFulfillmentsRequestBody } from '../model/affiliateSeller/V202409/SellerSearchSampleApplicationsFulfillmentsRequestBody';
import { AffiliateSeller202409SellerSearchSampleApplicationsFulfillmentsResponse } from '../model/affiliateSeller/V202409/SellerSearchSampleApplicationsFulfillmentsResponse';
import { AffiliateSeller202409SellerSearchSampleApplicationsRequestBody } from '../model/affiliateSeller/V202409/SellerSearchSampleApplicationsRequestBody';
import { AffiliateSeller202409SellerSearchSampleApplicationsResponse } from '../model/affiliateSeller/V202409/SellerSearchSampleApplicationsResponse';
import { AffiliateSeller202409UpdateTargetCollaborationRequestBody } from '../model/affiliateSeller/V202409/UpdateTargetCollaborationRequestBody';
import { AffiliateSeller202409UpdateTargetCollaborationResponse } from '../model/affiliateSeller/V202409/UpdateTargetCollaborationResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateSellerV202409ApiApiKeys {
}
export declare class AffiliateSellerV202409Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateSellerV202409Api";
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
    setApiKey(key: AffiliateSellerV202409ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OpenCollaborationSettingsGet(xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409GetOpenCollaborationSettingsResponse;
    }>;
    OpenCollaborationsProductsProductIdDelete(productId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409RemoveOpenCollaborationResponse;
    }>;
    OpenCollaborationsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, sortOrder?: string, sortField?: string, shopCipher?: string, SearchOpenCollaborationRequestBody?: AffiliateSeller202409SearchOpenCollaborationRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409SearchOpenCollaborationResponse;
    }>;
    SampleApplicationsApplicationIdFulfillmentsSearchPost(applicationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, SellerSearchSampleApplicationsFulfillmentsRequestBody?: AffiliateSeller202409SellerSearchSampleApplicationsFulfillmentsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409SellerSearchSampleApplicationsFulfillmentsResponse;
    }>;
    SampleApplicationsApplicationIdReviewPost(applicationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, SellerReviewSampleApplicationsRequestBody?: AffiliateSeller202409SellerReviewSampleApplicationsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409SellerReviewSampleApplicationsResponse;
    }>;
    SampleApplicationsSearchPost(xTtsAccessToken: string, contentType: string, pageToken?: string, pageSize?: number, shopCipher?: string, SellerSearchSampleApplicationsRequestBody?: AffiliateSeller202409SellerSearchSampleApplicationsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409SellerSearchSampleApplicationsResponse;
    }>;
    TargetCollaborationsSearchPost(xTtsAccessToken: string, contentType: string, pageSize?: number, pageToken?: string, shopCipher?: string, SearchTargetCollaborationsRequestBody?: AffiliateSeller202409SearchTargetCollaborationsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409SearchTargetCollaborationsResponse;
    }>;
    TargetCollaborationsTargetCollaborationIdDelete(targetCollaborationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409RemoveTargetCollaborationResponse;
    }>;
    TargetCollaborationsTargetCollaborationIdGet(targetCollaborationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409QueryTargetCollaborationDetailResponse;
    }>;
    TargetCollaborationsTargetCollaborationIdPut(targetCollaborationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdateTargetCollaborationRequestBody?: AffiliateSeller202409UpdateTargetCollaborationRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202409UpdateTargetCollaborationResponse;
    }>;
}
export declare const AffiliateSellerV202409ApiOperationNames: {
    readonly OpenCollaborationSettingsGet: "OpenCollaborationSettingsGet";
    readonly OpenCollaborationsProductsProductIdDelete: "OpenCollaborationsProductsProductIdDelete";
    readonly OpenCollaborationsSearchPost: "OpenCollaborationsSearchPost";
    readonly SampleApplicationsApplicationIdFulfillmentsSearchPost: "SampleApplicationsApplicationIdFulfillmentsSearchPost";
    readonly SampleApplicationsApplicationIdReviewPost: "SampleApplicationsApplicationIdReviewPost";
    readonly SampleApplicationsSearchPost: "SampleApplicationsSearchPost";
    readonly TargetCollaborationsSearchPost: "TargetCollaborationsSearchPost";
    readonly TargetCollaborationsTargetCollaborationIdDelete: "TargetCollaborationsTargetCollaborationIdDelete";
    readonly TargetCollaborationsTargetCollaborationIdGet: "TargetCollaborationsTargetCollaborationIdGet";
    readonly TargetCollaborationsTargetCollaborationIdPut: "TargetCollaborationsTargetCollaborationIdPut";
};
export type AffiliateSellerV202409ApiOperationTypes = {
    OpenCollaborationSettingsGet: AffiliateSellerV202409Api['OpenCollaborationSettingsGet'];
    OpenCollaborationsProductsProductIdDelete: AffiliateSellerV202409Api['OpenCollaborationsProductsProductIdDelete'];
    OpenCollaborationsSearchPost: AffiliateSellerV202409Api['OpenCollaborationsSearchPost'];
    SampleApplicationsApplicationIdFulfillmentsSearchPost: AffiliateSellerV202409Api['SampleApplicationsApplicationIdFulfillmentsSearchPost'];
    SampleApplicationsApplicationIdReviewPost: AffiliateSellerV202409Api['SampleApplicationsApplicationIdReviewPost'];
    SampleApplicationsSearchPost: AffiliateSellerV202409Api['SampleApplicationsSearchPost'];
    TargetCollaborationsSearchPost: AffiliateSellerV202409Api['TargetCollaborationsSearchPost'];
    TargetCollaborationsTargetCollaborationIdDelete: AffiliateSellerV202409Api['TargetCollaborationsTargetCollaborationIdDelete'];
    TargetCollaborationsTargetCollaborationIdGet: AffiliateSellerV202409Api['TargetCollaborationsTargetCollaborationIdGet'];
    TargetCollaborationsTargetCollaborationIdPut: AffiliateSellerV202409Api['TargetCollaborationsTargetCollaborationIdPut'];
};
//# sourceMappingURL=affiliateSellerV202409Api.d.ts.map