"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309SearchActivitiesRequestBody = void 0;
class Promotion202309SearchActivitiesRequestBody {
    static getAttributeTypeMap() {
        return Promotion202309SearchActivitiesRequestBody.attributeTypeMap;
    }
}
exports.Promotion202309SearchActivitiesRequestBody = Promotion202309SearchActivitiesRequestBody;
Promotion202309SearchActivitiesRequestBody.discriminator = undefined;
Promotion202309SearchActivitiesRequestBody.attributeTypeMap = [
    {
        "name": "activityTitle",
        "baseName": "activity_title",
        "type": "string"
    },
    {
        "name": "activityType",
        "baseName": "activity_type",
        "type": "string"
    },
    {
        "name": "pageSize",
        "baseName": "page_size",
        "type": "number"
    },
    {
        "name": "pageToken",
        "baseName": "page_token",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=SearchActivitiesRequestBody.js.map