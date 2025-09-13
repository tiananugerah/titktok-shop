import { AffiliateSeller202412GetConversationListResponseDataConversations } from './GetConversationListResponseDataConversations';
export declare class AffiliateSeller202412GetConversationListResponseData {
    'conversations'?: Array<AffiliateSeller202412GetConversationListResponseDataConversations>;
    'hasMore'?: boolean;
    'nextPageToken'?: string;
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
//# sourceMappingURL=GetConversationListResponseData.d.ts.map