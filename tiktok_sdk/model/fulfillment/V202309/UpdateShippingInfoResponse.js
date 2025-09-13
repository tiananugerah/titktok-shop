"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UpdateShippingInfoResponse = void 0;
class Fulfillment202309UpdateShippingInfoResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309UpdateShippingInfoResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309UpdateShippingInfoResponse = Fulfillment202309UpdateShippingInfoResponse;
Fulfillment202309UpdateShippingInfoResponse.discriminator = undefined;
Fulfillment202309UpdateShippingInfoResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=UpdateShippingInfoResponse.js.map