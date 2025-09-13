"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202501SearchResponsiblePersonsRequestBody = void 0;
class Product202501SearchResponsiblePersonsRequestBody {
    static getAttributeTypeMap() {
        return Product202501SearchResponsiblePersonsRequestBody.attributeTypeMap;
    }
}
exports.Product202501SearchResponsiblePersonsRequestBody = Product202501SearchResponsiblePersonsRequestBody;
Product202501SearchResponsiblePersonsRequestBody.discriminator = undefined;
Product202501SearchResponsiblePersonsRequestBody.attributeTypeMap = [
    {
        "name": "keyword",
        "baseName": "keyword",
        "type": "string"
    },
    {
        "name": "locales",
        "baseName": "locales",
        "type": "Array<string>"
    },
    {
        "name": "responsiblePersonIds",
        "baseName": "responsible_person_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=SearchResponsiblePersonsRequestBody.js.map