"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityResponseData = void 0;
class Promotion202309UpdateActivityResponseData {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityResponseData.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityResponseData = Promotion202309UpdateActivityResponseData;
Promotion202309UpdateActivityResponseData.discriminator = undefined;
Promotion202309UpdateActivityResponseData.attributeTypeMap = [
    {
        "name": "activityId",
        "baseName": "activity_id",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=UpdateActivityResponseData.js.map