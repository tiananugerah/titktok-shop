"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409SearchManufacturersRequestBody = void 0;
class Product202409SearchManufacturersRequestBody {
    static getAttributeTypeMap() {
        return Product202409SearchManufacturersRequestBody.attributeTypeMap;
    }
}
exports.Product202409SearchManufacturersRequestBody = Product202409SearchManufacturersRequestBody;
Product202409SearchManufacturersRequestBody.discriminator = undefined;
Product202409SearchManufacturersRequestBody.attributeTypeMap = [
    {
        "name": "keyword",
        "baseName": "keyword",
        "type": "string"
    },
    {
        "name": "manufacturerIds",
        "baseName": "manufacturer_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=SearchManufacturersRequestBody.js.map