"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309SearchActivitiesResponseData = void 0;
class Promotion202309SearchActivitiesResponseData {
    static getAttributeTypeMap() {
        return Promotion202309SearchActivitiesResponseData.attributeTypeMap;
    }
}
exports.Promotion202309SearchActivitiesResponseData = Promotion202309SearchActivitiesResponseData;
Promotion202309SearchActivitiesResponseData.discriminator = undefined;
Promotion202309SearchActivitiesResponseData.attributeTypeMap = [
    {
        "name": "activities",
        "baseName": "activities",
        "type": "Array<Promotion202309SearchActivitiesResponseDataActivities>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchActivitiesResponseData.js.map