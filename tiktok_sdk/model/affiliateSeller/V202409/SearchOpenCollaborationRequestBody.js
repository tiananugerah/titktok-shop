"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SearchOpenCollaborationRequestBody = void 0;
class AffiliateSeller202409SearchOpenCollaborationRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchOpenCollaborationRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SearchOpenCollaborationRequestBody = AffiliateSeller202409SearchOpenCollaborationRequestBody;
AffiliateSeller202409SearchOpenCollaborationRequestBody.discriminator = undefined;
AffiliateSeller202409SearchOpenCollaborationRequestBody.attributeTypeMap = [
    {
        "name": "keyword",
        "baseName": "keyword",
        "type": "string"
    },
    {
        "name": "keywordType",
        "baseName": "keyword_type",
        "type": "string"
    },
    {
        "name": "topLevelCategoryId",
        "baseName": "top_level_category_id",
        "type": "string"
    }
];
//# sourceMappingURL=SearchOpenCollaborationRequestBody.js.map