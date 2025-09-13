"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202407ListingSchemasResponseDataErrors = void 0;
class Product202407ListingSchemasResponseDataErrors {
    static getAttributeTypeMap() {
        return Product202407ListingSchemasResponseDataErrors.attributeTypeMap;
    }
}
exports.Product202407ListingSchemasResponseDataErrors = Product202407ListingSchemasResponseDataErrors;
Product202407ListingSchemasResponseDataErrors.discriminator = undefined;
Product202407ListingSchemasResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Product202407ListingSchemasResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=ListingSchemasResponseDataErrors.js.map