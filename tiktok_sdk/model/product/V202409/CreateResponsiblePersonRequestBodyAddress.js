"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409CreateResponsiblePersonRequestBodyAddress = void 0;
class Product202409CreateResponsiblePersonRequestBodyAddress {
    static getAttributeTypeMap() {
        return Product202409CreateResponsiblePersonRequestBodyAddress.attributeTypeMap;
    }
}
exports.Product202409CreateResponsiblePersonRequestBodyAddress = Product202409CreateResponsiblePersonRequestBodyAddress;
Product202409CreateResponsiblePersonRequestBodyAddress.discriminator = undefined;
Product202409CreateResponsiblePersonRequestBodyAddress.attributeTypeMap = [
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "district",
        "baseName": "district",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postal_code",
        "type": "string"
    },
    {
        "name": "province",
        "baseName": "province",
        "type": "string"
    },
    {
        "name": "streetAddressLine1",
        "baseName": "street_address_line1",
        "type": "string"
    },
    {
        "name": "streetAddressLine2",
        "baseName": "street_address_line2",
        "type": "string"
    }
];
//# sourceMappingURL=CreateResponsiblePersonRequestBodyAddress.js.map