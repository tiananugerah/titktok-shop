"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderListResponseDataOrdersRecipientAddress = void 0;
class Order202309GetOrderListResponseDataOrdersRecipientAddress {
    static getAttributeTypeMap() {
        return Order202309GetOrderListResponseDataOrdersRecipientAddress.attributeTypeMap;
    }
}
exports.Order202309GetOrderListResponseDataOrdersRecipientAddress = Order202309GetOrderListResponseDataOrdersRecipientAddress;
Order202309GetOrderListResponseDataOrdersRecipientAddress.discriminator = undefined;
Order202309GetOrderListResponseDataOrdersRecipientAddress.attributeTypeMap = [
    {
        "name": "addressDetail",
        "baseName": "address_detail",
        "type": "string"
    },
    {
        "name": "addressLine1",
        "baseName": "address_line1",
        "type": "string"
    },
    {
        "name": "addressLine2",
        "baseName": "address_line2",
        "type": "string"
    },
    {
        "name": "addressLine3",
        "baseName": "address_line3",
        "type": "string"
    },
    {
        "name": "addressLine4",
        "baseName": "address_line4",
        "type": "string"
    },
    {
        "name": "deliveryPreferences",
        "baseName": "delivery_preferences",
        "type": "Order202309GetOrderListResponseDataOrdersRecipientAddressDeliveryPreferences"
    },
    {
        "name": "districtInfo",
        "baseName": "district_info",
        "type": "Array<Order202309GetOrderListResponseDataOrdersRecipientAddressDistrictInfo>"
    },
    {
        "name": "firstName",
        "baseName": "first_name",
        "type": "string"
    },
    {
        "name": "firstNameLocalScript",
        "baseName": "first_name_local_script",
        "type": "string"
    },
    {
        "name": "fullAddress",
        "baseName": "full_address",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "last_name",
        "type": "string"
    },
    {
        "name": "lastNameLocalScript",
        "baseName": "last_name_local_script",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phone_number",
        "type": "string"
    },
    {
        "name": "postTown",
        "baseName": "post_town",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postal_code",
        "type": "string"
    },
    {
        "name": "regionCode",
        "baseName": "region_code",
        "type": "string"
    }
];
//# sourceMappingURL=GetOrderListResponseDataOrdersRecipientAddress.js.map