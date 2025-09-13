import http from 'http';
import { AffiliateCreator202412GetCreatorApplicableSampleLabelResponse } from '../model/affiliateCreator/V202412/GetCreatorApplicableSampleLabelResponse';
import { AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody } from '../model/affiliateCreator/V202412/GetCreatorSampleApplicationDetailRequestBody';
import { AffiliateCreator202412GetCreatorSampleApplicationDetailResponse } from '../model/affiliateCreator/V202412/GetCreatorSampleApplicationDetailResponse';
import { AffiliateCreator202412SearchCreatorSampleApplicationsRequestBody } from '../model/affiliateCreator/V202412/SearchCreatorSampleApplicationsRequestBody';
import { AffiliateCreator202412SearchCreatorSampleApplicationsResponse } from '../model/affiliateCreator/V202412/SearchCreatorSampleApplicationsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateCreatorV202412ApiApiKeys {
}
export declare class AffiliateCreatorV202412Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateCreatorV202412Api";
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
    setApiKey(key: AffiliateCreatorV202412ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    SampleApplicationsSearchPost(xTtsAccessToken: string, contentType: string, pageToken?: string, pageSize?: number, SearchCreatorSampleApplicationsRequestBody?: AffiliateCreator202412SearchCreatorSampleApplicationsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202412SearchCreatorSampleApplicationsResponse;
    }>;
    SampleApplicationsSingleQueryPost(xTtsAccessToken: string, contentType: string, GetCreatorSampleApplicationDetailRequestBody?: AffiliateCreator202412GetCreatorSampleApplicationDetailRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202412GetCreatorSampleApplicationDetailResponse;
    }>;
    SamplesLabelsGet(productId: string, xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202412GetCreatorApplicableSampleLabelResponse;
    }>;
}
export declare const AffiliateCreatorV202412ApiOperationNames: {
    readonly SampleApplicationsSearchPost: "SampleApplicationsSearchPost";
    readonly SampleApplicationsSingleQueryPost: "SampleApplicationsSingleQueryPost";
    readonly SamplesLabelsGet: "SamplesLabelsGet";
};
export type AffiliateCreatorV202412ApiOperationTypes = {
    SampleApplicationsSearchPost: AffiliateCreatorV202412Api['SampleApplicationsSearchPost'];
    SampleApplicationsSingleQueryPost: AffiliateCreatorV202412Api['SampleApplicationsSingleQueryPost'];
    SamplesLabelsGet: AffiliateCreatorV202412Api['SamplesLabelsGet'];
};
//# sourceMappingURL=affiliateCreatorV202412Api.d.ts.map