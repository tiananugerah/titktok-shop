"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SplitOrdersResponse = void 0;
class Fulfillment202309SplitOrdersResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309SplitOrdersResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309SplitOrdersResponse = Fulfillment202309SplitOrdersResponse;
Fulfillment202309SplitOrdersResponse.discriminator = undefined;
Fulfillment202309SplitOrdersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309SplitOrdersResponseData"
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
//# sourceMappingURL=SplitOrdersResponse.js.map