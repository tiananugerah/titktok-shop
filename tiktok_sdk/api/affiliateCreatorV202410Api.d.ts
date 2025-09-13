import http from 'http';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersRequestBody } from '../model/affiliateCreator/V202410/SearchCreatorAffiliateOrdersRequestBody';
import { AffiliateCreator202410SearchCreatorAffiliateOrdersResponse } from '../model/affiliateCreator/V202410/SearchCreatorAffiliateOrdersResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateCreatorV202410ApiApiKeys {
}
export declare class AffiliateCreatorV202410Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateCreatorV202410Api";
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
    setApiKey(key: AffiliateCreatorV202410ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchCreatorAffiliateOrdersRequestBody?: AffiliateCreator202410SearchCreatorAffiliateOrdersRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202410SearchCreatorAffiliateOrdersResponse;
    }>;
}
export declare const AffiliateCreatorV202410ApiOperationNames: {
    readonly OrdersSearchPost: "OrdersSearchPost";
};
export type AffiliateCreatorV202410ApiOperationTypes = {
    OrdersSearchPost: AffiliateCreatorV202410Api['OrdersSearchPost'];
};
//# sourceMappingURL=affiliateCreatorV202410Api.d.ts.map