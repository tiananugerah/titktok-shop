"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202407ListingSchemasResponseDataListingSchemasFields = void 0;
class Product202407ListingSchemasResponseDataListingSchemasFields {
    static getAttributeTypeMap() {
        return Product202407ListingSchemasResponseDataListingSchemasFields.attributeTypeMap;
    }
}
exports.Product202407ListingSchemasResponseDataListingSchemasFields = Product202407ListingSchemasResponseDataListingSchemasFields;
Product202407ListingSchemasResponseDataListingSchemasFields.discriminator = undefined;
Product202407ListingSchemasResponseDataListingSchemasFields.attributeTypeMap = [
    {
        "name": "complexValues",
        "baseName": "complex_values",
        "type": "Array<Product202407ListingSchemasResponseDataListingSchemasFieldsComplexValues>"
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
        "type": "Array<Product202407ListingSchemasResponseDataListingSchemasFieldsOptions>"
    },
    {
        "name": "rules",
        "baseName": "rules",
        "type": "Array<Product202407ListingSchemasResponseDataListingSchemasFieldsRules>"
    }
];
//# sourceMappingURL=ListingSchemasResponseDataListingSchemasFields.js.map