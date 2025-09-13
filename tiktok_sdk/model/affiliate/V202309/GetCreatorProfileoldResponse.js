"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetCreatorProfileoldResponse = void 0;
class Affiliate202309GetCreatorProfileoldResponse {
    static getAttributeTypeMap() {
        return Affiliate202309GetCreatorProfileoldResponse.attributeTypeMap;
    }
}
exports.Affiliate202309GetCreatorProfileoldResponse = Affiliate202309GetCreatorProfileoldResponse;
Affiliate202309GetCreatorProfileoldResponse.discriminator = undefined;
Affiliate202309GetCreatorProfileoldResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Affiliate202309GetCreatorProfileoldResponseData"
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
//# sourceMappingURL=GetCreatorProfileoldResponse.js.map