"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditGlobalProductResponseDataPublishResults = void 0;
class Product202309EditGlobalProductResponseDataPublishResults {
    static getAttributeTypeMap() {
        return Product202309EditGlobalProductResponseDataPublishResults.attributeTypeMap;
    }
}
exports.Product202309EditGlobalProductResponseDataPublishResults = Product202309EditGlobalProductResponseDataPublishResults;
Product202309EditGlobalProductResponseDataPublishResults.discriminator = undefined;
Product202309EditGlobalProductResponseDataPublishResults.attributeTypeMap = [
    {
        "name": "failReasons",
        "baseName": "fail_reasons",
        "type": "Array<Product202309EditGlobalProductResponseDataPublishResultsFailReasons>"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=EditGlobalProductResponseDataPublishResults.js.map