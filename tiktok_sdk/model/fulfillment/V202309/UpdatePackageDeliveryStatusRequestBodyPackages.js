"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages = void 0;
class Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages {
    static getAttributeTypeMap() {
        return Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages.attributeTypeMap;
    }
}
exports.Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages = Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages;
Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages.discriminator = undefined;
Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages.attributeTypeMap = [
    {
        "name": "deliveryType",
        "baseName": "delivery_type",
        "type": "string"
    },
    {
        "name": "failDeliveryReason",
        "baseName": "fail_delivery_reason",
        "type": "string"
    },
    {
        "name": "fileType",
        "baseName": "file_type",
        "type": "string"
    },
    {
        "name": "fileUrl",
        "baseName": "file_url",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
//# sourceMappingURL=UpdatePackageDeliveryStatusRequestBodyPackages.js.map