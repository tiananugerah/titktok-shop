"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SearchOpenCollaborationResponse = void 0;
class AffiliateSeller202409SearchOpenCollaborationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchOpenCollaborationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SearchOpenCollaborationResponse = AffiliateSeller202409SearchOpenCollaborationResponse;
AffiliateSeller202409SearchOpenCollaborationResponse.discriminator = undefined;
AffiliateSeller202409SearchOpenCollaborationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202409SearchOpenCollaborationResponseData"
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