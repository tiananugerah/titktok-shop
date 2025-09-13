import { Product202407ListingSchemasResponseDataErrors } from './ListingSchemasResponseDataErrors';
import { Product202407ListingSchemasResponseDataListingSchemas } from './ListingSchemasResponseDataListingSchemas';
export declare class Product202407ListingSchemasResponseData {
    'errors'?: Array<Product202407ListingSchemasResponseDataErrors>;
    'listingSchemas'?: Array<Product202407ListingSchemasResponseDataListingSchemas>;
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
//# sourceMappingURL=ListingSchemasResponseData.d.ts.map