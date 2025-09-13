"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409PartialEditManufacturerRequestBody = void 0;
class Product202409PartialEditManufacturerRequestBody {
    static getAttributeTypeMap() {
        return Product202409PartialEditManufacturerRequestBody.attributeTypeMap;
    }
}
exports.Product202409PartialEditManufacturerRequestBody = Product202409PartialEditManufacturerRequestBody;
Product202409PartialEditManufacturerRequestBody.discriminator = undefined;
Product202409PartialEditManufacturerRequestBody.attributeTypeMap = [
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
        "type": "Product202409PartialEditManufacturerRequestBodyPhoneNumber"
    },
    {
        "name": "registeredTradeName",
        "baseName": "registered_trade_name",
        "type": "string"
    }
];
//# sourceMappingURL=PartialEditManufacturerRequestBody.js.map