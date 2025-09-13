import { Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsAddress } from './SearchResponsiblePersonsResponseDataResponsiblePersonsAddress';
import { Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber } from './SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber';
export declare class Product202409SearchResponsiblePersonsResponseDataResponsiblePersons {
    'address'?: Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsAddress;
    'email'?: string;
    'id'?: string;
    'name'?: string;
    'phoneNumber'?: Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber;
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
//# sourceMappingURL=SearchResponsiblePersonsResponseDataResponsiblePersons.d.ts.map