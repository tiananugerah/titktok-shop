import { Finance202309GetPaymentsResponseDataPayments } from './GetPaymentsResponseDataPayments';
export declare class Finance202309GetPaymentsResponseData {
    'nextPageToken'?: string;
    'payments'?: Array<Finance202309GetPaymentsResponseDataPayments>;
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
//# sourceMappingURL=GetPaymentsResponseData.d.ts.map