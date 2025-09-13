"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetEligibleShippingServiceResponse = void 0;
class Fulfillment202309GetEligibleShippingServiceResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309GetEligibleShippingServiceResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309GetEligibleShippingServiceResponse = Fulfillment202309GetEligibleShippingServiceResponse;
Fulfillment202309GetEligibleShippingServiceResponse.discriminator = undefined;
Fulfillment202309GetEligibleShippingServiceResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309GetEligibleShippingServiceResponseData"
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
//# sourceMappingURL=GetEligibleShippingServiceResponse.js.map