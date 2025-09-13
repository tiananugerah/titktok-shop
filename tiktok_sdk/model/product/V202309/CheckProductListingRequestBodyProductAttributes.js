"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingRequestBodyProductAttributes = void 0;
class Product202309CheckProductListingRequestBodyProductAttributes {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingRequestBodyProductAttributes.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingRequestBodyProductAttributes = Product202309CheckProductListingRequestBodyProductAttributes;
Product202309CheckProductListingRequestBodyProductAttributes.discriminator = undefined;
Product202309CheckProductListingRequestBodyProductAttributes.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<Product202309CheckProductListingRequestBodyProductAttributesValues>"
    }
];
//# sourceMappingURL=CheckProductListingRequestBodyProductAttributes.js.map