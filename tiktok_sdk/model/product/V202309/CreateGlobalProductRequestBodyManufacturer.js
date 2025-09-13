"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateGlobalProductRequestBodyManufacturer = void 0;
class Product202309CreateGlobalProductRequestBodyManufacturer {
    static getAttributeTypeMap() {
        return Product202309CreateGlobalProductRequestBodyManufacturer.attributeTypeMap;
    }
}
exports.Product202309CreateGlobalProductRequestBodyManufacturer = Product202309CreateGlobalProductRequestBodyManufacturer;
Product202309CreateGlobalProductRequestBodyManufacturer.discriminator = undefined;
Product202309CreateGlobalProductRequestBodyManufacturer.attributeTypeMap = [
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
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phone_number",
        "type": "string"
    }
];
//# sourceMappingURL=CreateGlobalProductRequestBodyManufacturer.js.map