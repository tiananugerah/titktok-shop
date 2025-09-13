"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409SearchResponsiblePersonsRequestBody = void 0;
class Product202409SearchResponsiblePersonsRequestBody {
    static getAttributeTypeMap() {
        return Product202409SearchResponsiblePersonsRequestBody.attributeTypeMap;
    }
}
exports.Product202409SearchResponsiblePersonsRequestBody = Product202409SearchResponsiblePersonsRequestBody;
Product202409SearchResponsiblePersonsRequestBody.discriminator = undefined;
Product202409SearchResponsiblePersonsRequestBody.attributeTypeMap = [
    {
        "name": "keyword",
        "baseName": "keyword",
        "type": "string"
    },
    {
        "name": "responsiblePersonIds",
        "baseName": "responsible_person_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=SearchResponsiblePersonsRequestBody.js.map