import { DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages } from './QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages';
export declare class DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrders {
    'channelFinancialStatus'?: string;
    'channelFulfillmentStatus'?: string;
    'channelOrderId'?: string;
    'channelOrderStatus'?: string;
    'channelOrderUpdateTime'?: string;
    'channelType'?: string;
    'issueReason'?: string;
    'orderId'?: string;
    'packages'?: Array<DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBodyOrdersPackages>;
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