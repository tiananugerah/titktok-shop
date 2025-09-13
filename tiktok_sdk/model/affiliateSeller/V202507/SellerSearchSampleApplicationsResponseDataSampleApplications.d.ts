import { AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator } from './SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator';
import { AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplicationsProduct } from './SellerSearchSampleApplicationsResponseDataSampleApplicationsProduct';
export declare class AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications {
    'approveExpirationTime'?: number;
    'availableQuantity'?: number;
    'commissionRate'?: string;
    'creator'?: AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator;
    'disapprovableReasons'?: Array<string>;
    'fulfillmentStatus'?: string;
    'id'?: string;
    'isApprovable'?: boolean;
    'orderId'?: string;
    'partnerName'?: string;
    'product'?: AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplicationsProduct;
    'shipmentExpirationTime'?: number;
    'status'?: string;
    'trackingNumber'?: string;
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
//# sourceMappingURL=SellerSearchSampleApplicationsResponseDataSampleApplications.d.ts.map