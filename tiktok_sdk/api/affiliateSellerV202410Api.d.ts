import http from 'http';
import { AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody } from '../model/affiliateSeller/V202410/EditOpenCollaborationSampleRuleRequestBody';
import { AffiliateSeller202410EditOpenCollaborationSampleRuleResponse } from '../model/affiliateSeller/V202410/EditOpenCollaborationSampleRuleResponse';
import { AffiliateSeller202410GetOpenCollaborationSampleRulesResponse } from '../model/affiliateSeller/V202410/GetOpenCollaborationSampleRulesResponse';
import { AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody } from '../model/affiliateSeller/V202410/SearchSellerAffiliateOrdersRequestBody';
import { AffiliateSeller202410SearchSellerAffiliateOrdersResponse } from '../model/affiliateSeller/V202410/SearchSellerAffiliateOrdersResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateSellerV202410ApiApiKeys {
}
export declare class AffiliateSellerV202410Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateSellerV202410Api";
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
    setApiKey(key: AffiliateSellerV202410ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OpenCollaborationsSampleRulesGet(productIds: Array<string>, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202410GetOpenCollaborationSampleRulesResponse;
    }>;
    OpenCollaborationsSampleRulesPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, EditOpenCollaborationSampleRuleRequestBody?: AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202410EditOpenCollaborationSampleRuleResponse;
    }>;
    OrdersSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, shopCipher?: string, SearchSellerAffiliateOrdersRequestBody?: AffiliateSeller202410SearchSellerAffiliateOrdersRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202410SearchSellerAffiliateOrdersResponse;
    }>;
}
export declare const AffiliateSellerV202410ApiOperationNames: {
    readonly OpenCollaborationsSampleRulesGet: "OpenCollaborationsSampleRulesGet";
    readonly OpenCollaborationsSampleRulesPost: "OpenCollaborationsSampleRulesPost";
    readonly OrdersSearchPost: "OrdersSearchPost";
};
export type AffiliateSellerV202410ApiOperationTypes = {
    OpenCollaborationsSampleRulesGet: AffiliateSellerV202410Api['OpenCollaborationsSampleRulesGet'];
    OpenCollaborationsSampleRulesPost: AffiliateSellerV202410Api['OpenCollaborationsSampleRulesPost'];
    OrdersSearchPost: AffiliateSellerV202410Api['OrdersSearchPost'];
};
//# sourceMappingURL=affiliateSellerV202410Api.d.ts.map