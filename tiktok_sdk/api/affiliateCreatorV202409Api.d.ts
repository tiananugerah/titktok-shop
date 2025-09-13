import http from 'http';
import { AffiliateCreator202409CreatorSearchSampleApplicationFulfillmentsRequestBody } from '../model/affiliateCreator/V202409/CreatorSearchSampleApplicationFulfillmentsRequestBody';
import { AffiliateCreator202409CreatorSearchSampleApplicationFulfillmentsResponse } from '../model/affiliateCreator/V202409/CreatorSearchSampleApplicationFulfillmentsResponse';
import { AffiliateCreator202409RemoveShowcaseProductsRequestBody } from '../model/affiliateCreator/V202409/RemoveShowcaseProductsRequestBody';
import { AffiliateCreator202409RemoveShowcaseProductsResponse } from '../model/affiliateCreator/V202409/RemoveShowcaseProductsResponse';
import { AffiliateCreator202409TopShowcaseProductsRequestBody } from '../model/affiliateCreator/V202409/TopShowcaseProductsRequestBody';
import { AffiliateCreator202409TopShowcaseProductsResponse } from '../model/affiliateCreator/V202409/TopShowcaseProductsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateCreatorV202409ApiApiKeys {
}
export declare class AffiliateCreatorV202409Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateCreatorV202409Api";
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
    setApiKey(key: AffiliateCreatorV202409ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    SampleApplicationsFulfillmentsSearchPost(xTtsAccessToken: string, contentType: string, sortOrder?: string, sortField?: string, CreatorSearchSampleApplicationFulfillmentsRequestBody?: AffiliateCreator202409CreatorSearchSampleApplicationFulfillmentsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202409CreatorSearchSampleApplicationFulfillmentsResponse;
    }>;
    ShowcasesProductsDelete(xTtsAccessToken: string, contentType: string, RemoveShowcaseProductsRequestBody?: AffiliateCreator202409RemoveShowcaseProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202409RemoveShowcaseProductsResponse;
    }>;
    ShowcasesProductsTopPost(xTtsAccessToken: string, contentType: string, TopShowcaseProductsRequestBody?: AffiliateCreator202409TopShowcaseProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202409TopShowcaseProductsResponse;
    }>;
}
export declare const AffiliateCreatorV202409ApiOperationNames: {
    readonly SampleApplicationsFulfillmentsSearchPost: "SampleApplicationsFulfillmentsSearchPost";
    readonly ShowcasesProductsDelete: "ShowcasesProductsDelete";
    readonly ShowcasesProductsTopPost: "ShowcasesProductsTopPost";
};
export type AffiliateCreatorV202409ApiOperationTypes = {
    SampleApplicationsFulfillmentsSearchPost: AffiliateCreatorV202409Api['SampleApplicationsFulfillmentsSearchPost'];
    ShowcasesProductsDelete: AffiliateCreatorV202409Api['ShowcasesProductsDelete'];
    ShowcasesProductsTopPost: AffiliateCreatorV202409Api['ShowcasesProductsTopPost'];
};
//# sourceMappingURL=affiliateCreatorV202409Api.d.ts.map