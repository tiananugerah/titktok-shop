"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SearchPackageResponseData = void 0;
class Fulfillment202309SearchPackageResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309SearchPackageResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309SearchPackageResponseData = Fulfillment202309SearchPackageResponseData;
Fulfillment202309SearchPackageResponseData.discriminator = undefined;
Fulfillment202309SearchPackageResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "packages",
        "baseName": "packages",
        "type": "Array<Fulfillment202309SearchPackageResponseDataPackages>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchPackageResponseData.js.map