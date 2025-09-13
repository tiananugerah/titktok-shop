"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309DeactivateActivityResponseData = void 0;
class Promotion202309DeactivateActivityResponseData {
    static getAttributeTypeMap() {
        return Promotion202309DeactivateActivityResponseData.attributeTypeMap;
    }
}
exports.Promotion202309DeactivateActivityResponseData = Promotion202309DeactivateActivityResponseData;
Promotion202309DeactivateActivityResponseData.discriminator = undefined;
Promotion202309DeactivateActivityResponseData.attributeTypeMap = [
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
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=DeactivateActivityResponseData.js.map