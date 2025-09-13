import { Product202409PartialEditResponsiblePersonRequestBodyAddress } from './PartialEditResponsiblePersonRequestBodyAddress';
import { Product202409PartialEditResponsiblePersonRequestBodyPhoneNumber } from './PartialEditResponsiblePersonRequestBodyPhoneNumber';
export declare class Product202409PartialEditResponsiblePersonRequestBody {
    'address'?: Product202409PartialEditResponsiblePersonRequestBodyAddress;
    'email'?: string;
    'locale'?: string;
    'name'?: string;
    'phoneNumber'?: Product202409PartialEditResponsiblePersonRequestBodyPhoneNumber;
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
//# sourceMappingURL=PartialEditResponsiblePersonRequestBody.d.ts.map