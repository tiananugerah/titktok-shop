import { Product202401ListingSchemasResponseData } from './ListingSchemasResponseData';
export declare class Product202401ListingSchemasResponse {
    'code'?: number;
    'data'?: Product202401ListingSchemasResponseData;
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
//# sourceMappingURL=ListingSchemasResponse.d.ts.map