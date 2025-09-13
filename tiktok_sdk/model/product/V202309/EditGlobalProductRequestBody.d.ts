import { Product202309EditGlobalProductRequestBodyCertifications } from './EditGlobalProductRequestBodyCertifications';
import { Product202309EditGlobalProductRequestBodyMainImages } from './EditGlobalProductRequestBodyMainImages';
import { Product202309EditGlobalProductRequestBodyManufacturer } from './EditGlobalProductRequestBodyManufacturer';
import { Product202309EditGlobalProductRequestBodyPackageDimensions } from './EditGlobalProductRequestBodyPackageDimensions';
import { Product202309EditGlobalProductRequestBodyPackageWeight } from './EditGlobalProductRequestBodyPackageWeight';
import { Product202309EditGlobalProductRequestBodyProductAttributes } from './EditGlobalProductRequestBodyProductAttributes';
import { Product202309EditGlobalProductRequestBodySizeChart } from './EditGlobalProductRequestBodySizeChart';
import { Product202309EditGlobalProductRequestBodySkus } from './EditGlobalProductRequestBodySkus';
import { Product202309EditGlobalProductRequestBodyVideo } from './EditGlobalProductRequestBodyVideo';
export declare class Product202309EditGlobalProductRequestBody {
    'brandId'?: string;
    'categoryId'?: string;
    'categoryVersion'?: string;
    'certifications'?: Array<Product202309EditGlobalProductRequestBodyCertifications>;
    'description'?: string;
    'externalGlobalProductId'?: string;
    'mainImages'?: Array<Product202309EditGlobalProductRequestBodyMainImages>;
    'manufacturer'?: Product202309EditGlobalProductRequestBodyManufacturer;
    'manufacturerIds'?: Array<string>;
    'packageDimensions'?: Product202309EditGlobalProductRequestBodyPackageDimensions;
    'packageWeight'?: Product202309EditGlobalProductRequestBodyPackageWeight;
    'productAttributes'?: Array<Product202309EditGlobalProductRequestBodyProductAttributes>;
    'responsiblePersonIds'?: Array<string>;
    'sizeChart'?: Product202309EditGlobalProductRequestBodySizeChart;
    'skus'?: Array<Product202309EditGlobalProductRequestBodySkus>;
    'title'?: string;
    'video'?: Product202309EditGlobalProductRequestBodyVideo;
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
//# sourceMappingURL=EditGlobalProductRequestBody.d.ts.map