import { Promotion202309CreateActivityRequestBodyDiscount } from './CreateActivityRequestBodyDiscount';
import { Promotion202309CreateActivityRequestBodyParticipationLimit } from './CreateActivityRequestBodyParticipationLimit';
export declare class Promotion202309CreateActivityRequestBody {
    'activityType'?: string;
    'beginTime'?: number;
    'discount'?: Promotion202309CreateActivityRequestBodyDiscount;
    'durationType'?: string;
    'endTime'?: number;
    'participationLimit'?: Array<Promotion202309CreateActivityRequestBodyParticipationLimit>;
    'productLevel'?: string;
    'title'?: string;
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
//# sourceMappingURL=CreateActivityRequestBody.d.ts.map