import { Order202309GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences } from './GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences';
import { Order202309GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo } from './GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo';
export declare class Order202309GetOrderDetailResponseDataOrdersRecipientAddress {
    'addressDetail'?: string;
    'addressLine1'?: string;
    'addressLine2'?: string;
    'addressLine3'?: string;
    'addressLine4'?: string;
    'deliveryPreferences'?: Order202309GetOrderDetailResponseDataOrdersRecipientAddressDeliveryPreferences;
    'districtInfo'?: Array<Order202309GetOrderDetailResponseDataOrdersRecipientAddressDistrictInfo>;
    'firstName'?: string;
    'firstNameLocalScript'?: string;
    'fullAddress'?: string;
    'lastName'?: string;
    'lastNameLocalScript'?: string;
    'name'?: string;
    'phoneNumber'?: string;
    'postTown'?: string;
    'postalCode'?: string;
    'regionCode'?: string;
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
//# sourceMappingURL=GetOrderDetailResponseDataOrdersRecipientAddress.d.ts.map