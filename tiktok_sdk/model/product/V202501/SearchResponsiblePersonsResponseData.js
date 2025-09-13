"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202501SearchResponsiblePersonsResponseData = void 0;
class Product202501SearchResponsiblePersonsResponseData {
    static getAttributeTypeMap() {
        return Product202501SearchResponsiblePersonsResponseData.attributeTypeMap;
    }
}
exports.Product202501SearchResponsiblePersonsResponseData = Product202501SearchResponsiblePersonsResponseData;
Product202501SearchResponsiblePersonsResponseData.discriminator = undefined;
Product202501SearchResponsiblePersonsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "responsiblePersons",
        "baseName": "responsible_persons",
        "type": "Array<Product202501SearchResponsiblePersonsResponseDataResponsiblePersons>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchResponsiblePersonsResponseData.js.map