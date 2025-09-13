export declare class ReturnRefund202309SearchCancellationsRequestBody {
    'buyerUserIds'?: Array<string>;
    'cancelIds'?: Array<string>;
    'cancelStatus'?: Array<string>;
    'cancelTypes'?: Array<string>;
    'createTimeGe'?: number;
    'createTimeLt'?: number;
    'locale'?: string;
    'orderIds'?: Array<string>;
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
//# sourceMappingURL=SearchCancellationsRequestBody.d.ts.map