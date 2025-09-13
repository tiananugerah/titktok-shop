"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SearchTargetCollaborationsResponse = void 0;
class AffiliateSeller202409SearchTargetCollaborationsResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchTargetCollaborationsResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SearchTargetCollaborationsResponse = AffiliateSeller202409SearchTargetCollaborationsResponse;
AffiliateSeller202409SearchTargetCollaborationsResponse.discriminator = undefined;
AffiliateSeller202409SearchTargetCollaborationsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202409SearchTargetCollaborationsResponseData"
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
//# sourceMappingURL=SearchTargetCollaborationsResponse.js.map