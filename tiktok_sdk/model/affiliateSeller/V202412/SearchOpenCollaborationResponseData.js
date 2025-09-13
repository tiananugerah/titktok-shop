"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412SearchOpenCollaborationResponseData = void 0;
class AffiliateSeller202412SearchOpenCollaborationResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202412SearchOpenCollaborationResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202412SearchOpenCollaborationResponseData = AffiliateSeller202412SearchOpenCollaborationResponseData;
AffiliateSeller202412SearchOpenCollaborationResponseData.discriminator = undefined;
AffiliateSeller202412SearchOpenCollaborationResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "openCollaborations",
        "baseName": "open_collaborations",
        "type": "Array<AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchOpenCollaborationResponseData.js.map