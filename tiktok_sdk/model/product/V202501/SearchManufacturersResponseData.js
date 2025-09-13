"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202501SearchManufacturersResponseData = void 0;
class Product202501SearchManufacturersResponseData {
    static getAttributeTypeMap() {
        return Product202501SearchManufacturersResponseData.attributeTypeMap;
    }
}
exports.Product202501SearchManufacturersResponseData = Product202501SearchManufacturersResponseData;
Product202501SearchManufacturersResponseData.discriminator = undefined;
Product202501SearchManufacturersResponseData.attributeTypeMap = [
    {
        "name": "manufacturers",
        "baseName": "manufacturers",
        "type": "Array<Product202501SearchManufacturersResponseDataManufacturers>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchManufacturersResponseData.js.map