import { AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplicationCreatorFulfillment } from './GetCreatorSampleApplicationDetailResponseDataSampleApplicationCreatorFulfillment';
import { AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplicationSampleProduct } from './GetCreatorSampleApplicationDetailResponseDataSampleApplicationSampleProduct';
export declare class AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplication {
    'activityId'?: string;
    'createTime'?: number;
    'creatorFulfillment'?: AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplicationCreatorFulfillment;
    'id'?: string;
    'mainOrderId'?: string;
    'sampleProduct'?: AffiliateCreator202412GetCreatorSampleApplicationDetailResponseDataSampleApplicationSampleProduct;
    'status'?: string;
    'type'?: string;
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
//# sourceMappingURL=GetCreatorSampleApplicationDetailResponseDataSampleApplication.d.ts.map