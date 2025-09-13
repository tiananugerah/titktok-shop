import { Fulfillment202309GetPackageDetailResponseDataDimension } from './GetPackageDetailResponseDataDimension';
import { Fulfillment202309GetPackageDetailResponseDataInsurance } from './GetPackageDetailResponseDataInsurance';
import { Fulfillment202309GetPackageDetailResponseDataOrders } from './GetPackageDetailResponseDataOrders';
import { Fulfillment202309GetPackageDetailResponseDataPickupSlot } from './GetPackageDetailResponseDataPickupSlot';
import { Fulfillment202309GetPackageDetailResponseDataRecipientAddress } from './GetPackageDetailResponseDataRecipientAddress';
import { Fulfillment202309GetPackageDetailResponseDataSenderAddress } from './GetPackageDetailResponseDataSenderAddress';
import { Fulfillment202309GetPackageDetailResponseDataWeight } from './GetPackageDetailResponseDataWeight';
export declare class Fulfillment202309GetPackageDetailResponseData {
    'createTime'?: number;
    'deliveryOptionId'?: string;
    'deliveryOptionName'?: string;
    'dimension'?: Fulfillment202309GetPackageDetailResponseDataDimension;
    'handoverMethod'?: string;
    'hasMultiSkus'?: boolean;
    'insurance'?: Fulfillment202309GetPackageDetailResponseDataInsurance;
    'lastMileTrackingNumber'?: string;
    'noteTag'?: string;
    'orderLineItemIds'?: Array<string>;
    'orders'?: Array<Fulfillment202309GetPackageDetailResponseDataOrders>;
    'packageId'?: string;
    'packageStatus'?: string;
    'pickupSlot'?: Fulfillment202309GetPackageDetailResponseDataPickupSlot;
    'recipientAddress'?: Fulfillment202309GetPackageDetailResponseDataRecipientAddress;
    'senderAddress'?: Fulfillment202309GetPackageDetailResponseDataSenderAddress;
    'shippingProviderId'?: string;
    'shippingProviderName'?: string;
    'shippingType'?: string;
    'splitAndCombineTag'?: string;
    'trackingNumber'?: string;
    'updateTime'?: number;
    'weight'?: Fulfillment202309GetPackageDetailResponseDataWeight;
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
//# sourceMappingURL=GetPackageDetailResponseData.d.ts.map