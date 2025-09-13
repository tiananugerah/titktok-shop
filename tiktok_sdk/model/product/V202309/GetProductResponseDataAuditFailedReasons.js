"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataAuditFailedReasons = void 0;
class Product202309GetProductResponseDataAuditFailedReasons {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataAuditFailedReasons.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataAuditFailedReasons = Product202309GetProductResponseDataAuditFailedReasons;
Product202309GetProductResponseDataAuditFailedReasons.discriminator = undefined;
Product202309GetProductResponseDataAuditFailedReasons.attributeTypeMap = [
    {
        "name": "listingPlatform",
        "baseName": "listing_platform",
        "type": "string"
    },
    {
        "name": "position",
        "baseName": "position",
        "type": "string"
    },
    {
        "name": "reasons",
        "baseName": "reasons",
        "type": "Array<string>"
    },
    {
        "name": "suggestions",
        "baseName": "suggestions",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=GetProductResponseDataAuditFailedReasons.js.map