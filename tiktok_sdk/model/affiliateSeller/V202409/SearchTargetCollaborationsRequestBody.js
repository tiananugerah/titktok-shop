"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SearchTargetCollaborationsRequestBody = void 0;
class AffiliateSeller202409SearchTargetCollaborationsRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchTargetCollaborationsRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SearchTargetCollaborationsRequestBody = AffiliateSeller202409SearchTargetCollaborationsRequestBody;
AffiliateSeller202409SearchTargetCollaborationsRequestBody.discriminator = undefined;
AffiliateSeller202409SearchTargetCollaborationsRequestBody.attributeTypeMap = [
    {
        "name": "collaborationStatus",
        "baseName": "collaboration_status",
        "type": "string"
    },
    {
        "name": "creatorAcceptStatus",
        "baseName": "creator_accept_status",
        "type": "string"
    },
    {
        "name": "creatorUserId",
        "baseName": "creator_user_id",
        "type": "string"
    },
    {
        "name": "freeSampleSetting",
        "baseName": "free_sample_setting",
        "type": "string"
    },
    {
        "name": "searchParam",
        "baseName": "search_param",
        "type": "AffiliateSeller202409SearchTargetCollaborationsRequestBodySearchParam"
    }
];
//# sourceMappingURL=SearchTargetCollaborationsRequestBody.js.map