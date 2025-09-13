import { Order202407GetPriceDetailResponseDataLineItems } from './GetPriceDetailResponseDataLineItems';
export declare class Order202407GetPriceDetailResponseData {
    'codFee'?: string;
    'codFeeNetAmount'?: string;
    'currency'?: string;
    'lineItems'?: Array<Order202407GetPriceDetailResponseDataLineItems>;
    'netPriceAmount'?: string;
    'payment'?: string;
    'shippingFeeDeductionPlatform'?: string;
    'shippingFeeDeductionPlatformVoucher'?: string;
    'shippingFeeDeductionSeller'?: string;
    'shippingListPrice'?: string;
    'shippingSalePrice'?: string;
    'skuGiftNetPrice'?: string;
    'skuGiftOriginalPrice'?: string;
    'skuListPrice'?: string;
    'skuSalePrice'?: string;
    'subtotal'?: string;
    'subtotalDeductionPlatform'?: string;
    'subtotalDeductionSeller'?: string;
    'subtotalTaxAmount'?: string;
    'taxAmount'?: string;
    'taxRate'?: string;
    'total'?: string;
    'voucherDeductionPlatform'?: string;
    'voucherDeductionSeller'?: string;
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
//# sourceMappingURL=GetPriceDetailResponseData.d.ts.map