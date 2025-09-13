"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409CreateManufacturerRequestBody = void 0;
class Product202409CreateManufacturerRequestBody {
    static getAttributeTypeMap() {
        return Product202409CreateManufacturerRequestBody.attributeTypeMap;
    }
}
exports.Product202409CreateManufacturerRequestBody = Product202409CreateManufacturerRequestBody;
Product202409CreateManufacturerRequestBody.discriminator = undefined;
Product202409CreateManufacturerRequestBody.attributeTypeMap = [
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
        "name": "locale",
        "baseName": "locale",
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
        "type": "Product202409CreateManufacturerRequestBodyPhoneNumber"
    },
    {
        "name": "registeredTradeName",
        "baseName": "registered_trade_name",
        "type": "string"
    }
];
//# sourceMappingURL=CreateManufacturerRequestBody.js.map