"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409CreateManufacturerRequestBodyPhoneNumber = void 0;
class Product202409CreateManufacturerRequestBodyPhoneNumber {
    static getAttributeTypeMap() {
        return Product202409CreateManufacturerRequestBodyPhoneNumber.attributeTypeMap;
    }
}
exports.Product202409CreateManufacturerRequestBodyPhoneNumber = Product202409CreateManufacturerRequestBodyPhoneNumber;
Product202409CreateManufacturerRequestBodyPhoneNumber.discriminator = undefined;
Product202409CreateManufacturerRequestBodyPhoneNumber.attributeTypeMap = [
    {
        "name": "availability",
        "baseName": "availability",
        "type": "string"
    },
    {
        "name": "countryCode",
        "baseName": "country_code",
        "type": "string"
    },
    {
        "name": "localNumber",
        "baseName": "local_number",
        "type": "string"
    }
];
//# sourceMappingURL=CreateManufacturerRequestBodyPhoneNumber.js.map