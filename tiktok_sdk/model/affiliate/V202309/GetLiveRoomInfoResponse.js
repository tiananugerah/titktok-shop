"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetLiveRoomInfoResponse = void 0;
class Affiliate202309GetLiveRoomInfoResponse {
    static getAttributeTypeMap() {
        return Affiliate202309GetLiveRoomInfoResponse.attributeTypeMap;
    }
}
exports.Affiliate202309GetLiveRoomInfoResponse = Affiliate202309GetLiveRoomInfoResponse;
Affiliate202309GetLiveRoomInfoResponse.discriminator = undefined;
Affiliate202309GetLiveRoomInfoResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Affiliate202309GetLiveRoomInfoResponseData"
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
//# sourceMappingURL=GetLiveRoomInfoResponse.js.map