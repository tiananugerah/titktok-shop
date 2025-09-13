"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202502SearchProductsResponseDataProductsAudit = void 0;
class Product202502SearchProductsResponseDataProductsAudit {
    static getAttributeTypeMap() {
        return Product202502SearchProductsResponseDataProductsAudit.attributeTypeMap;
    }
}
exports.Product202502SearchProductsResponseDataProductsAudit = Product202502SearchProductsResponseDataProductsAudit;
Product202502SearchProductsResponseDataProductsAudit.discriminator = undefined;
Product202502SearchProductsResponseDataProductsAudit.attributeTypeMap = [
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