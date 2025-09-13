import { Promotion202309CreateActivityResponseData } from './CreateActivityResponseData';
export declare class Promotion202309CreateActivityResponse {
    'code'?: number;
    'data'?: Promotion202309CreateActivityResponseData;
    'message'?: string;
    'requestId'?: string;
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
//# sourceMappingURL=CreateActivityResponse.d.ts.map