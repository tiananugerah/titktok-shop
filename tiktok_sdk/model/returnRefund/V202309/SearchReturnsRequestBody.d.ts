export declare class ReturnRefund202309SearchReturnsRequestBody {
    'arbitrationStatus'?: Array<string>;
    'buyerUserIds'?: Array<string>;
    'createTimeGe'?: number;
    'createTimeLt'?: number;
    'locale'?: string;
    'orderIds'?: Array<string>;
    'returnIds'?: Array<string>;
    'returnStatus'?: Array<string>;
    'returnTypes'?: Array<string>;
    'sellerProposedReturnType'?: Array<string>;
    'updateTimeGe'?: number;
    'updateTimeLt'?: number;
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
//# sourceMappingURL=SearchReturnsRequestBody.d.ts.map