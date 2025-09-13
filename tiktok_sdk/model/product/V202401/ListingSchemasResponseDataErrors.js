"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202401ListingSchemasResponseDataErrors = void 0;
class Product202401ListingSchemasResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202401ListingSchemasResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202401ListingSchemasResponseDataErrors = Product202401ListingSchemasResponseDataErrors;
Product202401ListingSchemasResponseDataErrors.discriminator = undefined;
Product202401ListingSchemasResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202401ListingSchemasResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=ListingSchemasResponseDataErrors.js.map