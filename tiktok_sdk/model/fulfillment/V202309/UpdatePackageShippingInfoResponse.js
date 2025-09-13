"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UpdatePackageShippingInfoResponse = void 0;
class Fulfillment202309UpdatePackageShippingInfoResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309UpdatePackageShippingInfoResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309UpdatePackageShippingInfoResponse = Fulfillment202309UpdatePackageShippingInfoResponse;
Fulfillment202309UpdatePackageShippingInfoResponse.discriminator = undefined;
Fulfillment202309UpdatePackageShippingInfoResponse.attributeTypeMap = [
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
//# sourceMappingURL=UpdatePackageShippingInfoResponse.js.map