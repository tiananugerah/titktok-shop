"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors = void 0;
class Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors {
    static getAttributeTypeMap() {
        return Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors.attributeTypeMap;
    }
}
exports.Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors = Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors;
Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors.discriminator = undefined;
Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Fulfillment202309UpdatePackageDeliveryStatusResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=UpdatePackageDeliveryStatusResponseDataErrors.js.map