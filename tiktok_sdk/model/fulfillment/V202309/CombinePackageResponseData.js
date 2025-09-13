"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309CombinePackageResponseData = void 0;
class Fulfillment202309CombinePackageResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309CombinePackageResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309CombinePackageResponseData = Fulfillment202309CombinePackageResponseData;
Fulfillment202309CombinePackageResponseData.discriminator = undefined;
Fulfillment202309CombinePackageResponseData.attributeTypeMap = [
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Fulfillment202309CombinePackageResponseDataErrors>"
    },
    {
        "name": "packages",
        "baseName": "packages",
        "type": "Array<Fulfillment202309CombinePackageResponseDataPackages>"
    }
];
//# sourceMappingURL=CombinePackageResponseData.js.map