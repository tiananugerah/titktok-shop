import { Promotion202309SearchActivitiesResponseDataActivities } from './SearchActivitiesResponseDataActivities';
export declare class Promotion202309SearchActivitiesResponseData {
    'activities'?: Array<Promotion202309SearchActivitiesResponseDataActivities>;
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
//# sourceMappingURL=SearchActivitiesResponseData.d.ts.map