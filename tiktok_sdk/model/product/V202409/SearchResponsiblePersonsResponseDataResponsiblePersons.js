"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409SearchResponsiblePersonsResponseDataResponsiblePersons = void 0;
class Product202409SearchResponsiblePersonsResponseDataResponsiblePersons {
    static getAttributeTypeMap() {
        return Product202409SearchResponsiblePersonsResponseDataResponsiblePersons.attributeTypeMap;
    }
}
exports.Product202409SearchResponsiblePersonsResponseDataResponsiblePersons = Product202409SearchResponsiblePersonsResponseDataResponsiblePersons;
Product202409SearchResponsiblePersonsResponseDataResponsiblePersons.discriminator = undefined;
Product202409SearchResponsiblePersonsResponseDataResponsiblePersons.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsAddress"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
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
        "name": "phoneNumber",
        "baseName": "phone_number",
        "type": "Product202409SearchResponsiblePersonsResponseDataResponsiblePersonsPhoneNumber"
    }
];
//# sourceMappingURL=SearchResponsiblePersonsResponseDataResponsiblePersons.js.map