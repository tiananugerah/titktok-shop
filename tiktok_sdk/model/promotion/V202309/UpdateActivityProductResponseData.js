"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityProductResponseData = void 0;
class Promotion202309UpdateActivityProductResponseData {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityProductResponseData.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityProductResponseData = Promotion202309UpdateActivityProductResponseData;
Promotion202309UpdateActivityProductResponseData.discriminator = undefined;
Promotion202309UpdateActivityProductResponseData.attributeTypeMap = [
    {
        "name": "activityId",
        "baseName": "activity_id",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=UpdateActivityProductResponseData.js.map