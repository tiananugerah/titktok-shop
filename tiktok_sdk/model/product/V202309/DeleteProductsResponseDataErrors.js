"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309DeleteProductsResponseDataErrors = void 0;
class Product202309DeleteProductsResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202309DeleteProductsResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202309DeleteProductsResponseDataErrors = Product202309DeleteProductsResponseDataErrors;
Product202309DeleteProductsResponseDataErrors.discriminator = undefined;
Product202309DeleteProductsResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202309DeleteProductsResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=DeleteProductsResponseDataErrors.js.map