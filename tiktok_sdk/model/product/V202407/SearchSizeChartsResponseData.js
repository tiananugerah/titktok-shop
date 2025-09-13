"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202407SearchSizeChartsResponseData = void 0;
class Product202407SearchSizeChartsResponseData {
    static getAttributeTypeMap() {
        return Product202407SearchSizeChartsResponseData.attributeTypeMap;
    }
}
exports.Product202407SearchSizeChartsResponseData = Product202407SearchSizeChartsResponseData;
Product202407SearchSizeChartsResponseData.discriminator = undefined;
Product202407SearchSizeChartsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Array<Product202407SearchSizeChartsResponseDataSizeChart>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchSizeChartsResponseData.js.map