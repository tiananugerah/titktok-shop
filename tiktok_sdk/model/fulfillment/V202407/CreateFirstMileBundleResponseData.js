"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202407CreateFirstMileBundleResponseData = void 0;
class Fulfillment202407CreateFirstMileBundleResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202407CreateFirstMileBundleResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202407CreateFirstMileBundleResponseData = Fulfillment202407CreateFirstMileBundleResponseData;
Fulfillment202407CreateFirstMileBundleResponseData.discriminator = undefined;
Fulfillment202407CreateFirstMileBundleResponseData.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Fulfillment202407CreateFirstMileBundleResponseDataErrors>"
    },
    {
        "name": "firstMileBundleId",
        "baseName": "first_mile_bundle_id",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    }
];
//# sourceMappingURL=CreateFirstMileBundleResponseData.js.map