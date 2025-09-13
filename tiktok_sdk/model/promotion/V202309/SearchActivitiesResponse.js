"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309SearchActivitiesResponse = void 0;
class Promotion202309SearchActivitiesResponse {
    static getAttributeTypeMap() {
        return Promotion202309SearchActivitiesResponse.attributeTypeMap;
    }
}
exports.Promotion202309SearchActivitiesResponse = Promotion202309SearchActivitiesResponse;
Promotion202309SearchActivitiesResponse.discriminator = undefined;
Promotion202309SearchActivitiesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202309SearchActivitiesResponseData"
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
//# sourceMappingURL=SearchActivitiesResponse.js.map