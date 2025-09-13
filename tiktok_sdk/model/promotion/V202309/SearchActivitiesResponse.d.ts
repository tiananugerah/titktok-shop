import { Promotion202309SearchActivitiesResponseData } from './SearchActivitiesResponseData';
export declare class Promotion202309SearchActivitiesResponse {
    'code'?: number;
    'data'?: Promotion202309SearchActivitiesResponseData;
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
//# sourceMappingURL=SearchActivitiesResponse.d.ts.map