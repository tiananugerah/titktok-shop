import { Product202309GetCategoryRulesResponseDataCod } from './GetCategoryRulesResponseDataCod';
import { Product202309GetCategoryRulesResponseDataEpr } from './GetCategoryRulesResponseDataEpr';
import { Product202309GetCategoryRulesResponseDataManufacturer } from './GetCategoryRulesResponseDataManufacturer';
import { Product202309GetCategoryRulesResponseDataPackageDimension } from './GetCategoryRulesResponseDataPackageDimension';
import { Product202309GetCategoryRulesResponseDataProductCertifications } from './GetCategoryRulesResponseDataProductCertifications';
import { Product202309GetCategoryRulesResponseDataResponsiblePerson } from './GetCategoryRulesResponseDataResponsiblePerson';
import { Product202309GetCategoryRulesResponseDataSizeChart } from './GetCategoryRulesResponseDataSizeChart';
export declare class Product202309GetCategoryRulesResponseData {
    'allowedSpecialProductTypes'?: Array<string>;
    'cod'?: Product202309GetCategoryRulesResponseDataCod;
    'epr'?: Product202309GetCategoryRulesResponseDataEpr;
    'manufacturer'?: Product202309GetCategoryRulesResponseDataManufacturer;
    'packageDimension'?: Product202309GetCategoryRulesResponseDataPackageDimension;
    'productCertifications'?: Array<Product202309GetCategoryRulesResponseDataProductCertifications>;
    'responsiblePerson'?: Product202309GetCategoryRulesResponseDataResponsiblePerson;
    'sizeChart'?: Product202309GetCategoryRulesResponseDataSizeChart;
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
//# sourceMappingURL=GetCategoryRulesResponseData.d.ts.map