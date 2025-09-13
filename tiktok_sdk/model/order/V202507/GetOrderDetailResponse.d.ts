import { Order202507GetOrderDetailResponseData } from './GetOrderDetailResponseData';
export declare class Order202507GetOrderDetailResponse {
    'code'?: number;
    'data'?: Order202507GetOrderDetailResponseData;
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