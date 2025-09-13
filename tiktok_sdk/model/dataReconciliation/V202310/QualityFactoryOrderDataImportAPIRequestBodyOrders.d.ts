import { DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages } from './QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages';
export declare class DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrders {
    'channelFinancialStatus'?: string;
    'channelFulfillmentStatus'?: string;
    'channelOrderId'?: string;
    'channelOrderStatus'?: string;
    'channelOrderUpdateTime'?: string;
    'channelType'?: string;
    'notExistReason'?: string;
    'orderId'?: string;
    'packages'?: Array<DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages>;
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
//# sourceMappingURL=QualityFactoryOrderDataImportAPIRequestBodyOrders.d.ts.map