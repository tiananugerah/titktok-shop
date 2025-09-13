import { Promotion202309SearchActivitiesResponseDataActivitiesDiscount } from './SearchActivitiesResponseDataActivitiesDiscount';
import { Promotion202309SearchActivitiesResponseDataActivitiesParticipationLimit } from './SearchActivitiesResponseDataActivitiesParticipationLimit';
export declare class Promotion202309SearchActivitiesResponseDataActivities {
    'activityCommands'?: Array<string>;
    'activityType'?: string;
    'beginTime'?: number;
    'createTime'?: number;
    'discount'?: Promotion202309SearchActivitiesResponseDataActivitiesDiscount;
    'durationType'?: string;
    'endTime'?: number;
    'id'?: string;
    'participationLimit'?: Array<Promotion202309SearchActivitiesResponseDataActivitiesParticipationLimit>;
    'productLevel'?: string;
    'status'?: string;
    'title'?: string;
    'updateTime'?: number;
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
//# sourceMappingURL=SearchActivitiesResponseDataActivities.d.ts.map