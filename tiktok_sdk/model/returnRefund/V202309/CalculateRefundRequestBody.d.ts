import { ReturnRefund202309CalculateRefundRequestBodySkus } from './CalculateRefundRequestBodySkus';
export declare class ReturnRefund202309CalculateRefundRequestBody {
    'handoverMethod'?: string;
    'orderId'?: string;
    'orderLineItemIds'?: Array<string>;
    'reasonName'?: string;
    'requestType'?: string;
    'shipmentType'?: string;
    'skus'?: Array<ReturnRefund202309CalculateRefundRequestBodySkus>;
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
//# sourceMappingURL=CalculateRefundRequestBody.d.ts.map