import { ReturnRefund202309GetReturnRecordsResponseDataRecordsImages } from './GetReturnRecordsResponseDataRecordsImages';
import { ReturnRefund202309GetReturnRecordsResponseDataRecordsVideos } from './GetReturnRecordsResponseDataRecordsVideos';
export declare class ReturnRefund202309GetReturnRecordsResponseDataRecords {
    'createTime'?: number;
    'description'?: string;
    'event'?: string;
    'images'?: Array<ReturnRefund202309GetReturnRecordsResponseDataRecordsImages>;
    'note'?: string;
    'reasonText'?: string;
    'role'?: string;
    'videos'?: Array<ReturnRefund202309GetReturnRecordsResponseDataRecordsVideos>;
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
//# sourceMappingURL=GetReturnRecordsResponseDataRecords.d.ts.map