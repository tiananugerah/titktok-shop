import http from 'http';
import { Finance202507GetUnsettledTransactionsResponse } from '../model/finance/V202507/GetUnsettledTransactionsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum FinanceV202507ApiApiKeys {
}
export declare class FinanceV202507Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "FinanceV202507Api";
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
    setApiKey(key: FinanceV202507ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersUnsettledGet(sortField: string, xTtsAccessToken: string, contentType: string, pageToken?: string, pageSize?: number, sortOrder?: string, searchTimeGe?: number, searchTimeLt?: number, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Finance202507GetUnsettledTransactionsResponse;
    }>;
}
export declare const FinanceV202507ApiOperationNames: {
    readonly OrdersUnsettledGet: "OrdersUnsettledGet";
};
export type FinanceV202507ApiOperationTypes = {
    OrdersUnsettledGet: FinanceV202507Api['OrdersUnsettledGet'];
};
//# sourceMappingURL=financeV202507Api.d.ts.map