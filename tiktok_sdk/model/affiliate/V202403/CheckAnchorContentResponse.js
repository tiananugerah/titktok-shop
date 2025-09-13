"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202403CheckAnchorContentResponse = void 0;
class Affiliate202403CheckAnchorContentResponse {
    static getAttributeTypeMap() {
        return Affiliate202403CheckAnchorContentResponse.attributeTypeMap;
    }
}
exports.Affiliate202403CheckAnchorContentResponse = Affiliate202403CheckAnchorContentResponse;
Affiliate202403CheckAnchorContentResponse.discriminator = undefined;
Affiliate202403CheckAnchorContentResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=CheckAnchorContentResponse.js.map