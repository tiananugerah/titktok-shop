"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecoverProductsResponseDataErrors = void 0;
class Product202309RecoverProductsResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202309RecoverProductsResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202309RecoverProductsResponseDataErrors = Product202309RecoverProductsResponseDataErrors;
Product202309RecoverProductsResponseDataErrors.discriminator = undefined;
Product202309RecoverProductsResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202309RecoverProductsResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=RecoverProductsResponseDataErrors.js.map