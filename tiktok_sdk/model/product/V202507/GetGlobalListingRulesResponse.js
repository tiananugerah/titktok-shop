"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507GetGlobalListingRulesResponse = void 0;
class Product202507GetGlobalListingRulesResponse {
    static getAttributeTypeMap() {
        return Product202507GetGlobalListingRulesResponse.attributeTypeMap;
    }
}
exports.Product202507GetGlobalListingRulesResponse = Product202507GetGlobalListingRulesResponse;
Product202507GetGlobalListingRulesResponse.discriminator = undefined;
Product202507GetGlobalListingRulesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202507GetGlobalListingRulesResponseData"
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
//# sourceMappingURL=GetGlobalListingRulesResponse.js.map