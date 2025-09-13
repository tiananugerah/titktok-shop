"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202407ListingSchemasResponseData = void 0;
class Product202407ListingSchemasResponseData {
    static getAttributeTypeMap() {
        return Product202407ListingSchemasResponseData.attributeTypeMap;
    }
}
exports.Product202407ListingSchemasResponseData = Product202407ListingSchemasResponseData;
Product202407ListingSchemasResponseData.discriminator = undefined;
Product202407ListingSchemasResponseData.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Product202407ListingSchemasResponseDataErrors>"
    },
    {
        "name": "listingSchemas",
        "baseName": "listing_schemas",
        "type": "Array<Product202407ListingSchemasResponseDataListingSchemas>"
    }
];
//# sourceMappingURL=ListingSchemasResponseData.js.map