import { ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage } from './SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage';
import { ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount } from './SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount';
export declare class ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItems {
    'cancelLineItemId'?: string;
    'orderLineItemId'?: string;
    'productImage'?: ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsProductImage;
    'productName'?: string;
    'refundAmount'?: ReturnRefund202309SearchCancellationsResponseDataCancellationsCancelLineItemsRefundAmount;
    'sellerSku'?: string;
    'skuId'?: string;
    'skuName'?: string;
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
//# sourceMappingURL=SearchCancellationsResponseDataCancellationsCancelLineItems.d.ts.map