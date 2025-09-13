"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecoverProductsResponse = void 0;
class Product202309RecoverProductsResponse {
    static getAttributeTypeMap() {
        return Product202309RecoverProductsResponse.attributeTypeMap;
    }
}
exports.Product202309RecoverProductsResponse = Product202309RecoverProductsResponse;
Product202309RecoverProductsResponse.discriminator = undefined;
Product202309RecoverProductsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309RecoverProductsResponseData"
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
//# sourceMappingURL=RecoverProductsResponse.js.map