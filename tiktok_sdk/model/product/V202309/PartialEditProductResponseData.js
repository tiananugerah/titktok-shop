"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductResponseData = void 0;
class Product202309PartialEditProductResponseData {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductResponseData.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductResponseData = Product202309PartialEditProductResponseData;
Product202309PartialEditProductResponseData.discriminator = undefined;
Product202309PartialEditProductResponseData.attributeTypeMap = [
    {
        "name": "audit",
        "baseName": "audit",
        "type": "Product202309PartialEditProductResponseDataAudit"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309PartialEditProductResponseDataSkus>"
    }
];
//# sourceMappingURL=PartialEditProductResponseData.js.map