import { ReturnRefund202309RejectReturnRequestBodyImages } from './RejectReturnRequestBodyImages';
export declare class ReturnRefund202309RejectReturnRequestBody {
    'comment'?: string;
    'decision'?: string;
    'images'?: Array<ReturnRefund202309RejectReturnRequestBodyImages>;
    'rejectReason'?: string;
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
//# sourceMappingURL=RejectReturnRequestBody.d.ts.map