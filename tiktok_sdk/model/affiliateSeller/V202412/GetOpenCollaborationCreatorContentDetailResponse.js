"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse = void 0;
class AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse = AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse;
AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse.discriminator = undefined;
AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetOpenCollaborationCreatorContentDetailResponse.js.map