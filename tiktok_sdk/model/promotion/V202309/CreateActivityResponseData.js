"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309CreateActivityResponseData = void 0;
class Promotion202309CreateActivityResponseData {
    static getAttributeTypeMap() {
        return Promotion202309CreateActivityResponseData.attributeTypeMap;
    }
}
exports.Promotion202309CreateActivityResponseData = Promotion202309CreateActivityResponseData;
Promotion202309CreateActivityResponseData.discriminator = undefined;
Promotion202309CreateActivityResponseData.attributeTypeMap = [
    {
        "name": "activityId",
        "baseName": "activity_id",
        "type": "string"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=CreateActivityResponseData.js.map