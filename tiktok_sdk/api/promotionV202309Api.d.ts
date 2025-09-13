import http from 'http';
import { Promotion202309CreateActivityRequestBody } from '../model/promotion/V202309/CreateActivityRequestBody';
import { Promotion202309CreateActivityResponse } from '../model/promotion/V202309/CreateActivityResponse';
import { Promotion202309DeactivateActivityResponse } from '../model/promotion/V202309/DeactivateActivityResponse';
import { Promotion202309GetActivityResponse } from '../model/promotion/V202309/GetActivityResponse';
import { Promotion202309RemoveActivityProductRequestBody } from '../model/promotion/V202309/RemoveActivityProductRequestBody';
import { Promotion202309RemoveActivityProductResponse } from '../model/promotion/V202309/RemoveActivityProductResponse';
import { Promotion202309SearchActivitiesRequestBody } from '../model/promotion/V202309/SearchActivitiesRequestBody';
import { Promotion202309SearchActivitiesResponse } from '../model/promotion/V202309/SearchActivitiesResponse';
import { Promotion202309UpdateActivityProductRequestBody } from '../model/promotion/V202309/UpdateActivityProductRequestBody';
import { Promotion202309UpdateActivityProductResponse } from '../model/promotion/V202309/UpdateActivityProductResponse';
import { Promotion202309UpdateActivityRequestBody } from '../model/promotion/V202309/UpdateActivityRequestBody';
import { Promotion202309UpdateActivityResponse } from '../model/promotion/V202309/UpdateActivityResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum PromotionV202309ApiApiKeys {
}
export declare class PromotionV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "PromotionV202309Api";
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
    setApiKey(key: PromotionV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ActivitiesActivityIdDeactivatePost(activityId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202309DeactivateActivityResponse;
    }>;
    ActivitiesActivityIdGet(activityId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202309GetActivityResponse;
    }>;
    ActivitiesActivityIdProductsDelete(activityId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, RemoveActivityProductRequestBody?: Promotion202309RemoveActivityProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202309RemoveActivityProductResponse;
    }>;
    ActivitiesActivityIdProductsPut(activityId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdateActivityProductRequestBody?: Promotion202309UpdateActivityProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202309UpdateActivityProductResponse;
    }>;
    ActivitiesActivityIdPut(activityId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdateActivityRequestBody?: Promotion202309UpdateActivityRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202309UpdateActivityResponse;
    }>;
    ActivitiesPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CreateActivityRequestBody?: Promotion202309CreateActivityRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202309CreateActivityResponse;
    }>;
    ActivitiesSearchPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, SearchActivitiesRequestBody?: Promotion202309SearchActivitiesRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202309SearchActivitiesResponse;
    }>;
}
export declare const PromotionV202309ApiOperationNames: {
    readonly ActivitiesActivityIdDeactivatePost: "ActivitiesActivityIdDeactivatePost";
    readonly ActivitiesActivityIdGet: "ActivitiesActivityIdGet";
    readonly ActivitiesActivityIdProductsDelete: "ActivitiesActivityIdProductsDelete";
    readonly ActivitiesActivityIdProductsPut: "ActivitiesActivityIdProductsPut";
    readonly ActivitiesActivityIdPut: "ActivitiesActivityIdPut";
    readonly ActivitiesPost: "ActivitiesPost";
    readonly ActivitiesSearchPost: "ActivitiesSearchPost";
};
export type PromotionV202309ApiOperationTypes = {
    ActivitiesActivityIdDeactivatePost: PromotionV202309Api['ActivitiesActivityIdDeactivatePost'];
    ActivitiesActivityIdGet: PromotionV202309Api['ActivitiesActivityIdGet'];
    ActivitiesActivityIdProductsDelete: PromotionV202309Api['ActivitiesActivityIdProductsDelete'];
    ActivitiesActivityIdProductsPut: PromotionV202309Api['ActivitiesActivityIdProductsPut'];
    ActivitiesActivityIdPut: PromotionV202309Api['ActivitiesActivityIdPut'];
    ActivitiesPost: PromotionV202309Api['ActivitiesPost'];
    ActivitiesSearchPost: PromotionV202309Api['ActivitiesSearchPost'];
};
//# sourceMappingURL=promotionV202309Api.d.ts.map