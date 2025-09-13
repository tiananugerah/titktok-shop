import { DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages } from './OrderStatusDataExchangeRequestBodyOrdersPackages';
export declare class DataReconciliation202309OrderStatusDataExchangeRequestBodyOrders {
    'channelFinancialStatus'?: string;
    'channelFulfillmentStatus'?: string;
    'channelOrderId'?: string;
    'channelOrderStatus'?: string;
    'channelOrderUpdateTime'?: string;
    'channelType'?: string;
    'notExistReason'?: string;
    'orderId'?: string;
    'packages'?: Array<DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages>;
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
//# sourceMappingURL=OrderStatusDataExchangeRequestBodyOrders.d.ts.map