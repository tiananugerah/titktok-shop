"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309ActivateProductResponseDataErrorsDetail = void 0;
class Product202309ActivateProductResponseDataErrorsDetail {
    static getAttributeTypeMap() {
        return Product202309ActivateProductResponseDataErrorsDetail.attributeTypeMap;
    }
}
exports.Product202309ActivateProductResponseDataErrorsDetail = Product202309ActivateProductResponseDataErrorsDetail;
Product202309ActivateProductResponseDataErrorsDetail.discriminator = undefined;
Product202309ActivateProductResponseDataErrorsDetail.attributeTypeMap = [
    {
        "name": "extraErrors",
        "baseName": "extra_errors",
        "type": "Array<Product202309ActivateProductResponseDataErrorsDetailExtraErrors>"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    }
];
//# sourceMappingURL=ActivateProductResponseDataErrorsDetail.js.map