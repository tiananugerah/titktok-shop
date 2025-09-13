"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409PartialEditResponsiblePersonRequestBody = void 0;
class Product202409PartialEditResponsiblePersonRequestBody {
    static getAttributeTypeMap() {
        return Product202409PartialEditResponsiblePersonRequestBody.attributeTypeMap;
    }
}
exports.Product202409PartialEditResponsiblePersonRequestBody = Product202409PartialEditResponsiblePersonRequestBody;
Product202409PartialEditResponsiblePersonRequestBody.discriminator = undefined;
Product202409PartialEditResponsiblePersonRequestBody.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "Product202409PartialEditResponsiblePersonRequestBodyAddress"
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
        "type": "Product202409PartialEditResponsiblePersonRequestBodyPhoneNumber"
    }
];
//# sourceMappingURL=PartialEditResponsiblePersonRequestBody.js.map