import { Fulfillment202502UploadInvoiceResponseData } from './UploadInvoiceResponseData';
export declare class Fulfillment202502UploadInvoiceResponse {
    'code'?: number;
    'data'?: Fulfillment202502UploadInvoiceResponseData;
    'message'?: string;
    'requestId'?: string;
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
//# sourceMappingURL=UploadInvoiceResponse.d.ts.map