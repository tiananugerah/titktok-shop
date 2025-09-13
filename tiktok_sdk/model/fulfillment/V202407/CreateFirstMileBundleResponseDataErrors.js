"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202407CreateFirstMileBundleResponseDataErrors = void 0;
class Fulfillment202407CreateFirstMileBundleResponseDataErrors {
    static getAttributeTypeMap() {
        return Fulfillment202407CreateFirstMileBundleResponseDataErrors.attributeTypeMap;
    }
}
exports.Fulfillment202407CreateFirstMileBundleResponseDataErrors = Fulfillment202407CreateFirstMileBundleResponseDataErrors;
Fulfillment202407CreateFirstMileBundleResponseDataErrors.discriminator = undefined;
Fulfillment202407CreateFirstMileBundleResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Fulfillment202407CreateFirstMileBundleResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=CreateFirstMileBundleResponseDataErrors.js.map