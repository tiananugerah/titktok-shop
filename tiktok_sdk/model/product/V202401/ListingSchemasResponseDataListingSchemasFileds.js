"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202401ListingSchemasResponseDataListingSchemasFileds = void 0;
class Product202401ListingSchemasResponseDataListingSchemasFileds {
    static getAttributeTypeMap() {
        return Product202401ListingSchemasResponseDataListingSchemasFileds.attributeTypeMap;
    }
}
exports.Product202401ListingSchemasResponseDataListingSchemasFileds = Product202401ListingSchemasResponseDataListingSchemasFileds;
Product202401ListingSchemasResponseDataListingSchemasFileds.discriminator = undefined;
Product202401ListingSchemasResponseDataListingSchemasFileds.attributeTypeMap = [
    {
        "name": "complexValues",
        "baseName": "complex_values",
        "type": "Array<Product202401ListingSchemasResponseDataListingSchemasFiledsComplexValues>"
    },
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
        "name": "options",
        "baseName": "options",
        "type": "Array<Product202401ListingSchemasResponseDataListingSchemasFiledsOptions>"
    },
    {
        "name": "rules",
        "baseName": "rules",
        "type": "Array<Product202401ListingSchemasResponseDataListingSchemasFiledsRules>"
    }
];
//# sourceMappingURL=ListingSchemasResponseDataListingSchemasFileds.js.map