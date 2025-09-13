import http from 'http';
import { DataReconciliation202309OrderStatusDataExchangeRequestBody } from '../model/dataReconciliation/V202309/OrderStatusDataExchangeRequestBody';
import { DataReconciliation202309OrderStatusDataExchangeResponse } from '../model/dataReconciliation/V202309/OrderStatusDataExchangeResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum DataReconciliationV202309ApiApiKeys {
}
export declare class DataReconciliationV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "DataReconciliationV202309Api";
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
    setApiKey(key: DataReconciliationV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersSyncPost(xTtsAccessToken: string, contentType: string, shopId?: number, OrderStatusDataExchangeRequestBody?: DataReconciliation202309OrderStatusDataExchangeRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DataReconciliation202309OrderStatusDataExchangeResponse;
    }>;
}
export declare const DataReconciliationV202309ApiOperationNames: {
    readonly OrdersSyncPost: "OrdersSyncPost";
};
export type DataReconciliationV202309ApiOperationTypes = {
    OrdersSyncPost: DataReconciliationV202309Api['OrdersSyncPost'];
};
//# sourceMappingURL=dataReconciliationV202309Api.d.ts.map