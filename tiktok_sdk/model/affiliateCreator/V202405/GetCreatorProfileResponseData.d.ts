import { AffiliateCreator202405GetCreatorProfileResponseDataAvatar } from './GetCreatorProfileResponseDataAvatar';
export declare class AffiliateCreator202405GetCreatorProfileResponseData {
    'avatar'?: AffiliateCreator202405GetCreatorProfileResponseDataAvatar;
    'creatorUserId'?: string;
    'permissions'?: Array<string>;
    'registerRegion'?: string;
    'selectionRegion'?: string;
    'sellerType'?: string;
    'userType'?: string;
    'username'?: string;
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
//# sourceMappingURL=GetCreatorProfileResponseData.d.ts.map