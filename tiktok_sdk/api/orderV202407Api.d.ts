import http from 'http';
import { Order202407GetPriceDetailResponse } from '../model/order/V202407/GetPriceDetailResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum OrderV202407ApiApiKeys {
}
export declare class OrderV202407Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "OrderV202407Api";
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
    setApiKey(key: OrderV202407ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersOrderIdPriceDetailGet(orderId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Order202407GetPriceDetailResponse;
    }>;
}
export declare const OrderV202407ApiOperationNames: {
    readonly OrdersOrderIdPriceDetailGet: "OrdersOrderIdPriceDetailGet";
};
export type OrderV202407ApiOperationTypes = {
    OrdersOrderIdPriceDetailGet: OrderV202407Api['OrdersOrderIdPriceDetailGet'];
};
//# sourceMappingURL=orderV202407Api.d.ts.map