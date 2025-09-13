"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdateGlobalInventoryResponse = void 0;
class Product202309UpdateGlobalInventoryResponse {
    static getAttributeTypeMap() {
        return Product202309UpdateGlobalInventoryResponse.attributeTypeMap;
    }
}
exports.Product202309UpdateGlobalInventoryResponse = Product202309UpdateGlobalInventoryResponse;
Product202309UpdateGlobalInventoryResponse.discriminator = undefined;
Product202309UpdateGlobalInventoryResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=UpdateGlobalInventoryResponse.js.map