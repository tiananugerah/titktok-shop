import http from 'http';
import { Order202507GetOrderDetailResponse } from '../model/order/V202507/GetOrderDetailResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum OrderV202507ApiApiKeys {
}
export declare class OrderV202507Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "OrderV202507Api";
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
    setApiKey(key: OrderV202507ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersGet(ids: Array<string>, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Order202507GetOrderDetailResponse;
    }>;
}
export declare const OrderV202507ApiOperationNames: {
    readonly OrdersGet: "OrdersGet";
};
export type OrderV202507ApiOperationTypes = {
    OrdersGet: OrderV202507Api['OrdersGet'];
};
//# sourceMappingURL=orderV202507Api.d.ts.map