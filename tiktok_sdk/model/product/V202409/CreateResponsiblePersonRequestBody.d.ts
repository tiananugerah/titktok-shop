import { Product202409CreateResponsiblePersonRequestBodyAddress } from './CreateResponsiblePersonRequestBodyAddress';
import { Product202409CreateResponsiblePersonRequestBodyPhoneNumber } from './CreateResponsiblePersonRequestBodyPhoneNumber';
export declare class Product202409CreateResponsiblePersonRequestBody {
    'address'?: Product202409CreateResponsiblePersonRequestBodyAddress;
    'email'?: string;
    'locale'?: string;
    'name'?: string;
    'phoneNumber'?: Product202409CreateResponsiblePersonRequestBodyPhoneNumber;
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
//# sourceMappingURL=CreateResponsiblePersonRequestBody.d.ts.map