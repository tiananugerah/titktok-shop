"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyChain202309ConfirmPackageShipmentRequestBody = void 0;
class SupplyChain202309ConfirmPackageShipmentRequestBody {
    static getAttributeTypeMap() {
        return SupplyChain202309ConfirmPackageShipmentRequestBody.attributeTypeMap;
    }
}
exports.SupplyChain202309ConfirmPackageShipmentRequestBody = SupplyChain202309ConfirmPackageShipmentRequestBody;
SupplyChain202309ConfirmPackageShipmentRequestBody.discriminator = undefined;
SupplyChain202309ConfirmPackageShipmentRequestBody.attributeTypeMap = [
    {
        "name": "packages",
        "baseName": "packages",
        "type": "Array<SupplyChain202309ConfirmPackageShipmentRequestBodyPackages>"
    },
    {
        "name": "warehouseProviderId",
        "baseName": "warehouse_provider_id",
        "type": "string"
    }
];
//# sourceMappingURL=ConfirmPackageShipmentRequestBody.js.map