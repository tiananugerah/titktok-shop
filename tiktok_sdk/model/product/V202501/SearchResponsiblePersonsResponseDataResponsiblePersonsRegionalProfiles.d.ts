import { Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress } from './SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress';
import { Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber } from './SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber';
export declare class Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles {
    'address'?: Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesAddress;
    'email'?: string;
    'locale'?: string;
    'name'?: string;
    'phoneNumber'?: Product202501SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfilesPhoneNumber;
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
//# sourceMappingURL=SearchResponsiblePersonsResponseDataResponsiblePersonsRegionalProfiles.d.ts.map