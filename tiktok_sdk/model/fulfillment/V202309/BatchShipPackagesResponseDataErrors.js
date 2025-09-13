"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309BatchShipPackagesResponseDataErrors = void 0;
class Fulfillment202309BatchShipPackagesResponseDataErrors {
    static getAttributeTypeMap() {
        return Fulfillment202309BatchShipPackagesResponseDataErrors.attributeTypeMap;
    }
}
exports.Fulfillment202309BatchShipPackagesResponseDataErrors = Fulfillment202309BatchShipPackagesResponseDataErrors;
Fulfillment202309BatchShipPackagesResponseDataErrors.discriminator = undefined;
Fulfillment202309BatchShipPackagesResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Fulfillment202309BatchShipPackagesResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=BatchShipPackagesResponseDataErrors.js.map