import { Product202401ListingSchemasResponseDataErrors } from './ListingSchemasResponseDataErrors';
import { Product202401ListingSchemasResponseDataListingSchemas } from './ListingSchemasResponseDataListingSchemas';
export declare class Product202401ListingSchemasResponseData {
    'errors'?: Array<Product202401ListingSchemasResponseDataErrors>;
    'listingSchemas'?: Array<Product202401ListingSchemasResponseDataListingSchemas>;
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