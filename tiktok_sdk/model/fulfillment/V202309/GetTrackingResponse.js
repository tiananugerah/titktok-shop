"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetTrackingResponse = void 0;
class Fulfillment202309GetTrackingResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309GetTrackingResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309GetTrackingResponse = Fulfillment202309GetTrackingResponse;
Fulfillment202309GetTrackingResponse.discriminator = undefined;
Fulfillment202309GetTrackingResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309GetTrackingResponseData"
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
//# sourceMappingURL=GetTrackingResponse.js.map