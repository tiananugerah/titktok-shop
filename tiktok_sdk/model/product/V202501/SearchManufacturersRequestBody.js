"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202501SearchManufacturersRequestBody = void 0;
class Product202501SearchManufacturersRequestBody {
    static getAttributeTypeMap() {
        return Product202501SearchManufacturersRequestBody.attributeTypeMap;
    }
}
exports.Product202501SearchManufacturersRequestBody = Product202501SearchManufacturersRequestBody;
Product202501SearchManufacturersRequestBody.discriminator = undefined;
Product202501SearchManufacturersRequestBody.attributeTypeMap = [
    {
        "name": "keyword",
        "baseName": "keyword",
        "type": "string"
    },
    {
        "name": "locales",
        "baseName": "locales",
        "type": "Array<string>"
    },
    {
        "name": "manufacturerIds",
        "baseName": "manufacturer_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=SearchManufacturersRequestBody.js.map