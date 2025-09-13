"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetOrderSplitAttributesResponse = void 0;
class Fulfillment202309GetOrderSplitAttributesResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309GetOrderSplitAttributesResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309GetOrderSplitAttributesResponse = Fulfillment202309GetOrderSplitAttributesResponse;
Fulfillment202309GetOrderSplitAttributesResponse.discriminator = undefined;
Fulfillment202309GetOrderSplitAttributesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309GetOrderSplitAttributesResponseData"
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
//# sourceMappingURL=GetOrderSplitAttributesResponse.js.map