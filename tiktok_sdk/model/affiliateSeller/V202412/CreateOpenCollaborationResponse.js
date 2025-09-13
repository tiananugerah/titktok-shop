"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412CreateOpenCollaborationResponse = void 0;
class AffiliateSeller202412CreateOpenCollaborationResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412CreateOpenCollaborationResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412CreateOpenCollaborationResponse = AffiliateSeller202412CreateOpenCollaborationResponse;
AffiliateSeller202412CreateOpenCollaborationResponse.discriminator = undefined;
AffiliateSeller202412CreateOpenCollaborationResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412CreateOpenCollaborationResponseData"
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
//# sourceMappingURL=CreateOpenCollaborationResponse.js.map