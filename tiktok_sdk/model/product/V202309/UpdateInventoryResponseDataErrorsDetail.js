"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdateInventoryResponseDataErrorsDetail = void 0;
class Product202309UpdateInventoryResponseDataErrorsDetail {
    static getAttributeTypeMap() {
        return Product202309UpdateInventoryResponseDataErrorsDetail.attributeTypeMap;
    }
}
exports.Product202309UpdateInventoryResponseDataErrorsDetail = Product202309UpdateInventoryResponseDataErrorsDetail;
Product202309UpdateInventoryResponseDataErrorsDetail.discriminator = undefined;
Product202309UpdateInventoryResponseDataErrorsDetail.attributeTypeMap = [
    {
        "name": "extraErrors",
        "baseName": "extra_errors",
        "type": "Array<Product202309UpdateInventoryResponseDataErrorsDetailExtraErrors>"
    },
    {
        "name": "skuId",
        "baseName": "sku_id",
        "type": "string"
    }
];
//# sourceMappingURL=UpdateInventoryResponseDataErrorsDetail.js.map