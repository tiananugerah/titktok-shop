import { Order202309GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences } from './GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences';
import { Order202309GetOrderListResponseDataOrdersRecipientAddressDistrictInfo } from './GetOrderListResponseDataOrdersRecipientAddressDistrictInfo';
export declare class Order202309GetOrderListResponseDataOrdersRecipientAddress {
    'addressDetail'?: string;
    'addressLine1'?: string;
    'addressLine2'?: string;
    'addressLine3'?: string;
    'addressLine4'?: string;
    'deliveryPreferences'?: Order202309GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences;
    'districtInfo'?: Array<Order202309GetOrderListResponseDataOrdersRecipientAddressDistrictInfo>;
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
//# sourceMappingURL=GetOrderListResponseDataOrdersRecipientAddress.d.ts.map