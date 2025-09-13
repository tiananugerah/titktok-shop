"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataProductAttributes = void 0;
class Product202309GetProductResponseDataProductAttributes {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataProductAttributes.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataProductAttributes = Product202309GetProductResponseDataProductAttributes;
Product202309GetProductResponseDataProductAttributes.discriminator = undefined;
Product202309GetProductResponseDataProductAttributes.attributeTypeMap = [
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
        "type": "Array<Product202309GetProductResponseDataProductAttributesValues>"
    }
];
//# sourceMappingURL=GetProductResponseDataProductAttributes.js.map