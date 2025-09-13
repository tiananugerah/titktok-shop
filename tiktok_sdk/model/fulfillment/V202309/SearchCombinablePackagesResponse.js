"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SearchCombinablePackagesResponse = void 0;
class Fulfillment202309SearchCombinablePackagesResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309SearchCombinablePackagesResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309SearchCombinablePackagesResponse = Fulfillment202309SearchCombinablePackagesResponse;
Fulfillment202309SearchCombinablePackagesResponse.discriminator = undefined;
Fulfillment202309SearchCombinablePackagesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309SearchCombinablePackagesResponseData"
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
//# sourceMappingURL=SearchCombinablePackagesResponse.js.map