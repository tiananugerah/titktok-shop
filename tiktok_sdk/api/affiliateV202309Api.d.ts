import http from 'http';
import { Affiliate202309AddShowcaseProductsoldRequestBody } from '../model/affiliate/V202309/AddShowcaseProductsoldRequestBody';
import { Affiliate202309AddShowcaseProductsoldResponse } from '../model/affiliate/V202309/AddShowcaseProductsoldResponse';
import { Affiliate202309GetCreatorProfileoldResponse } from '../model/affiliate/V202309/GetCreatorProfileoldResponse';
import { Affiliate202309GetLiveRoomInfoResponse } from '../model/affiliate/V202309/GetLiveRoomInfoResponse';
import { Affiliate202309GetShopProductsResponse } from '../model/affiliate/V202309/GetShopProductsResponse';
import { Affiliate202309GetShowcaseProductsoldResponse } from '../model/affiliate/V202309/GetShowcaseProductsoldResponse';
import { Affiliate202309RemoveShowcaseProductsoldRequestBody } from '../model/affiliate/V202309/RemoveShowcaseProductsoldRequestBody';
import { Affiliate202309RemoveShowcaseProductsoldResponse } from '../model/affiliate/V202309/RemoveShowcaseProductsoldResponse';
import { Affiliate202309TopShowcaseProductsoldRequestBody } from '../model/affiliate/V202309/TopShowcaseProductsoldRequestBody';
import { Affiliate202309TopShowcaseProductsoldResponse } from '../model/affiliate/V202309/TopShowcaseProductsoldResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateV202309ApiApiKeys {
}
export declare class AffiliateV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateV202309Api";
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
    setApiKey(key: AffiliateV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    LiveRoomsGet(xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202309GetLiveRoomInfoResponse;
    }>;
    ProfilesGet(xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202309GetCreatorProfileoldResponse;
    }>;
    ShopProductsGet(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, titleKeyword?: string, sortField?: string, sortOrder?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202309GetShopProductsResponse;
    }>;
    ShowcasesProductsDelete(xTtsAccessToken: string, contentType: string, RemoveShowcaseProductsoldRequestBody?: Affiliate202309RemoveShowcaseProductsoldRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202309RemoveShowcaseProductsoldResponse;
    }>;
    ShowcasesProductsGet(xTtsAccessToken: string, contentType: string, pageSize?: number, pageToken?: string, origin?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202309GetShowcaseProductsoldResponse;
    }>;
    ShowcasesProductsPost(xTtsAccessToken: string, contentType: string, AddShowcaseProductsoldRequestBody?: Affiliate202309AddShowcaseProductsoldRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202309AddShowcaseProductsoldResponse;
    }>;
    ShowcasesProductsTopPost(xTtsAccessToken: string, contentType: string, TopShowcaseProductsoldRequestBody?: Affiliate202309TopShowcaseProductsoldRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Affiliate202309TopShowcaseProductsoldResponse;
    }>;
}
export declare const AffiliateV202309ApiOperationNames: {
    readonly LiveRoomsGet: "LiveRoomsGet";
    readonly ProfilesGet: "ProfilesGet";
    readonly ShopProductsGet: "ShopProductsGet";
    readonly ShowcasesProductsDelete: "ShowcasesProductsDelete";
    readonly ShowcasesProductsGet: "ShowcasesProductsGet";
    readonly ShowcasesProductsPost: "ShowcasesProductsPost";
    readonly ShowcasesProductsTopPost: "ShowcasesProductsTopPost";
};
export type AffiliateV202309ApiOperationTypes = {
    LiveRoomsGet: AffiliateV202309Api['LiveRoomsGet'];
    ProfilesGet: AffiliateV202309Api['ProfilesGet'];
    ShopProductsGet: AffiliateV202309Api['ShopProductsGet'];
    ShowcasesProductsDelete: AffiliateV202309Api['ShowcasesProductsDelete'];
    ShowcasesProductsGet: AffiliateV202309Api['ShowcasesProductsGet'];
    ShowcasesProductsPost: AffiliateV202309Api['ShowcasesProductsPost'];
    ShowcasesProductsTopPost: AffiliateV202309Api['ShowcasesProductsTopPost'];
};
//# sourceMappingURL=affiliateV202309Api.d.ts.map