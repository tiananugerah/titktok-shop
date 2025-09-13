import http from 'http';
import { Promotion202406GetCouponResponse } from '../model/promotion/V202406/GetCouponResponse';
import { Promotion202406SearchCouponsRequestBody } from '../model/promotion/V202406/SearchCouponsRequestBody';
import { Promotion202406SearchCouponsResponse } from '../model/promotion/V202406/SearchCouponsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum PromotionV202406ApiApiKeys {
}
export declare class PromotionV202406Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "PromotionV202406Api";
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
    setApiKey(key: PromotionV202406ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    CouponsCouponIdGet(couponId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202406GetCouponResponse;
    }>;
    CouponsSearchPost(xTtsAccessToken: string, contentType: string, pageToken?: string, pageSize?: number, shopCipher?: string, SearchCouponsRequestBody?: Promotion202406SearchCouponsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Promotion202406SearchCouponsResponse;
    }>;
}
export declare const PromotionV202406ApiOperationNames: {
    readonly CouponsCouponIdGet: "CouponsCouponIdGet";
    readonly CouponsSearchPost: "CouponsSearchPost";
};
export type PromotionV202406ApiOperationTypes = {
    CouponsCouponIdGet: PromotionV202406Api['CouponsCouponIdGet'];
    CouponsSearchPost: PromotionV202406Api['CouponsSearchPost'];
};
//# sourceMappingURL=promotionV202406Api.d.ts.map