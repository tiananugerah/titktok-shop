import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount } from './SearchReturnsResponseDataReturnOrdersDiscountAmount';
import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersPartialRefund } from './SearchReturnsResponseDataReturnOrdersPartialRefund';
import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount } from './SearchReturnsResponseDataReturnOrdersRefundAmount';
import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems } from './SearchReturnsResponseDataReturnOrdersReturnLineItems';
import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress } from './SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress';
import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersSellerNextActionResponse } from './SearchReturnsResponseDataReturnOrdersSellerNextActionResponse';
import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount } from './SearchReturnsResponseDataReturnOrdersShippingFeeAmount';
export declare class ReturnRefund202309SearchReturnsResponseDataReturnOrders {
    'arbitrationStatus'?: string;
    'buyerRejectedPartialRefund'?: boolean;
    'canBuyerKeepItem'?: boolean;
    'combinedReturnId'?: string;
    'createTime'?: number;
    'discountAmount'?: Array<ReturnRefund202309SearchReturnsResponseDataReturnOrdersDiscountAmount>;
    'handoverMethod'?: string;
    'isCombinedReturn'?: boolean;
    'nextReturnId'?: string;
    'orderId'?: string;
    'partialRefund'?: ReturnRefund202309SearchReturnsResponseDataReturnOrdersPartialRefund;
    'preReturnId'?: string;
    'refundAmount'?: ReturnRefund202309SearchReturnsResponseDataReturnOrdersRefundAmount;
    'returnId'?: string;
    'returnLineItems'?: Array<ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems>;
    'returnMethod'?: string;
    'returnProviderId'?: string;
    'returnProviderName'?: string;
    'returnReason'?: string;
    'returnReasonText'?: string;
    'returnShippingDocumentType'?: string;
    'returnStatus'?: string;
    'returnTrackingNumber'?: string;
    'returnType'?: string;
    'returnWarehouseAddress'?: ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnWarehouseAddress;
    'role'?: string;
    'sellerNextActionResponse'?: Array<ReturnRefund202309SearchReturnsResponseDataReturnOrdersSellerNextActionResponse>;
    'sellerProposedReturnType'?: string;
    'shipmentType'?: string;
    'shippingFeeAmount'?: Array<ReturnRefund202309SearchReturnsResponseDataReturnOrdersShippingFeeAmount>;
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
//# sourceMappingURL=SearchReturnsResponseDataReturnOrders.d.ts.map