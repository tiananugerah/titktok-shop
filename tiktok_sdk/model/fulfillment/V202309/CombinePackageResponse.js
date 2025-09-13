"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309CombinePackageResponse = void 0;
class Fulfillment202309CombinePackageResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309CombinePackageResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309CombinePackageResponse = Fulfillment202309CombinePackageResponse;
Fulfillment202309CombinePackageResponse.discriminator = undefined;
Fulfillment202309CombinePackageResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309CombinePackageResponseData"
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
//# sourceMappingURL=CombinePackageResponse.js.map