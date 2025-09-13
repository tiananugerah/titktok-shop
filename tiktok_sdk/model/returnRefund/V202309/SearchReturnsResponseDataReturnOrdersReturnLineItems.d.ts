import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage } from './SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage';
import { ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount } from './SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount';
export declare class ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItems {
    'orderLineItemId'?: string;
    'productImage'?: ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsProductImage;
    'productName'?: string;
    'refundAmount'?: ReturnRefund202309SearchReturnsResponseDataReturnOrdersReturnLineItemsRefundAmount;
    'returnLineItemId'?: string;
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
//# sourceMappingURL=SearchReturnsResponseDataReturnOrdersReturnLineItems.d.ts.map