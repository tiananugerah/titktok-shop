import http from 'http';
import { Order202309GetOrderDetailResponse } from '../model/order/V202309/GetOrderDetailResponse';
import { Order202309GetOrderListRequestBody } from '../model/order/V202309/GetOrderListRequestBody';
import { Order202309GetOrderListResponse } from '../model/order/V202309/GetOrderListResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum OrderV202309ApiApiKeys {
}
export declare class OrderV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "OrderV202309Api";
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
    setApiKey(key: OrderV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersGet(ids: Array<string>, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Order202309GetOrderDetailResponse;
    }>;
    OrdersSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, sortOrder?: string, pageToken?: string, sortField?: string, shopCipher?: string, GetOrderListRequestBody?: Order202309GetOrderListRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Order202309GetOrderListResponse;
    }>;
}
export declare const OrderV202309ApiOperationNames: {
    readonly OrdersGet: "OrdersGet";
    readonly OrdersSearchPost: "OrdersSearchPost";
};
export type OrderV202309ApiOperationTypes = {
    OrdersGet: OrderV202309Api['OrdersGet'];
    OrdersSearchPost: OrderV202309Api['OrdersSearchPost'];
};
//# sourceMappingURL=orderV202309Api.d.ts.map