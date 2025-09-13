"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405AddShowcaseProductsRequestBody = void 0;
class AffiliateCreator202405AddShowcaseProductsRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202405AddShowcaseProductsRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202405AddShowcaseProductsRequestBody = AffiliateCreator202405AddShowcaseProductsRequestBody;
AffiliateCreator202405AddShowcaseProductsRequestBody.discriminator = undefined;
AffiliateCreator202405AddShowcaseProductsRequestBody.attributeTypeMap = [
    {
        "name": "addType",
        "baseName": "add_type",
        "type": "string"
    },
    {
        "name": "productIds",
        "baseName": "product_ids",
        "type": "Array<string>"
    },
    {
        "name": "productLink",
        "baseName": "product_link",
        "type": "string"
    }
];
//# sourceMappingURL=AddShowcaseProductsRequestBody.js.map