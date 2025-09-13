import { Order202309GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus } from './GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus';
import { Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax } from './GetOrderDetailResponseDataOrdersLineItemsItemTax';
export declare class Order202309GetOrderDetailResponseDataOrdersLineItems {
    'buyerServiceFee'?: string;
    'cancelReason'?: string;
    'cancelUser'?: string;
    'combinedListingSkus'?: Array<Order202309GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus>;
    'currency'?: string;
    'displayStatus'?: string;
    'handlingDurationDays'?: string;
    'id'?: string;
    'isDangerousGood'?: boolean;
    'isGift'?: boolean;
    'itemTax'?: Array<Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax>;
    'needsPrescription'?: boolean;
    'originalPrice'?: string;
    'packageId'?: string;
    'packageStatus'?: string;
    'pfandFee'?: string;
    'platformDiscount'?: string;
    'productId'?: string;
    'productName'?: string;
    'retailDeliveryFee'?: string;
    'rtsTime'?: number;
    'salePrice'?: string;
    'sellerDiscount'?: string;
    'sellerSku'?: string;
    'shippingProviderId'?: string;
    'shippingProviderName'?: string;
    'skuId'?: string;
    'skuImage'?: string;
    'skuName'?: string;
    'skuType'?: string;
    'smallOrderFee'?: string;
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
//# sourceMappingURL=GetOrderDetailResponseDataOrdersLineItems.d.ts.map