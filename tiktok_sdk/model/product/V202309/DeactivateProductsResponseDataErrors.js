"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309DeactivateProductsResponseDataErrors = void 0;
class Product202309DeactivateProductsResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202309DeactivateProductsResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202309DeactivateProductsResponseDataErrors = Product202309DeactivateProductsResponseDataErrors;
Product202309DeactivateProductsResponseDataErrors.discriminator = undefined;
Product202309DeactivateProductsResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202309DeactivateProductsResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=DeactivateProductsResponseDataErrors.js.map