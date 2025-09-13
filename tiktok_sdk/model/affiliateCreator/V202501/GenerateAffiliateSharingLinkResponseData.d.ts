import { AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks } from './GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks';
import { AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors } from './GenerateAffiliateSharingLinkResponseDataErrors';
export declare class AffiliateCreator202501GenerateAffiliateSharingLinkResponseData {
    'affiliateSharingLinks'?: Array<AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataAffiliateSharingLinks>;
    'errors'?: Array<AffiliateCreator202501GenerateAffiliateSharingLinkResponseDataErrors>;
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