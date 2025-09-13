"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405AddShowcaseProductsResponseDataErrors = void 0;
class AffiliateCreator202405AddShowcaseProductsResponseDataErrors {
    static getAttributeTypeMap() {
        return AffiliateCreator202405AddShowcaseProductsResponseDataErrors.attributeTypeMap;
    }
}
exports.AffiliateCreator202405AddShowcaseProductsResponseDataErrors = AffiliateCreator202405AddShowcaseProductsResponseDataErrors;
AffiliateCreator202405AddShowcaseProductsResponseDataErrors.discriminator = undefined;
AffiliateCreator202405AddShowcaseProductsResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "AffiliateCreator202405AddShowcaseProductsResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=AddShowcaseProductsResponseDataErrors.js.map