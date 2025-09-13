"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312CheckListingPrerequisitesResponseDataCheckResults = void 0;
class Product202312CheckListingPrerequisitesResponseDataCheckResults {
    static getAttributeTypeMap() {
        return Product202312CheckListingPrerequisitesResponseDataCheckResults.attributeTypeMap;
    }
}
exports.Product202312CheckListingPrerequisitesResponseDataCheckResults = Product202312CheckListingPrerequisitesResponseDataCheckResults;
Product202312CheckListingPrerequisitesResponseDataCheckResults.discriminator = undefined;
Product202312CheckListingPrerequisitesResponseDataCheckResults.attributeTypeMap = [
    {
        "name": "checkItem",
        "baseName": "check_item",
        "type": "string"
    },
    {
        "name": "failReasons",
        "baseName": "fail_reasons",
        "type": "Array<string>"
    },
    {
        "name": "isFailed",
        "baseName": "is_failed",
        "type": "boolean"
    }
];
//# sourceMappingURL=CheckListingPrerequisitesResponseDataCheckResults.js.map