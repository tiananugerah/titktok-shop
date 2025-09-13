import http from 'http';
import { AffiliateCreator202405AddShowcaseProductsRequestBody } from '../model/affiliateCreator/V202405/AddShowcaseProductsRequestBody';
import { AffiliateCreator202405AddShowcaseProductsResponse } from '../model/affiliateCreator/V202405/AddShowcaseProductsResponse';
import { AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody } from '../model/affiliateCreator/V202405/CreatorSearchOpenCollaborationProductRequestBody';
import { AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse } from '../model/affiliateCreator/V202405/CreatorSearchOpenCollaborationProductResponse';
import { AffiliateCreator202405GetCreatorProfileResponse } from '../model/affiliateCreator/V202405/GetCreatorProfileResponse';
import { AffiliateCreator202405GetShowcaseProductsResponse } from '../model/affiliateCreator/V202405/GetShowcaseProductsResponse';
import { AffiliateCreator202405SearchCreatorAffiliateOrdersResponse } from '../model/affiliateCreator/V202405/SearchCreatorAffiliateOrdersResponse';
import { AffiliateCreator202405SearchCreatorTargetCollaborationsRequestBody } from '../model/affiliateCreator/V202405/SearchCreatorTargetCollaborationsRequestBody';
import { AffiliateCreator202405SearchCreatorTargetCollaborationsResponse } from '../model/affiliateCreator/V202405/SearchCreatorTargetCollaborationsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateCreatorV202405ApiApiKeys {
}
export declare class AffiliateCreatorV202405Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateCreatorV202405Api";
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
    setApiKey(key: AffiliateCreatorV202405ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OpenCollaborationsProductsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, sortField?: string, sortOrder?: string, CreatorSearchOpenCollaborationProductRequestBody?: AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202405CreatorSearchOpenCollaborationProductResponse;
    }>;
    OrdersSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, version?: number, pageToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202405SearchCreatorAffiliateOrdersResponse;
    }>;
    ProfilesGet(xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202405GetCreatorProfileResponse;
    }>;
    ShowcasesProductsAddPost(xTtsAccessToken: string, contentType: string, AddShowcaseProductsRequestBody?: AffiliateCreator202405AddShowcaseProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202405AddShowcaseProductsResponse;
    }>;
    ShowcasesProductsGet(pageSize: number, origin: string, xTtsAccessToken: string, contentType: string, pageToken?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202405GetShowcaseProductsResponse;
    }>;
    TargetCollaborationsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchCreatorTargetCollaborationsRequestBody?: AffiliateCreator202405SearchCreatorTargetCollaborationsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateCreator202405SearchCreatorTargetCollaborationsResponse;
    }>;
}
export declare const AffiliateCreatorV202405ApiOperationNames: {
    readonly OpenCollaborationsProductsSearchPost: "OpenCollaborationsProductsSearchPost";
    readonly OrdersSearchPost: "OrdersSearchPost";
    readonly ProfilesGet: "ProfilesGet";
    readonly ShowcasesProductsAddPost: "ShowcasesProductsAddPost";
    readonly ShowcasesProductsGet: "ShowcasesProductsGet";
    readonly TargetCollaborationsSearchPost: "TargetCollaborationsSearchPost";
};
export type AffiliateCreatorV202405ApiOperationTypes = {
    OpenCollaborationsProductsSearchPost: AffiliateCreatorV202405Api['OpenCollaborationsProductsSearchPost'];
    OrdersSearchPost: AffiliateCreatorV202405Api['OrdersSearchPost'];
    ProfilesGet: AffiliateCreatorV202405Api['ProfilesGet'];
    ShowcasesProductsAddPost: AffiliateCreatorV202405Api['ShowcasesProductsAddPost'];
    ShowcasesProductsGet: AffiliateCreatorV202405Api['ShowcasesProductsGet'];
    TargetCollaborationsSearchPost: AffiliateCreatorV202405Api['TargetCollaborationsSearchPost'];
};
//# sourceMappingURL=affiliateCreatorV202405Api.d.ts.map