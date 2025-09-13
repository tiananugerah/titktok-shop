import { Product202309PartialEditProductRequestBodyCertifications } from './PartialEditProductRequestBodyCertifications';
import { Product202309PartialEditProductRequestBodyMainImages } from './PartialEditProductRequestBodyMainImages';
import { Product202309PartialEditProductRequestBodyPackageDimensions } from './PartialEditProductRequestBodyPackageDimensions';
import { Product202309PartialEditProductRequestBodyPackageWeight } from './PartialEditProductRequestBodyPackageWeight';
import { Product202309PartialEditProductRequestBodyProductAttributes } from './PartialEditProductRequestBodyProductAttributes';
import { Product202309PartialEditProductRequestBodyReplicatedProducts } from './PartialEditProductRequestBodyReplicatedProducts';
import { Product202309PartialEditProductRequestBodySizeChart } from './PartialEditProductRequestBodySizeChart';
import { Product202309PartialEditProductRequestBodySkus } from './PartialEditProductRequestBodySkus';
import { Product202309PartialEditProductRequestBodyVideo } from './PartialEditProductRequestBodyVideo';
export declare class Product202309PartialEditProductRequestBody {
    'brandId'?: string;
    'certifications'?: Array<Product202309PartialEditProductRequestBodyCertifications>;
    'description'?: string;
    'externalProductId'?: string;
    'isCodAllowed'?: boolean;
    'listingPlatforms'?: Array<string>;
    'mainImages'?: Array<Product202309PartialEditProductRequestBodyMainImages>;
    'manufacturerIds'?: Array<string>;
    'packageDimensions'?: Product202309PartialEditProductRequestBodyPackageDimensions;
    'packageWeight'?: Product202309PartialEditProductRequestBodyPackageWeight;
    'productAttributes'?: Array<Product202309PartialEditProductRequestBodyProductAttributes>;
    'replicatedProducts'?: Array<Product202309PartialEditProductRequestBodyReplicatedProducts>;
    'responsiblePersonIds'?: Array<string>;
    'saveMode'?: string;
    'sizeChart'?: Product202309PartialEditProductRequestBodySizeChart;
    'skus'?: Array<Product202309PartialEditProductRequestBodySkus>;
    'title'?: string;
    'video'?: Product202309PartialEditProductRequestBodyVideo;
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
//# sourceMappingURL=PartialEditProductRequestBody.d.ts.map