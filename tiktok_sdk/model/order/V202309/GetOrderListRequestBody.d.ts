export declare class Order202309GetOrderListRequestBody {
    'buyerUserId'?: string;
    'createTimeGe'?: number;
    'createTimeLt'?: number;
    'isBuyerRequestCancel'?: boolean;
    'orderStatus'?: string;
    'shippingType'?: string;
    'updateTimeGe'?: number;
    'updateTimeLt'?: number;
    'warehouseIds'?: Array<string>;
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
//# sourceMappingURL=GetOrderListRequestBody.d.ts.map