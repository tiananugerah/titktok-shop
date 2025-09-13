import { Order202309GetOrderDetailResponseData } from './GetOrderDetailResponseData';
export declare class Order202309GetOrderDetailResponse {
    'code'?: number;
    'data'?: Order202309GetOrderDetailResponseData;
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
//# sourceMappingURL=GetOrderDetailResponse.d.ts.map