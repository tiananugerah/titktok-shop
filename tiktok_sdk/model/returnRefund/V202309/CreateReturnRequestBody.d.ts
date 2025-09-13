import { ReturnRefund202309CreateReturnRequestBodySkus } from './CreateReturnRequestBodySkus';
export declare class ReturnRefund202309CreateReturnRequestBody {
    'currency'?: string;
    'handoverMethod'?: string;
    'orderId'?: string;
    'orderLineItemIds'?: Array<string>;
    'refundTotal'?: string;
    'returnReason'?: string;
    'returnType'?: string;
    'shipmentType'?: string;
    'skus'?: Array<ReturnRefund202309CreateReturnRequestBodySkus>;
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
//# sourceMappingURL=CreateReturnRequestBody.d.ts.map