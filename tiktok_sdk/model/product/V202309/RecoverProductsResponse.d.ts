import { Product202309RecoverProductsResponseData } from './RecoverProductsResponseData';
export declare class Product202309RecoverProductsResponse {
    'code'?: number;
    'data'?: Product202309RecoverProductsResponseData;
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
//# sourceMappingURL=RecoverProductsResponse.d.ts.map