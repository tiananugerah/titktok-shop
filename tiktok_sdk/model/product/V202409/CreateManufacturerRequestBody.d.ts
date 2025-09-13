import { Product202409CreateManufacturerRequestBodyPhoneNumber } from './CreateManufacturerRequestBodyPhoneNumber';
export declare class Product202409CreateManufacturerRequestBody {
    'address'?: string;
    'email'?: string;
    'locale'?: string;
    'name'?: string;
    'phoneNumber'?: Product202409CreateManufacturerRequestBodyPhoneNumber;
    'registeredTradeName'?: string;
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
//# sourceMappingURL=CreateManufacturerRequestBody.d.ts.map