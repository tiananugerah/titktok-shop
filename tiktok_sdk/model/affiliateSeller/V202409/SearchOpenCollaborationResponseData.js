"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SearchOpenCollaborationResponseData = void 0;
class AffiliateSeller202409SearchOpenCollaborationResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchOpenCollaborationResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SearchOpenCollaborationResponseData = AffiliateSeller202409SearchOpenCollaborationResponseData;
AffiliateSeller202409SearchOpenCollaborationResponseData.discriminator = undefined;
AffiliateSeller202409SearchOpenCollaborationResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "openCollaborations",
        "baseName": "open_collaborations",
        "type": "Array<AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchOpenCollaborationResponseData.js.map