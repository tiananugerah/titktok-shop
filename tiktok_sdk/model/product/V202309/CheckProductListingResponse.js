"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingResponse = void 0;
class Product202309CheckProductListingResponse {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingResponse.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingResponse = Product202309CheckProductListingResponse;
Product202309CheckProductListingResponse.discriminator = undefined;
Product202309CheckProductListingResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309CheckProductListingResponseData"
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
//# sourceMappingURL=CheckProductListingResponse.js.map