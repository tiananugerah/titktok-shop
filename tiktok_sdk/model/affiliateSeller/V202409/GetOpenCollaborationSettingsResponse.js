"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409GetOpenCollaborationSettingsResponse = void 0;
class AffiliateSeller202409GetOpenCollaborationSettingsResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202409GetOpenCollaborationSettingsResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202409GetOpenCollaborationSettingsResponse = AffiliateSeller202409GetOpenCollaborationSettingsResponse;
AffiliateSeller202409GetOpenCollaborationSettingsResponse.discriminator = undefined;
AffiliateSeller202409GetOpenCollaborationSettingsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202409GetOpenCollaborationSettingsResponseData"
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
//# sourceMappingURL=GetOpenCollaborationSettingsResponse.js.map