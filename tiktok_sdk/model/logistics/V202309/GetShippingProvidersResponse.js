"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics202309GetShippingProvidersResponse = void 0;
class Logistics202309GetShippingProvidersResponse {
    static getAttributeTypeMap() {
        return Logistics202309GetShippingProvidersResponse.attributeTypeMap;
    }
}
exports.Logistics202309GetShippingProvidersResponse = Logistics202309GetShippingProvidersResponse;
Logistics202309GetShippingProvidersResponse.discriminator = undefined;
Logistics202309GetShippingProvidersResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Logistics202309GetShippingProvidersResponseData"
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
//# sourceMappingURL=GetShippingProvidersResponse.js.map