"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetHandoverTimeslotsResponse = void 0;
class Fulfillment202309GetHandoverTimeslotsResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309GetHandoverTimeslotsResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309GetHandoverTimeslotsResponse = Fulfillment202309GetHandoverTimeslotsResponse;
Fulfillment202309GetHandoverTimeslotsResponse.discriminator = undefined;
Fulfillment202309GetHandoverTimeslotsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309GetHandoverTimeslotsResponseData"
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
//# sourceMappingURL=GetHandoverTimeslotsResponse.js.map