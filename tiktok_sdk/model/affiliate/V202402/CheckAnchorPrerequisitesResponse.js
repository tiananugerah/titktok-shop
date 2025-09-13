"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202402CheckAnchorPrerequisitesResponse = void 0;
class Affiliate202402CheckAnchorPrerequisitesResponse {
    static getAttributeTypeMap() {
        return Affiliate202402CheckAnchorPrerequisitesResponse.attributeTypeMap;
    }
}
exports.Affiliate202402CheckAnchorPrerequisitesResponse = Affiliate202402CheckAnchorPrerequisitesResponse;
Affiliate202402CheckAnchorPrerequisitesResponse.discriminator = undefined;
Affiliate202402CheckAnchorPrerequisitesResponse.attributeTypeMap = [
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
//# sourceMappingURL=CheckAnchorPrerequisitesResponse.js.map