import { Promotion202309GetActivityResponseData } from './GetActivityResponseData';
export declare class Promotion202309GetActivityResponse {
    'code'?: number;
    'data'?: Promotion202309GetActivityResponseData;
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
//# sourceMappingURL=GetActivityResponse.d.ts.map