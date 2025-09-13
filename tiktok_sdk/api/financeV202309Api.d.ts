import http from 'http';
import { Finance202309GetPaymentsResponse } from '../model/finance/V202309/GetPaymentsResponse';
import { Finance202309GetStatementsResponse } from '../model/finance/V202309/GetStatementsResponse';
import { Finance202309GetTransactionsbyOrderResponse } from '../model/finance/V202309/GetTransactionsbyOrderResponse';
import { Finance202309GetTransactionsbyStatementResponse } from '../model/finance/V202309/GetTransactionsbyStatementResponse';
import { Finance202309GetWithdrawalsResponse } from '../model/finance/V202309/GetWithdrawalsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum FinanceV202309ApiApiKeys {
}
export declare class FinanceV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "FinanceV202309Api";
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
    setApiKey(key: FinanceV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersOrderIdStatementTransactionsGet(orderId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Finance202309GetTransactionsbyOrderResponse;
    }>;
    PaymentsGet(sortField: string, xTtsAccessToken: string, contentType: string, createTimeLt?: number, pageSize?: any, pageToken?: string, sortOrder?: string, createTimeGe?: number, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Finance202309GetPaymentsResponse;
    }>;
    StatementsGet(sortField: string, xTtsAccessToken: string, contentType: string, statementTimeLt?: number, paymentStatus?: string, pageSize?: any, pageToken?: string, sortOrder?: string, statementTimeGe?: number, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Finance202309GetStatementsResponse;
    }>;
    StatementsStatementIdStatementTransactionsGet(statementId: string, sortField: string, xTtsAccessToken: string, contentType: string, pageToken?: string, sortOrder?: string, pageSize?: any, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Finance202309GetTransactionsbyStatementResponse;
    }>;
    WithdrawalsGet(types: Array<string>, xTtsAccessToken: string, contentType: string, createTimeLt?: number, pageSize?: number, pageToken?: string, createTimeGe?: number, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Finance202309GetWithdrawalsResponse;
    }>;
}
export declare const FinanceV202309ApiOperationNames: {
    readonly OrdersOrderIdStatementTransactionsGet: "OrdersOrderIdStatementTransactionsGet";
    readonly PaymentsGet: "PaymentsGet";
    readonly StatementsGet: "StatementsGet";
    readonly StatementsStatementIdStatementTransactionsGet: "StatementsStatementIdStatementTransactionsGet";
    readonly WithdrawalsGet: "WithdrawalsGet";
};
export type FinanceV202309ApiOperationTypes = {
    OrdersOrderIdStatementTransactionsGet: FinanceV202309Api['OrdersOrderIdStatementTransactionsGet'];
    PaymentsGet: FinanceV202309Api['PaymentsGet'];
    StatementsGet: FinanceV202309Api['StatementsGet'];
    StatementsStatementIdStatementTransactionsGet: FinanceV202309Api['StatementsStatementIdStatementTransactionsGet'];
    WithdrawalsGet: FinanceV202309Api['WithdrawalsGet'];
};
//# sourceMappingURL=financeV202309Api.d.ts.map