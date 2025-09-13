import { Finance202309GetTransactionsbyOrderResponseData } from './GetTransactionsbyOrderResponseData';
export declare class Finance202309GetTransactionsbyOrderResponse {
    'code'?: number;
    'data'?: Finance202309GetTransactionsbyOrderResponseData;
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