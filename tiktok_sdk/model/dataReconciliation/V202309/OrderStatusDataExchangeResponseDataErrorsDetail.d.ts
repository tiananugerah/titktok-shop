import { DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors } from './OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors';
export declare class DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail {
    'channelOrderId'?: string;
    'channelType'?: string;
    'extraErrors'?: Array<DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetailExtraErrors>;
    'orderId'?: string;
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
//# sourceMappingURL=OrderStatusDataExchangeResponseDataErrorsDetail.d.ts.map