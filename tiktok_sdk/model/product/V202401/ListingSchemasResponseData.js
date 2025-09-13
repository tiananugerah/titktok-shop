"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202401ListingSchemasResponseData = void 0;
class Product202401ListingSchemasResponseData {
    static getAttributeTypeMap() {
        return Product202401ListingSchemasResponseData.attributeTypeMap;
    }
}
exports.Product202401ListingSchemasResponseData = Product202401ListingSchemasResponseData;
Product202401ListingSchemasResponseData.discriminator = undefined;
Product202401ListingSchemasResponseData.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Product202401ListingSchemasResponseDataErrors>"
    },
    {
        "name": "listingSchemas",
        "baseName": "listing_schemas",
        "type": "Array<Product202401ListingSchemasResponseDataListingSchemas>"
    }
];
//# sourceMappingURL=ListingSchemasResponseData.js.map