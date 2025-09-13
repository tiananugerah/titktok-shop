"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202409SearchResponsiblePersonsResponseData = void 0;
class Product202409SearchResponsiblePersonsResponseData {
    static getAttributeTypeMap() {
        return Product202409SearchResponsiblePersonsResponseData.attributeTypeMap;
    }
}
exports.Product202409SearchResponsiblePersonsResponseData = Product202409SearchResponsiblePersonsResponseData;
Product202409SearchResponsiblePersonsResponseData.discriminator = undefined;
Product202409SearchResponsiblePersonsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "responsiblePersons",
        "baseName": "responsible_persons",
        "type": "Array<Product202409SearchResponsiblePersonsResponseDataResponsiblePersons>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchResponsiblePersonsResponseData.js.map