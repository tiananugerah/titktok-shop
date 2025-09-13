"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507ReplicateProductResponseDataErrors = void 0;
class Product202507ReplicateProductResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202507ReplicateProductResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202507ReplicateProductResponseDataErrors = Product202507ReplicateProductResponseDataErrors;
Product202507ReplicateProductResponseDataErrors.discriminator = undefined;
Product202507ReplicateProductResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202507ReplicateProductResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=ReplicateProductResponseDataErrors.js.map