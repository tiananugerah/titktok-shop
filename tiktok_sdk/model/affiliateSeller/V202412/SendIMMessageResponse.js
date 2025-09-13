"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412SendIMMessageResponse = void 0;
class AffiliateSeller202412SendIMMessageResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202412SendIMMessageResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202412SendIMMessageResponse = AffiliateSeller202412SendIMMessageResponse;
AffiliateSeller202412SendIMMessageResponse.discriminator = undefined;
AffiliateSeller202412SendIMMessageResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202412SendIMMessageResponseData"
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
//# sourceMappingURL=SendIMMessageResponse.js.map