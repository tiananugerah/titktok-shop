import { Fulfillment202309MarkPackageAsShippedResponseDataWarning } from './MarkPackageAsShippedResponseDataWarning';
export declare class Fulfillment202309MarkPackageAsShippedResponseData {
    'orderId'?: string;
    'orderLineItemIds'?: Array<string>;
    'packageId'?: string;
    'warning'?: Fulfillment202309MarkPackageAsShippedResponseDataWarning;
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
//# sourceMappingURL=MarkPackageAsShippedResponseData.d.ts.map