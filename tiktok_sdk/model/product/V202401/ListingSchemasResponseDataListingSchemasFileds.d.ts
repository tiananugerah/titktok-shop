import { Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues } from './ListingSchemasResponseDataListingSchemasFiledsComplexValues';
import { Product202401ListingSchemasResponseDataListingSchemasFiledsOptions } from './ListingSchemasResponseDataListingSchemasFiledsOptions';
import { Product202401ListingSchemasResponseDataListingSchemasFiledsRules } from './ListingSchemasResponseDataListingSchemasFiledsRules';
export declare class Product202401ListingSchemasResponseDataListingSchemasFileds {
    'complexValues'?: Array<Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues>;
    'id'?: string;
    'name'?: string;
    'options'?: Array<Product202401ListingSchemasResponseDataListingSchemasFiledsOptions>;
    'rules'?: Array<Product202401ListingSchemasResponseDataListingSchemasFiledsRules>;
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
//# sourceMappingURL=ListingSchemasResponseDataListingSchemasFileds.d.ts.map