"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309CreatePackagesResponse = void 0;
class Fulfillment202309CreatePackagesResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309CreatePackagesResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309CreatePackagesResponse = Fulfillment202309CreatePackagesResponse;
Fulfillment202309CreatePackagesResponse.discriminator = undefined;
Fulfillment202309CreatePackagesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309CreatePackagesResponseData"
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
//# sourceMappingURL=CreatePackagesResponse.js.map