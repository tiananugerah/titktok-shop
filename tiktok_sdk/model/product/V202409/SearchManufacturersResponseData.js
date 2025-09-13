"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409SearchManufacturersResponseData = void 0;
class Product202409SearchManufacturersResponseData {
    static getAttributeTypeMap() {
        return Product202409SearchManufacturersResponseData.attributeTypeMap;
    }
}
exports.Product202409SearchManufacturersResponseData = Product202409SearchManufacturersResponseData;
Product202409SearchManufacturersResponseData.discriminator = undefined;
Product202409SearchManufacturersResponseData.attributeTypeMap = [
    {
        "name": "manufacturers",
        "baseName": "manufacturers",
        "type": "Array<Product202409SearchManufacturersResponseDataManufacturers>"
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