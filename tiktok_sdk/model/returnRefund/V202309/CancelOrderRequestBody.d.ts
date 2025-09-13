import { ReturnRefund202309CancelOrderRequestBodySkus } from './CancelOrderRequestBodySkus';
export declare class ReturnRefund202309CancelOrderRequestBody {
    'cancelReason'?: string;
    'orderId'?: string;
    'orderLineItemIds'?: Array<string>;
    'skus'?: Array<ReturnRefund202309CancelOrderRequestBodySkus>;
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
//# sourceMappingURL=CancelOrderRequestBody.d.ts.map