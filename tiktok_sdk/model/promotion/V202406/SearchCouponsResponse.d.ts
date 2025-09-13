import { Promotion202406SearchCouponsResponseData } from './SearchCouponsResponseData';
export declare class Promotion202406SearchCouponsResponse {
    'code'?: number;
    'data'?: Promotion202406SearchCouponsResponseData;
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
//# sourceMappingURL=SearchCouponsResponse.d.ts.map