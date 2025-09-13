"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetBrandsResponseData = void 0;
class Product202309GetBrandsResponseData {
    static getAttributeTypeMap() {
        return Product202309GetBrandsResponseData.attributeTypeMap;
    }
}
exports.Product202309GetBrandsResponseData = Product202309GetBrandsResponseData;
Product202309GetBrandsResponseData.discriminator = undefined;
Product202309GetBrandsResponseData.attributeTypeMap = [
    {
        "name": "brands",
        "baseName": "brands",
        "type": "Array<Product202309GetBrandsResponseDataBrands>"
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
//# sourceMappingURL=GetBrandsResponseData.js.map