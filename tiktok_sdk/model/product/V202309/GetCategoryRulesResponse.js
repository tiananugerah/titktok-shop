"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetCategoryRulesResponse = void 0;
class Product202309GetCategoryRulesResponse {
    static getAttributeTypeMap() {
        return Product202309GetCategoryRulesResponse.attributeTypeMap;
    }
}
exports.Product202309GetCategoryRulesResponse = Product202309GetCategoryRulesResponse;
Product202309GetCategoryRulesResponse.discriminator = undefined;
Product202309GetCategoryRulesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetCategoryRulesResponseData"
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
//# sourceMappingURL=GetCategoryRulesResponse.js.map