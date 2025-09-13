"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412SearchOpenCollaborationRequestBody = void 0;
class AffiliateSeller202412SearchOpenCollaborationRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202412SearchOpenCollaborationRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202412SearchOpenCollaborationRequestBody = AffiliateSeller202412SearchOpenCollaborationRequestBody;
AffiliateSeller202412SearchOpenCollaborationRequestBody.discriminator = undefined;
AffiliateSeller202412SearchOpenCollaborationRequestBody.attributeTypeMap = [
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