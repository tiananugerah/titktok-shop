"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309UpdateInventoryResponse = void 0;
class Product202309UpdateInventoryResponse {
    static getAttributeTypeMap() {
        return Product202309UpdateInventoryResponse.attributeTypeMap;
    }
}
exports.Product202309UpdateInventoryResponse = Product202309UpdateInventoryResponse;
Product202309UpdateInventoryResponse.discriminator = undefined;
Product202309UpdateInventoryResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309UpdateInventoryResponseData"
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
//# sourceMappingURL=UpdateInventoryResponse.js.map