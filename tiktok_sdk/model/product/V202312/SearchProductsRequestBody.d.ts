export declare class Product202312SearchProductsRequestBody {
    'auditStatus'?: Array<string>;
    'categoryVersion'?: string;
    'createTimeGe'?: number;
    'createTimeLe'?: number;
    'listingPlatforms'?: Array<string>;
    'listingQualityTier'?: string;
    'sellerSkus'?: Array<string>;
    'skuIds'?: Array<string>;
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