"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData = void 0;
class AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData = AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData;
AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData.discriminator = undefined;
AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData.attributeTypeMap = [
    {
        "name": "creatorContentDetails",
        "baseName": "creator_content_details",
        "type": "Array<AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataProduct"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetOpenCollaborationCreatorContentDetailResponseData.js.map