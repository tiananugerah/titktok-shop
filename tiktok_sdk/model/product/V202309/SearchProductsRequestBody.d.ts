export declare class Product202309SearchProductsRequestBody {
    'createTimeGe'?: number;
    'createTimeLe'?: number;
    'sellerSkus'?: Array<string>;
    'status'?: string;
    'updateTimeGe'?: number;
    'updateTimeLe'?: number;
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
//# sourceMappingURL=SearchProductsRequestBody.d.ts.map