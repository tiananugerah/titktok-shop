import { DataReconciliation202309OrderStatusDataExchangeResponseData } from './OrderStatusDataExchangeResponseData';
export declare class DataReconciliation202309OrderStatusDataExchangeResponse {
    'code'?: number;
    'data'?: DataReconciliation202309OrderStatusDataExchangeResponseData;
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
//# sourceMappingURL=OrderStatusDataExchangeResponse.d.ts.map