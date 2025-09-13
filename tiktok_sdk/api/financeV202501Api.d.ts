import http from 'http';
import { Finance202501GetTransactionsbyOrderResponse } from '../model/finance/V202501/GetTransactionsbyOrderResponse';
import { Finance202501GetTransactionsbyStatementResponse } from '../model/finance/V202501/GetTransactionsbyStatementResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum FinanceV202501ApiApiKeys {
}
export declare class FinanceV202501Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "FinanceV202501Api";
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
    setApiKey(key: FinanceV202501ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersOrderIdStatementTransactionsGet(orderId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Finance202501GetTransactionsbyOrderResponse;
    }>;
    StatementsStatementIdStatementTransactionsGet(statementId: string, sortField: string, xTtsAccessToken: string, contentType: string, pageToken?: string, sortOrder?: string, pageSize?: any, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Finance202501GetTransactionsbyStatementResponse;
    }>;
}
export declare const FinanceV202501ApiOperationNames: {
    readonly OrdersOrderIdStatementTransactionsGet: "OrdersOrderIdStatementTransactionsGet";
    readonly StatementsStatementIdStatementTransactionsGet: "StatementsStatementIdStatementTransactionsGet";
};
export type FinanceV202501ApiOperationTypes = {
    OrdersOrderIdStatementTransactionsGet: FinanceV202501Api['OrdersOrderIdStatementTransactionsGet'];
    StatementsStatementIdStatementTransactionsGet: FinanceV202501Api['StatementsStatementIdStatementTransactionsGet'];
};
//# sourceMappingURL=financeV202501Api.d.ts.map