"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309BatchShipPackagesRequestBody = void 0;
class Fulfillment202309BatchShipPackagesRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309BatchShipPackagesRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309BatchShipPackagesRequestBody = Fulfillment202309BatchShipPackagesRequestBody;
Fulfillment202309BatchShipPackagesRequestBody.discriminator = undefined;
Fulfillment202309BatchShipPackagesRequestBody.attributeTypeMap = [
    {
        "name": "packages",
        "baseName": "packages",
        "type": "Array<Fulfillment202309BatchShipPackagesRequestBodyPackages>"
    }
];
//# sourceMappingURL=BatchShipPackagesRequestBody.js.map