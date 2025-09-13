"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyChain202309ConfirmPackageShipmentResponseData = void 0;
class SupplyChain202309ConfirmPackageShipmentResponseData {
    static getAttributeTypeMap() {
        return SupplyChain202309ConfirmPackageShipmentResponseData.attributeTypeMap;
    }
}
exports.SupplyChain202309ConfirmPackageShipmentResponseData = SupplyChain202309ConfirmPackageShipmentResponseData;
SupplyChain202309ConfirmPackageShipmentResponseData.discriminator = undefined;
SupplyChain202309ConfirmPackageShipmentResponseData.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<SupplyChain202309ConfirmPackageShipmentResponseDataErrors>"
    },
    {
        "name": "successPackages",
        "baseName": "success_packages",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=ConfirmPackageShipmentResponseData.js.map