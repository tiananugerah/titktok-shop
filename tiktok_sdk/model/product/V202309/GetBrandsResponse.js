"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetBrandsResponse = void 0;
class Product202309GetBrandsResponse {
    static getAttributeTypeMap() {
        return Product202309GetBrandsResponse.attributeTypeMap;
    }
}
exports.Product202309GetBrandsResponse = Product202309GetBrandsResponse;
Product202309GetBrandsResponse.discriminator = undefined;
Product202309GetBrandsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetBrandsResponseData"
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
//# sourceMappingURL=GetBrandsResponse.js.map