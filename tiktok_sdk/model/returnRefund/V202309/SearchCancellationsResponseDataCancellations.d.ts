import { ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems } from './SearchCancellationsResponseDataCancellationsCancelLineItems';
import { ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount } from './SearchCancellationsResponseDataCancellationsRefundAmount';
import { ReturnRefund202309SearchCancellationsResponseDataCancellationsSellerNextActionResponse } from './SearchCancellationsResponseDataCancellationsSellerNextActionResponse';
export declare class ReturnRefund202309SearchCancellationsResponseDataCancellations {
    'cancelId'?: string;
    'cancelLineItems'?: Array<ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems>;
    'cancelReason'?: string;
    'cancelReasonText'?: string;
    'cancelStatus'?: string;
    'cancelType'?: string;
    'createTime'?: number;
    'orderId'?: string;
    'refundAmount'?: ReturnRefund202309SearchCancellationsResponseDataCancellationsRefundAmount;
    'role'?: string;
    'sellerNextActionResponse'?: Array<ReturnRefund202309SearchCancellationsResponseDataCancellationsSellerNextActionResponse>;
    'updateTime'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
//# sourceMappingURL=SearchCancellationsResponseDataCancellations.d.ts.map