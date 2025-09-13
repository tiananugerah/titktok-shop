import { AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks } from './GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks';
import { AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors } from './GenerateAffiliateSharingLinkResponseDataErrors';
export declare class AffiliateCreator202407GenerateAffiliateSharingLinkResponseData {
    'affiliateSharingLinks'?: Array<AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks>;
    'errors'?: Array<AffiliateCreator202407GenerateAffiliateSharingLinkResponseDataErrors>;
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
//# sourceMappingURL=GenerateAffiliateSharingLinkResponseData.d.ts.map