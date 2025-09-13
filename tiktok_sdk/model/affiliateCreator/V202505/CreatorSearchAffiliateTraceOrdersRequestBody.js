"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody = void 0;
class AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody = AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody;
AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody.discriminator = undefined;
AffiliateCreator202505CreatorSearchAffiliateTraceOrdersRequestBody.attributeTypeMap = [
    {
        "name": "timeGe",
        "baseName": "time_ge",
        "type": "number"
    },
    {
        "name": "timeLt",
        "baseName": "time_lt",
        "type": "number"
    },
    {
        "name": "timeType",
        "baseName": "time_type",
        "type": "string"
    }
];
//# sourceMappingURL=CreatorSearchAffiliateTraceOrdersRequestBody.js.map