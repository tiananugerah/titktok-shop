import http from 'http';
import { ReturnRefund202309ApproveCancellationResponse } from '../model/returnRefund/V202309/ApproveCancellationResponse';
import { ReturnRefund202309ApproveReturnRequestBody } from '../model/returnRefund/V202309/ApproveReturnRequestBody';
import { ReturnRefund202309ApproveReturnResponse } from '../model/returnRefund/V202309/ApproveReturnResponse';
import { ReturnRefund202309CalculateRefundRequestBody } from '../model/returnRefund/V202309/CalculateRefundRequestBody';
import { ReturnRefund202309CalculateRefundResponse } from '../model/returnRefund/V202309/CalculateRefundResponse';
import { ReturnRefund202309CancelOrderRequestBody } from '../model/returnRefund/V202309/CancelOrderRequestBody';
import { ReturnRefund202309CancelOrderResponse } from '../model/returnRefund/V202309/CancelOrderResponse';
import { ReturnRefund202309CreateReturnRequestBody } from '../model/returnRefund/V202309/CreateReturnRequestBody';
import { ReturnRefund202309CreateReturnResponse } from '../model/returnRefund/V202309/CreateReturnResponse';
import { ReturnRefund202309GetAftersaleEligibilityResponse } from '../model/returnRefund/V202309/GetAftersaleEligibilityResponse';
import { ReturnRefund202309GetRejectReasonsResponse } from '../model/returnRefund/V202309/GetRejectReasonsResponse';
import { ReturnRefund202309GetReturnRecordsResponse } from '../model/returnRefund/V202309/GetReturnRecordsResponse';
import { ReturnRefund202309RejectCancellationRequestBody } from '../model/returnRefund/V202309/RejectCancellationRequestBody';
import { ReturnRefund202309RejectCancellationResponse } from '../model/returnRefund/V202309/RejectCancellationResponse';
import { ReturnRefund202309RejectReturnRequestBody } from '../model/returnRefund/V202309/RejectReturnRequestBody';
import { ReturnRefund202309RejectReturnResponse } from '../model/returnRefund/V202309/RejectReturnResponse';
import { ReturnRefund202309SearchCancellationsRequestBody } from '../model/returnRefund/V202309/SearchCancellationsRequestBody';
import { ReturnRefund202309SearchCancellationsResponse } from '../model/returnRefund/V202309/SearchCancellationsResponse';
import { ReturnRefund202309SearchReturnsRequestBody } from '../model/returnRefund/V202309/SearchReturnsRequestBody';
import { ReturnRefund202309SearchReturnsResponse } from '../model/returnRefund/V202309/SearchReturnsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ReturnRefundV202309ApiApiKeys {
}
export declare class ReturnRefundV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ReturnRefundV202309Api";
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
    setApiKey(key: ReturnRefundV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    CancellationsCancelIdApprovePost(cancelId: string, xTtsAccessToken: string, contentType: string, idempotencyKey?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309ApproveCancellationResponse;
    }>;
    CancellationsCancelIdRejectPost(cancelId: string, xTtsAccessToken: string, contentType: string, idempotencyKey?: string, shopCipher?: string, RejectCancellationRequestBody?: ReturnRefund202309RejectCancellationRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309RejectCancellationResponse;
    }>;
    CancellationsPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CancelOrderRequestBody?: ReturnRefund202309CancelOrderRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309CancelOrderResponse;
    }>;
    CancellationsSearchPost(xTtsAccessToken: string, contentType: string, sortField?: string, sortOrder?: string, pageSize?: string, pageToken?: string, shopCipher?: string, SearchCancellationsRequestBody?: ReturnRefund202309SearchCancellationsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309SearchCancellationsResponse;
    }>;
    OrdersOrderIdAftersaleEligibilityGet(orderId: string, xTtsAccessToken: string, contentType: string, initiateAftersaleUser?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309GetAftersaleEligibilityResponse;
    }>;
    RefundsCalculatePost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CalculateRefundRequestBody?: ReturnRefund202309CalculateRefundRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309CalculateRefundResponse;
    }>;
    RejectReasonsGet(returnOrCancelId: string, xTtsAccessToken: string, contentType: string, locale?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309GetRejectReasonsResponse;
    }>;
    ReturnsPost(xTtsAccessToken: string, contentType: string, idempotencyKey?: string, shopCipher?: string, CreateReturnRequestBody?: ReturnRefund202309CreateReturnRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309CreateReturnResponse;
    }>;
    ReturnsReturnIdApprovePost(returnId: string, xTtsAccessToken: string, contentType: string, idempotencyKey?: string, shopCipher?: string, ApproveReturnRequestBody?: ReturnRefund202309ApproveReturnRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309ApproveReturnResponse;
    }>;
    ReturnsReturnIdRecordsGet(returnId: string, xTtsAccessToken: string, contentType: string, locale?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309GetReturnRecordsResponse;
    }>;
    ReturnsReturnIdRejectPost(returnId: string, xTtsAccessToken: string, contentType: string, idempotencyKey?: string, shopCipher?: string, RejectReturnRequestBody?: ReturnRefund202309RejectReturnRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309RejectReturnResponse;
    }>;
    ReturnsSearchPost(xTtsAccessToken: string, contentType: string, sortField?: string, sortOrder?: string, pageSize?: string, pageToken?: string, shopCipher?: string, SearchReturnsRequestBody?: ReturnRefund202309SearchReturnsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReturnRefund202309SearchReturnsResponse;
    }>;
}
export declare const ReturnRefundV202309ApiOperationNames: {
    readonly CancellationsCancelIdApprovePost: "CancellationsCancelIdApprovePost";
    readonly CancellationsCancelIdRejectPost: "CancellationsCancelIdRejectPost";
    readonly CancellationsPost: "CancellationsPost";
    readonly CancellationsSearchPost: "CancellationsSearchPost";
    readonly OrdersOrderIdAftersaleEligibilityGet: "OrdersOrderIdAftersaleEligibilityGet";
    readonly RefundsCalculatePost: "RefundsCalculatePost";
    readonly RejectReasonsGet: "RejectReasonsGet";
    readonly ReturnsPost: "ReturnsPost";
    readonly ReturnsReturnIdApprovePost: "ReturnsReturnIdApprovePost";
    readonly ReturnsReturnIdRecordsGet: "ReturnsReturnIdRecordsGet";
    readonly ReturnsReturnIdRejectPost: "ReturnsReturnIdRejectPost";
    readonly ReturnsSearchPost: "ReturnsSearchPost";
};
export type ReturnRefundV202309ApiOperationTypes = {
    CancellationsCancelIdApprovePost: ReturnRefundV202309Api['CancellationsCancelIdApprovePost'];
    CancellationsCancelIdRejectPost: ReturnRefundV202309Api['CancellationsCancelIdRejectPost'];
    CancellationsPost: ReturnRefundV202309Api['CancellationsPost'];
    CancellationsSearchPost: ReturnRefundV202309Api['CancellationsSearchPost'];
    OrdersOrderIdAftersaleEligibilityGet: ReturnRefundV202309Api['OrdersOrderIdAftersaleEligibilityGet'];
    RefundsCalculatePost: ReturnRefundV202309Api['RefundsCalculatePost'];
    RejectReasonsGet: ReturnRefundV202309Api['RejectReasonsGet'];
    ReturnsPost: ReturnRefundV202309Api['ReturnsPost'];
    ReturnsReturnIdApprovePost: ReturnRefundV202309Api['ReturnsReturnIdApprovePost'];
    ReturnsReturnIdRecordsGet: ReturnRefundV202309Api['ReturnsReturnIdRecordsGet'];
    ReturnsReturnIdRejectPost: ReturnRefundV202309Api['ReturnsReturnIdRejectPost'];
    ReturnsSearchPost: ReturnRefundV202309Api['ReturnsSearchPost'];
};
//# sourceMappingURL=returnRefundV202309Api.d.ts.map