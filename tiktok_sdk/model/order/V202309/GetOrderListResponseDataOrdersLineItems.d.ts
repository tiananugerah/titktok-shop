import { Order202309GetOrderListResponseDataOrdersLineItemsCombinedListingSkus } from './GetOrderListResponseDataOrdersLineItemsCombinedListingSkus';
import { Order202309GetOrderListResponseDataOrdersLineItemsItemTax } from './GetOrderListResponseDataOrdersLineItemsItemTax';
export declare class Order202309GetOrderListResponseDataOrdersLineItems {
    'buyerServiceFee'?: string;
    'cancelReason'?: string;
    'cancelUser'?: string;
    'combinedListingSkus'?: Array<Order202309GetOrderListResponseDataOrdersLineItemsCombinedListingSkus>;
    'currency'?: string;
    'displayStatus'?: string;
    'handlingDurationDays'?: string;
    'id'?: string;
    'isDangerousGood'?: boolean;
    'isGift'?: boolean;
    'itemTax'?: Array<Order202309GetOrderListResponseDataOrdersLineItemsItemTax>;
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
//# sourceMappingURL=GetOrderListResponseDataOrdersLineItems.d.ts.map