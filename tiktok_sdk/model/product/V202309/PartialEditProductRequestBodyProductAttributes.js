"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBodyProductAttributes = void 0;
class Product202309PartialEditProductRequestBodyProductAttributes {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBodyProductAttributes.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBodyProductAttributes = Product202309PartialEditProductRequestBodyProductAttributes;
Product202309PartialEditProductRequestBodyProductAttributes.discriminator = undefined;
Product202309PartialEditProductRequestBodyProductAttributes.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<Product202309PartialEditProductRequestBodyProductAttributesValues>"
    }
];
//# sourceMappingURL=PartialEditProductRequestBodyProductAttributes.js.map