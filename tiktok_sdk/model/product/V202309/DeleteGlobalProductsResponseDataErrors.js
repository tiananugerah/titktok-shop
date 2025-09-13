"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309DeleteGlobalProductsResponseDataErrors = void 0;
class Product202309DeleteGlobalProductsResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202309DeleteGlobalProductsResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202309DeleteGlobalProductsResponseDataErrors = Product202309DeleteGlobalProductsResponseDataErrors;
Product202309DeleteGlobalProductsResponseDataErrors.discriminator = undefined;
Product202309DeleteGlobalProductsResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202309DeleteGlobalProductsResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=DeleteGlobalProductsResponseDataErrors.js.map