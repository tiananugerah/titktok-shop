"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateCustomBrandsResponse = void 0;
class Product202309CreateCustomBrandsResponse {
    static getAttributeTypeMap() {
        return Product202309CreateCustomBrandsResponse.attributeTypeMap;
    }
}
exports.Product202309CreateCustomBrandsResponse = Product202309CreateCustomBrandsResponse;
Product202309CreateCustomBrandsResponse.discriminator = undefined;
Product202309CreateCustomBrandsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309CreateCustomBrandsResponseData"
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
//# sourceMappingURL=CreateCustomBrandsResponse.js.map