"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchProductsResponseDataProductsAudit = void 0;
class Product202312SearchProductsResponseDataProductsAudit {
    static getAttributeTypeMap() {
        return Product202312SearchProductsResponseDataProductsAudit.attributeTypeMap;
    }
}
exports.Product202312SearchProductsResponseDataProductsAudit = Product202312SearchProductsResponseDataProductsAudit;
Product202312SearchProductsResponseDataProductsAudit.discriminator = undefined;
Product202312SearchProductsResponseDataProductsAudit.attributeTypeMap = [
    {
        "name": "preApprovedReasons",
        "baseName": "pre_approved_reasons",
        "type": "Array<string>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=SearchProductsResponseDataProductsAudit.js.map