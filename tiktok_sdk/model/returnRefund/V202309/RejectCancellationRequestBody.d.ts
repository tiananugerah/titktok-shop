import { ReturnRefund202309RejectCancellationRequestBodyImages } from './RejectCancellationRequestBodyImages';
export declare class ReturnRefund202309RejectCancellationRequestBody {
    'comment'?: string;
    'images'?: Array<ReturnRefund202309RejectCancellationRequestBodyImages>;
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
//# sourceMappingURL=RejectCancellationRequestBody.d.ts.map