import { ReturnRefund202309ApproveReturnRequestBodyPartialRefund } from './ApproveReturnRequestBodyPartialRefund';
export declare class ReturnRefund202309ApproveReturnRequestBody {
    'buyerKeepItem'?: boolean;
    'decision'?: string;
    'partialRefund'?: ReturnRefund202309ApproveReturnRequestBodyPartialRefund;
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
//# sourceMappingURL=ApproveReturnRequestBody.d.ts.map