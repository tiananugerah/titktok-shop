import { Order202309GetOrderListResponseDataOrders } from './GetOrderListResponseDataOrders';
export declare class Order202309GetOrderListResponseData {
    'nextPageToken'?: string;
    'orders'?: Array<Order202309GetOrderListResponseDataOrders>;
    'totalCount'?: number;
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
//# sourceMappingURL=GetOrderListResponseData.d.ts.map