import { Promotion202406SearchCouponsResponseDataCoupons } from './SearchCouponsResponseDataCoupons';
export declare class Promotion202406SearchCouponsResponseData {
    'coupons'?: Array<Promotion202406SearchCouponsResponseDataCoupons>;
    'nextPageToken'?: string;
    'totalCount'?: number;
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
//# sourceMappingURL=SearchCouponsResponseData.d.ts.map