"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataAudit = void 0;
class Product202309GetProductResponseDataAudit {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataAudit.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataAudit = Product202309GetProductResponseDataAudit;
Product202309GetProductResponseDataAudit.discriminator = undefined;
Product202309GetProductResponseDataAudit.attributeTypeMap = [
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
//# sourceMappingURL=GetProductResponseDataAudit.js.map