import { Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions } from './ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions';
import { Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules } from './ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules';
export declare class Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues {
    'id'?: string;
    'name'?: string;
    'options'?: Array<Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesOptions>;
    'rules'?: Array<Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValuesRules>;
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
//# sourceMappingURL=ListingSchemasResponseDataListingSchemasFiledsComplexValues.d.ts.map