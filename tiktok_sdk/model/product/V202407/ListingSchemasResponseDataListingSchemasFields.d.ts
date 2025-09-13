import { Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues } from './ListingSchemasResponseDataListingSchemasFieldsComplexValues';
import { Product202407ListingSchemasResponseDataListingSchemasFieldsOptions } from './ListingSchemasResponseDataListingSchemasFieldsOptions';
import { Product202407ListingSchemasResponseDataListingSchemasFieldsRules } from './ListingSchemasResponseDataListingSchemasFieldsRules';
export declare class Product202407ListingSchemasResponseDataListingSchemasFields {
    'complexValues'?: Array<Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues>;
    'id'?: string;
    'name'?: string;
    'options'?: Array<Product202407ListingSchemasResponseDataListingSchemasFieldsOptions>;
    'rules'?: Array<Product202407ListingSchemasResponseDataListingSchemasFieldsRules>;
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
//# sourceMappingURL=ListingSchemasResponseDataListingSchemasFields.d.ts.map