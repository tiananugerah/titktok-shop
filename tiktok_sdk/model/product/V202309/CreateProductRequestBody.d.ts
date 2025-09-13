import { Product202309CreateProductRequestBodyCertifications } from './CreateProductRequestBodyCertifications';
import { Product202309CreateProductRequestBodyMainImages } from './CreateProductRequestBodyMainImages';
import { Product202309CreateProductRequestBodyPackageDimensions } from './CreateProductRequestBodyPackageDimensions';
import { Product202309CreateProductRequestBodyPackageWeight } from './CreateProductRequestBodyPackageWeight';
import { Product202309CreateProductRequestBodyProductAttributes } from './CreateProductRequestBodyProductAttributes';
import { Product202309CreateProductRequestBodySizeChart } from './CreateProductRequestBodySizeChart';
import { Product202309CreateProductRequestBodySkus } from './CreateProductRequestBodySkus';
import { Product202309CreateProductRequestBodyVideo } from './CreateProductRequestBodyVideo';
export declare class Product202309CreateProductRequestBody {
    'brandId'?: string;
    'categoryId'?: string;
    'categoryVersion'?: string;
    'certifications'?: Array<Product202309CreateProductRequestBodyCertifications>;
    'deliveryOptionIds'?: Array<string>;
    'description'?: string;
    'externalProductId'?: string;
    'idempotencyKey'?: string;
    'isCodAllowed'?: boolean;
    'isNotForSale'?: boolean;
    'isPreOwned'?: boolean;
    'listingPlatforms'?: Array<string>;
    'mainImages'?: Array<Product202309CreateProductRequestBodyMainImages>;
    'manufacturerIds'?: Array<string>;
    'minimumOrderQuantity'?: number;
    'packageDimensions'?: Product202309CreateProductRequestBodyPackageDimensions;
    'packageWeight'?: Product202309CreateProductRequestBodyPackageWeight;
    'primaryCombinedProductId'?: string;
    'productAttributes'?: Array<Product202309CreateProductRequestBodyProductAttributes>;
    'responsiblePersonIds'?: Array<string>;
    'saveMode'?: string;
    'shippingInsuranceRequirement'?: string;
    'sizeChart'?: Product202309CreateProductRequestBodySizeChart;
    'skus'?: Array<Product202309CreateProductRequestBodySkus>;
    'title'?: string;
    'video'?: Product202309CreateProductRequestBodyVideo;
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
//# sourceMappingURL=CreateProductRequestBody.d.ts.map