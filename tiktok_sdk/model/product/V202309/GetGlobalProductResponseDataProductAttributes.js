"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalProductResponseDataProductAttributes = void 0;
class Product202309GetGlobalProductResponseDataProductAttributes {
    static getAttributeTypeMap() {
        return Product202309GetGlobalProductResponseDataProductAttributes.attributeTypeMap;
    }
}
exports.Product202309GetGlobalProductResponseDataProductAttributes = Product202309GetGlobalProductResponseDataProductAttributes;
Product202309GetGlobalProductResponseDataProductAttributes.discriminator = undefined;
Product202309GetGlobalProductResponseDataProductAttributes.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<Product202309GetGlobalProductResponseDataProductAttributesValues>"
    }
];
//# sourceMappingURL=GetGlobalProductResponseDataProductAttributes.js.map