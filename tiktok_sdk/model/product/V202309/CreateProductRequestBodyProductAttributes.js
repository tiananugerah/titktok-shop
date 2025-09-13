"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductRequestBodyProductAttributes = void 0;
class Product202309CreateProductRequestBodyProductAttributes {
    static getAttributeTypeMap() {
        return Product202309CreateProductRequestBodyProductAttributes.attributeTypeMap;
    }
}
exports.Product202309CreateProductRequestBodyProductAttributes = Product202309CreateProductRequestBodyProductAttributes;
Product202309CreateProductRequestBodyProductAttributes.discriminator = undefined;
Product202309CreateProductRequestBodyProductAttributes.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<Product202309CreateProductRequestBodyProductAttributesValues>"
    }
];
//# sourceMappingURL=CreateProductRequestBodyProductAttributes.js.map