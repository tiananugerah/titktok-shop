import { Product202309CheckProductListingRequestBodyCertifications } from './CheckProductListingRequestBodyCertifications';
import { Product202309CheckProductListingRequestBodyMainImages } from './CheckProductListingRequestBodyMainImages';
import { Product202309CheckProductListingRequestBodyPackageDimensions } from './CheckProductListingRequestBodyPackageDimensions';
import { Product202309CheckProductListingRequestBodyPackageWeight } from './CheckProductListingRequestBodyPackageWeight';
import { Product202309CheckProductListingRequestBodyProductAttributes } from './CheckProductListingRequestBodyProductAttributes';
import { Product202309CheckProductListingRequestBodySizeChart } from './CheckProductListingRequestBodySizeChart';
import { Product202309CheckProductListingRequestBodySkus } from './CheckProductListingRequestBodySkus';
import { Product202309CheckProductListingRequestBodyVideo } from './CheckProductListingRequestBodyVideo';
export declare class Product202309CheckProductListingRequestBody {
    'brandId'?: string;
    'categoryId'?: string;
    'certifications'?: Array<Product202309CheckProductListingRequestBodyCertifications>;
    'deliveryOptionIds'?: Array<string>;
    'description'?: string;
    'externalProductId'?: string;
    'isCodAllowed'?: boolean;
    'isPreOwned'?: boolean;
    'listingPlatforms'?: Array<string>;
    'mainImages'?: Array<Product202309CheckProductListingRequestBodyMainImages>;
    'manufacturerIds'?: Array<string>;
    'minimumOrderQuantity'?: number;
    'packageDimensions'?: Product202309CheckProductListingRequestBodyPackageDimensions;
    'packageWeight'?: Product202309CheckProductListingRequestBodyPackageWeight;
    'primaryCombinedProductId'?: string;
    'productAttributes'?: Array<Product202309CheckProductListingRequestBodyProductAttributes>;
    'responsiblePersonIds'?: Array<string>;
    'shippingInsuranceRequirement'?: string;
    'sizeChart'?: Product202309CheckProductListingRequestBodySizeChart;
    'skus'?: Array<Product202309CheckProductListingRequestBodySkus>;
    'title'?: string;
    'video'?: Product202309CheckProductListingRequestBodyVideo;
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
//# sourceMappingURL=CheckProductListingRequestBody.d.ts.map