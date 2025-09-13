"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202407CreateFirstMileBundleResponse = void 0;
class Fulfillment202407CreateFirstMileBundleResponse {
    static getAttributeTypeMap() {
        return Fulfillment202407CreateFirstMileBundleResponse.attributeTypeMap;
    }
}
exports.Fulfillment202407CreateFirstMileBundleResponse = Fulfillment202407CreateFirstMileBundleResponse;
Fulfillment202407CreateFirstMileBundleResponse.discriminator = undefined;
Fulfillment202407CreateFirstMileBundleResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202407CreateFirstMileBundleResponseData"
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
//# sourceMappingURL=CreateFirstMileBundleResponse.js.map