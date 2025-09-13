"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412SearchOpenCollaborationResponse = void 0;
class AffiliateSeller202412SearchOpenCollaborationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412SearchOpenCollaborationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412SearchOpenCollaborationResponse = AffiliateSeller202412SearchOpenCollaborationResponse;
AffiliateSeller202412SearchOpenCollaborationResponse.discriminator = undefined;
AffiliateSeller202412SearchOpenCollaborationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412SearchOpenCollaborationResponseData"
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
//# sourceMappingURL=SearchOpenCollaborationResponse.js.map