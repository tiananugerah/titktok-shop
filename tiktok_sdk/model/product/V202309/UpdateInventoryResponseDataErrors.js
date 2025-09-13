"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdateInventoryResponseDataErrors = void 0;
class Product202309UpdateInventoryResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202309UpdateInventoryResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202309UpdateInventoryResponseDataErrors = Product202309UpdateInventoryResponseDataErrors;
Product202309UpdateInventoryResponseDataErrors.discriminator = undefined;
Product202309UpdateInventoryResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202309UpdateInventoryResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=UpdateInventoryResponseDataErrors.js.map