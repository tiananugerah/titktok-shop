"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501CreatorSelectAffiliateProductRequestBody = void 0;
class AffiliateCreator202501CreatorSelectAffiliateProductRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202501CreatorSelectAffiliateProductRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202501CreatorSelectAffiliateProductRequestBody = AffiliateCreator202501CreatorSelectAffiliateProductRequestBody;
AffiliateCreator202501CreatorSelectAffiliateProductRequestBody.discriminator = undefined;
AffiliateCreator202501CreatorSelectAffiliateProductRequestBody.attributeTypeMap = [
    {
        "name": "filterParams",
        "baseName": "filter_params",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams"
    },
    {
        "name": "sortParams",
        "baseName": "sort_params",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductRequestBodySortParams"
    }
];
//# sourceMappingURL=CreatorSelectAffiliateProductRequestBody.js.map