"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UpdatePackageDeliveryStatusResponse = void 0;
class Fulfillment202309UpdatePackageDeliveryStatusResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309UpdatePackageDeliveryStatusResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309UpdatePackageDeliveryStatusResponse = Fulfillment202309UpdatePackageDeliveryStatusResponse;
Fulfillment202309UpdatePackageDeliveryStatusResponse.discriminator = undefined;
Fulfillment202309UpdatePackageDeliveryStatusResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309UpdatePackageDeliveryStatusResponseData"
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
//# sourceMappingURL=UpdatePackageDeliveryStatusResponse.js.map