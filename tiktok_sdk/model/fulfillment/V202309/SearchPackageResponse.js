"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SearchPackageResponse = void 0;
class Fulfillment202309SearchPackageResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309SearchPackageResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309SearchPackageResponse = Fulfillment202309SearchPackageResponse;
Fulfillment202309SearchPackageResponse.discriminator = undefined;
Fulfillment202309SearchPackageResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309SearchPackageResponseData"
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
//# sourceMappingURL=SearchPackageResponse.js.map