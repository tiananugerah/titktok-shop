"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409RemoveOpenCollaborationResponse = void 0;
class AffiliateSeller202409RemoveOpenCollaborationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202409RemoveOpenCollaborationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202409RemoveOpenCollaborationResponse = AffiliateSeller202409RemoveOpenCollaborationResponse;
AffiliateSeller202409RemoveOpenCollaborationResponse.discriminator = undefined;
AffiliateSeller202409RemoveOpenCollaborationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202409RemoveOpenCollaborationResponseData"
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
//# sourceMappingURL=RemoveOpenCollaborationResponse.js.map