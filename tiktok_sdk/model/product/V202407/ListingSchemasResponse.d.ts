import { Product202407ListingSchemasResponseData } from './ListingSchemasResponseData';
export declare class Product202407ListingSchemasResponse {
    'code'?: number;
    'data'?: Product202407ListingSchemasResponseData;
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