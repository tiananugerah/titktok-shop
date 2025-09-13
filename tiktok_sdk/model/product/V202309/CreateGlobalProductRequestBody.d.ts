import { Product202309CreateGlobalProductRequestBodyCertifications } from './CreateGlobalProductRequestBodyCertifications';
import { Product202309CreateGlobalProductRequestBodyMainImages } from './CreateGlobalProductRequestBodyMainImages';
import { Product202309CreateGlobalProductRequestBodyManufacturer } from './CreateGlobalProductRequestBodyManufacturer';
import { Product202309CreateGlobalProductRequestBodyPackageDimensions } from './CreateGlobalProductRequestBodyPackageDimensions';
import { Product202309CreateGlobalProductRequestBodyPackageWeight } from './CreateGlobalProductRequestBodyPackageWeight';
import { Product202309CreateGlobalProductRequestBodyProductAttributes } from './CreateGlobalProductRequestBodyProductAttributes';
import { Product202309CreateGlobalProductRequestBodySizeChart } from './CreateGlobalProductRequestBodySizeChart';
import { Product202309CreateGlobalProductRequestBodySkus } from './CreateGlobalProductRequestBodySkus';
import { Product202309CreateGlobalProductRequestBodyVideo } from './CreateGlobalProductRequestBodyVideo';
export declare class Product202309CreateGlobalProductRequestBody {
    'brandId'?: string;
    'categoryId'?: string;
    'categoryVersion'?: string;
    'certifications'?: Array<Product202309CreateGlobalProductRequestBodyCertifications>;
    'description'?: string;
    'externalGlobalProductId'?: string;
    'mainImages'?: Array<Product202309CreateGlobalProductRequestBodyMainImages>;
    'manufacturer'?: Product202309CreateGlobalProductRequestBodyManufacturer;
    'manufacturerIds'?: Array<string>;
    'packageDimensions'?: Product202309CreateGlobalProductRequestBodyPackageDimensions;
    'packageWeight'?: Product202309CreateGlobalProductRequestBodyPackageWeight;
    'productAttributes'?: Array<Product202309CreateGlobalProductRequestBodyProductAttributes>;
    'responsiblePersonIds'?: Array<string>;
    'sizeChart'?: Product202309CreateGlobalProductRequestBodySizeChart;
    'skus'?: Array<Product202309CreateGlobalProductRequestBodySkus>;
    'sourceLocale'?: string;
    'title'?: string;
    'video'?: Product202309CreateGlobalProductRequestBodyVideo;
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
//# sourceMappingURL=CreateGlobalProductRequestBody.d.ts.map