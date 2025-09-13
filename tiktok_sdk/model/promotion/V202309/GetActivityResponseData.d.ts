import { Promotion202309GetActivityResponseDataDiscount } from './GetActivityResponseDataDiscount';
import { Promotion202309GetActivityResponseDataParticipationLimit } from './GetActivityResponseDataParticipationLimit';
import { Promotion202309GetActivityResponseDataProducts } from './GetActivityResponseDataProducts';
export declare class Promotion202309GetActivityResponseData {
    'activityCommands'?: Array<string>;
    'activityId'?: string;
    'activityType'?: string;
    'beginTime'?: number;
    'createTime'?: number;
    'discount'?: Promotion202309GetActivityResponseDataDiscount;
    'durationType'?: string;
    'endTime'?: number;
    'participationLimit'?: Array<Promotion202309GetActivityResponseDataParticipationLimit>;
    'productLevel'?: string;
    'products'?: Array<Promotion202309GetActivityResponseDataProducts>;
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
//# sourceMappingURL=GetActivityResponseData.d.ts.map