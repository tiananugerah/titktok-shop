import { Product202507ReplicateProductResponseData } from './ReplicateProductResponseData';
export declare class Product202507ReplicateProductResponse {
    'code'?: number;
    'data'?: Product202507ReplicateProductResponseData;
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
//# sourceMappingURL=ReplicateProductResponse.d.ts.map