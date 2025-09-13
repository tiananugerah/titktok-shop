import { Order202309GetOrderListResponseData } from './GetOrderListResponseData';
export declare class Order202309GetOrderListResponse {
    'code'?: number;
    'data'?: Order202309GetOrderListResponseData;
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
//# sourceMappingURL=GetOrderListResponse.d.ts.map