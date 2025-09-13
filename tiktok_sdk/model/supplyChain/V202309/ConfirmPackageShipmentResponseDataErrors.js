"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyChain202309ConfirmPackageShipmentResponseDataErrors = void 0;
class SupplyChain202309ConfirmPackageShipmentResponseDataErrors {
    static getAttributeTypeMap() {
        return SupplyChain202309ConfirmPackageShipmentResponseDataErrors.attributeTypeMap;
    }
}
exports.SupplyChain202309ConfirmPackageShipmentResponseDataErrors = SupplyChain202309ConfirmPackageShipmentResponseDataErrors;
SupplyChain202309ConfirmPackageShipmentResponseDataErrors.discriminator = undefined;
SupplyChain202309ConfirmPackageShipmentResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "SupplyChain202309ConfirmPackageShipmentResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=ConfirmPackageShipmentResponseDataErrors.js.map