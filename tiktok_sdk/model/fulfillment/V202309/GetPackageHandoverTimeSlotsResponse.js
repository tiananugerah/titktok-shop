"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetPackageHandoverTimeSlotsResponse = void 0;
class Fulfillment202309GetPackageHandoverTimeSlotsResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309GetPackageHandoverTimeSlotsResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309GetPackageHandoverTimeSlotsResponse = Fulfillment202309GetPackageHandoverTimeSlotsResponse;
Fulfillment202309GetPackageHandoverTimeSlotsResponse.discriminator = undefined;
Fulfillment202309GetPackageHandoverTimeSlotsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309GetPackageHandoverTimeSlotsResponseData"
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
//# sourceMappingURL=GetPackageHandoverTimeSlotsResponse.js.map