import { Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons } from './GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons';
export declare class Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes {
    'canSplit'?: boolean;
    'mustSplit'?: boolean;
    'mustSplitReasons'?: Array<Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons>;
    'orderId'?: string;
    'reason'?: string;
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
//# sourceMappingURL=GetOrderSplitAttributesResponseDataSplitAttributes.d.ts.map