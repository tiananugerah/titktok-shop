"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409SearchManufacturersResponseDataManufacturers = void 0;
class Product202409SearchManufacturersResponseDataManufacturers {
    static getAttributeTypeMap() {
        return Product202409SearchManufacturersResponseDataManufacturers.attributeTypeMap;
    }
}
exports.Product202409SearchManufacturersResponseDataManufacturers = Product202409SearchManufacturersResponseDataManufacturers;
Product202409SearchManufacturersResponseDataManufacturers.discriminator = undefined;
Product202409SearchManufacturersResponseDataManufacturers.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
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
        "type": "Product202409SearchManufacturersResponseDataManufacturersPhoneNumber"
    },
    {
        "name": "registeredTradeName",
        "baseName": "registered_trade_name",
        "type": "string"
    }
];
//# sourceMappingURL=SearchManufacturersResponseDataManufacturers.js.map