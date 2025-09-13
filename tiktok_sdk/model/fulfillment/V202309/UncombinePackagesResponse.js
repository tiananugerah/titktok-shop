"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UncombinePackagesResponse = void 0;
class Fulfillment202309UncombinePackagesResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309UncombinePackagesResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309UncombinePackagesResponse = Fulfillment202309UncombinePackagesResponse;
Fulfillment202309UncombinePackagesResponse.discriminator = undefined;
Fulfillment202309UncombinePackagesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309UncombinePackagesResponseData"
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
//# sourceMappingURL=UncombinePackagesResponse.js.map