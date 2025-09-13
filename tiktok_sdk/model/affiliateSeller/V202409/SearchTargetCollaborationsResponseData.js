"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SearchTargetCollaborationsResponseData = void 0;
class AffiliateSeller202409SearchTargetCollaborationsResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchTargetCollaborationsResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SearchTargetCollaborationsResponseData = AffiliateSeller202409SearchTargetCollaborationsResponseData;
AffiliateSeller202409SearchTargetCollaborationsResponseData.discriminator = undefined;
AffiliateSeller202409SearchTargetCollaborationsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "targetCollaborations",
        "baseName": "target_collaborations",
        "type": "Array<AffiliateSeller202409SearchTargetCollaborationsResponseDataTargetCollaborations>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchTargetCollaborationsResponseData.js.map