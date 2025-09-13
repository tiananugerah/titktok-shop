import { Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions } from './ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions';
import { Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules } from './ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules';
export declare class Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues {
    'id'?: string;
    'name'?: string;
    'options'?: Array<Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesOptions>;
    'rules'?: Array<Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValuesRules>;
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
//# sourceMappingURL=ListingSchemasResponseDataListingSchemasFieldsComplexValues.d.ts.map