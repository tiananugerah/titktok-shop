"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309CombinePackageResponseDataErrors = void 0;
class Fulfillment202309CombinePackageResponseDataErrors {
    static getAttributeTypeMap() {
        return Fulfillment202309CombinePackageResponseDataErrors.attributeTypeMap;
    }
}
exports.Fulfillment202309CombinePackageResponseDataErrors = Fulfillment202309CombinePackageResponseDataErrors;
Fulfillment202309CombinePackageResponseDataErrors.discriminator = undefined;
Fulfillment202309CombinePackageResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Fulfillment202309CombinePackageResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=CombinePackageResponseDataErrors.js.map