"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalCategoryRulesResponse = void 0;
class Product202309GetGlobalCategoryRulesResponse {
    static getAttributeTypeMap() {
        return Product202309GetGlobalCategoryRulesResponse.attributeTypeMap;
    }
}
exports.Product202309GetGlobalCategoryRulesResponse = Product202309GetGlobalCategoryRulesResponse;
Product202309GetGlobalCategoryRulesResponse.discriminator = undefined;
Product202309GetGlobalCategoryRulesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetGlobalCategoryRulesResponseData"
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
//# sourceMappingURL=GetGlobalCategoryRulesResponse.js.map