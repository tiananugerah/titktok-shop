"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SearchCombinablePackagesResponseData = void 0;
class Fulfillment202309SearchCombinablePackagesResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309SearchCombinablePackagesResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309SearchCombinablePackagesResponseData = Fulfillment202309SearchCombinablePackagesResponseData;
Fulfillment202309SearchCombinablePackagesResponseData.discriminator = undefined;
Fulfillment202309SearchCombinablePackagesResponseData.attributeTypeMap = [
    {
        "name": "combinablePackages",
        "baseName": "combinable_packages",
        "type": "Array<Fulfillment202309SearchCombinablePackagesResponseDataCombinablePackages>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchCombinablePackagesResponseData.js.map