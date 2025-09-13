"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309InventorySearchResponse = void 0;
class Product202309InventorySearchResponse {
    static getAttributeTypeMap() {
        return Product202309InventorySearchResponse.attributeTypeMap;
    }
}
exports.Product202309InventorySearchResponse = Product202309InventorySearchResponse;
Product202309InventorySearchResponse.discriminator = undefined;
Product202309InventorySearchResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309InventorySearchResponseData"
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
//# sourceMappingURL=InventorySearchResponse.js.map