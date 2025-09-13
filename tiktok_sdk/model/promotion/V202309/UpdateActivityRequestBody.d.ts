import { Promotion202309UpdateActivityRequestBodyDiscount } from './UpdateActivityRequestBodyDiscount';
import { Promotion202309UpdateActivityRequestBodyParticipationLimit } from './UpdateActivityRequestBodyParticipationLimit';
export declare class Promotion202309UpdateActivityRequestBody {
    'beginTime'?: number;
    'discount'?: Promotion202309UpdateActivityRequestBodyDiscount;
    'durationType'?: string;
    'endTime'?: number;
    'participationLimit'?: Array<Promotion202309UpdateActivityRequestBodyParticipationLimit>;
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
//# sourceMappingURL=UpdateActivityRequestBody.d.ts.map