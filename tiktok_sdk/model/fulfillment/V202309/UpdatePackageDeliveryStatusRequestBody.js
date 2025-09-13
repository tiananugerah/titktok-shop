"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UpdatePackageDeliveryStatusRequestBody = void 0;
class Fulfillment202309UpdatePackageDeliveryStatusRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309UpdatePackageDeliveryStatusRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309UpdatePackageDeliveryStatusRequestBody = Fulfillment202309UpdatePackageDeliveryStatusRequestBody;
Fulfillment202309UpdatePackageDeliveryStatusRequestBody.discriminator = undefined;
Fulfillment202309UpdatePackageDeliveryStatusRequestBody.attributeTypeMap = [
    {
        "name": "packages",
        "baseName": "packages",
        "type": "Array<Fulfillment202309UpdatePackageDeliveryStatusRequestBodyPackages>"
    }
];
//# sourceMappingURL=UpdatePackageDeliveryStatusRequestBody.js.map