import { Product202309GetGlobalProductResponseDataBrand } from './GetGlobalProductResponseDataBrand';
import { Product202309GetGlobalProductResponseDataCategory } from './GetGlobalProductResponseDataCategory';
import { Product202309GetGlobalProductResponseDataCertifications } from './GetGlobalProductResponseDataCertifications';
import { Product202309GetGlobalProductResponseDataMainImages } from './GetGlobalProductResponseDataMainImages';
import { Product202309GetGlobalProductResponseDataManufacturer } from './GetGlobalProductResponseDataManufacturer';
import { Product202309GetGlobalProductResponseDataPackageDimensions } from './GetGlobalProductResponseDataPackageDimensions';
import { Product202309GetGlobalProductResponseDataPackageWeight } from './GetGlobalProductResponseDataPackageWeight';
import { Product202309GetGlobalProductResponseDataProductAttributes } from './GetGlobalProductResponseDataProductAttributes';
import { Product202309GetGlobalProductResponseDataProducts } from './GetGlobalProductResponseDataProducts';
import { Product202309GetGlobalProductResponseDataSizeChart } from './GetGlobalProductResponseDataSizeChart';
import { Product202309GetGlobalProductResponseDataSkus } from './GetGlobalProductResponseDataSkus';
import { Product202309GetGlobalProductResponseDataVideo } from './GetGlobalProductResponseDataVideo';
export declare class Product202309GetGlobalProductResponseData {
    'brand'?: Product202309GetGlobalProductResponseDataBrand;
    'category'?: Product202309GetGlobalProductResponseDataCategory;
    'certifications'?: Array<Product202309GetGlobalProductResponseDataCertifications>;
    'createTime'?: number;
    'description'?: string;
    'externalGlobalProductId'?: string;
    'globalSellerId'?: string;
    'id'?: string;
    'mainImages'?: Array<Product202309GetGlobalProductResponseDataMainImages>;
    'manufacturer'?: Product202309GetGlobalProductResponseDataManufacturer;
    'manufacturerIds'?: Array<string>;
    'packageDimensions'?: Product202309GetGlobalProductResponseDataPackageDimensions;
    'packageWeight'?: Product202309GetGlobalProductResponseDataPackageWeight;
    'productAttributes'?: Array<Product202309GetGlobalProductResponseDataProductAttributes>;
    'products'?: Array<Product202309GetGlobalProductResponseDataProducts>;
    'responsiblePersonIds'?: Array<string>;
    'sizeChart'?: Product202309GetGlobalProductResponseDataSizeChart;
    'skus'?: Array<Product202309GetGlobalProductResponseDataSkus>;
    'sourceLocale'?: string;
    'title'?: string;
    'updateTime'?: number;
    'video'?: Product202309GetGlobalProductResponseDataVideo;
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
//# sourceMappingURL=GetGlobalProductResponseData.d.ts.map