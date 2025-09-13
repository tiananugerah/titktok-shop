import { Finance202501GetTransactionsbyOrderResponseData } from './GetTransactionsbyOrderResponseData';
export declare class Finance202501GetTransactionsbyOrderResponse {
    'code'?: number;
    'data'?: Finance202501GetTransactionsbyOrderResponseData;
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
//# sourceMappingURL=GetTransactionsbyOrderResponse.d.ts.map