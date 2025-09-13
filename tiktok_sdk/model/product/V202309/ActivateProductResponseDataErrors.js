"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309ActivateProductResponseDataErrors = void 0;
class Product202309ActivateProductResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202309ActivateProductResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202309ActivateProductResponseDataErrors = Product202309ActivateProductResponseDataErrors;
Product202309ActivateProductResponseDataErrors.discriminator = undefined;
Product202309ActivateProductResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202309ActivateProductResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=ActivateProductResponseDataErrors.js.map