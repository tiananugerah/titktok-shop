import { Product202309GetGlobalCategoryRulesResponseDataManufacturer } from './GetGlobalCategoryRulesResponseDataManufacturer';
import { Product202309GetGlobalCategoryRulesResponseDataProductCertifications } from './GetGlobalCategoryRulesResponseDataProductCertifications';
import { Product202309GetGlobalCategoryRulesResponseDataResponsiblePerson } from './GetGlobalCategoryRulesResponseDataResponsiblePerson';
import { Product202309GetGlobalCategoryRulesResponseDataSizeChart } from './GetGlobalCategoryRulesResponseDataSizeChart';
export declare class Product202309GetGlobalCategoryRulesResponseData {
    'manufacturer'?: Product202309GetGlobalCategoryRulesResponseDataManufacturer;
    'productCertifications'?: Array<Product202309GetGlobalCategoryRulesResponseDataProductCertifications>;
    'responsiblePerson'?: Product202309GetGlobalCategoryRulesResponseDataResponsiblePerson;
    'sizeChart'?: Product202309GetGlobalCategoryRulesResponseDataSizeChart;
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
//# sourceMappingURL=GetGlobalCategoryRulesResponseData.d.ts.map