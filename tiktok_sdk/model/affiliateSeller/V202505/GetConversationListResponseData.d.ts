import { AffiliateSeller202505GetConversationListResponseDataConversations } from './GetConversationListResponseDataConversations';
export declare class AffiliateSeller202505GetConversationListResponseData {
    'conversations'?: Array<AffiliateSeller202505GetConversationListResponseDataConversations>;
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