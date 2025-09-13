import { Event202309GetShopWebhooksResponseData } from './GetShopWebhooksResponseData';
export declare class Event202309GetShopWebhooksResponse {
    'code'?: number;
    'data'?: Event202309GetShopWebhooksResponseData;
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
//# sourceMappingURL=GetShopWebhooksResponse.d.ts.map