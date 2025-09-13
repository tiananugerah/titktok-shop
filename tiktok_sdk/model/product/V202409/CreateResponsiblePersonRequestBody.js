"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409CreateResponsiblePersonRequestBody = void 0;
class Product202409CreateResponsiblePersonRequestBody {
    static getAttributeTypeMap() {
        return Product202409CreateResponsiblePersonRequestBody.attributeTypeMap;
    }
}
exports.Product202409CreateResponsiblePersonRequestBody = Product202409CreateResponsiblePersonRequestBody;
Product202409CreateResponsiblePersonRequestBody.discriminator = undefined;
Product202409CreateResponsiblePersonRequestBody.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "Product202409CreateResponsiblePersonRequestBodyAddress"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "locale",
        "baseName": "locale",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "phoneNumber",
        "baseName": "phone_number",
        "type": "Product202409CreateResponsiblePersonRequestBodyPhoneNumber"
    }
];
//# sourceMappingURL=CreateResponsiblePersonRequestBody.js.map