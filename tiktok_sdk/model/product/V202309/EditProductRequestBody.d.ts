import { Product202309EditProductRequestBodyCertifications } from './EditProductRequestBodyCertifications';
import { Product202309EditProductRequestBodyMainImages } from './EditProductRequestBodyMainImages';
import { Product202309EditProductRequestBodyPackageDimensions } from './EditProductRequestBodyPackageDimensions';
import { Product202309EditProductRequestBodyPackageWeight } from './EditProductRequestBodyPackageWeight';
import { Product202309EditProductRequestBodyProductAttributes } from './EditProductRequestBodyProductAttributes';
import { Product202309EditProductRequestBodyReplicatedProducts } from './EditProductRequestBodyReplicatedProducts';
import { Product202309EditProductRequestBodySizeChart } from './EditProductRequestBodySizeChart';
import { Product202309EditProductRequestBodySkus } from './EditProductRequestBodySkus';
import { Product202309EditProductRequestBodyVideo } from './EditProductRequestBodyVideo';
export declare class Product202309EditProductRequestBody {
    'brandId'?: string;
    'categoryId'?: string;
    'categoryVersion'?: string;
    'certifications'?: Array<Product202309EditProductRequestBodyCertifications>;
    'deliveryOptionIds'?: Array<string>;
    'description'?: string;
    'externalProductId'?: string;
    'isCodAllowed'?: boolean;
    'isPreOwned'?: boolean;
    'listingPlatforms'?: Array<string>;
    'mainImages'?: Array<Product202309EditProductRequestBodyMainImages>;
    'manufacturerIds'?: Array<string>;
    'minimumOrderQuantity'?: number;
    'packageDimensions'?: Product202309EditProductRequestBodyPackageDimensions;
    'packageWeight'?: Product202309EditProductRequestBodyPackageWeight;
    'productAttributes'?: Array<Product202309EditProductRequestBodyProductAttributes>;
    'replicatedProducts'?: Array<Product202309EditProductRequestBodyReplicatedProducts>;
    'responsiblePersonIds'?: Array<string>;
    'saveMode'?: string;
    'shippingInsuranceRequirement'?: string;
    'sizeChart'?: Product202309EditProductRequestBodySizeChart;
    'skus'?: Array<Product202309EditProductRequestBodySkus>;
    'title'?: string;
    'video'?: Product202309EditProductRequestBodyVideo;
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
//# sourceMappingURL=EditProductRequestBody.d.ts.map