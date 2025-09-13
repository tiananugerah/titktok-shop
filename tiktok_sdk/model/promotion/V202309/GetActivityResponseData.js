"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponseData = void 0;
class Promotion202309GetActivityResponseData {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponseData.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponseData = Promotion202309GetActivityResponseData;
Promotion202309GetActivityResponseData.discriminator = undefined;
Promotion202309GetActivityResponseData.attributeTypeMap = [
    {
        "name": "activityCommands",
        "baseName": "activity_commands",
        "type": "Array<string>"
    },
    {
        "name": "activityId",
        "baseName": "activity_id",
        "type": "string"
    },
    {
        "name": "activityType",
        "baseName": "activity_type",
        "type": "string"
    },
    {
        "name": "beginTime",
        "baseName": "begin_time",
        "type": "number"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "discount",
        "baseName": "discount",
        "type": "Promotion202309GetActivityResponseDataDiscount"
    },
    {
        "name": "durationType",
        "baseName": "duration_type",
        "type": "string"
    },
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "number"
    },
    {
        "name": "participationLimit",
        "baseName": "participation_limit",
        "type": "Array<Promotion202309GetActivityResponseDataParticipationLimit>"
    },
    {
        "name": "productLevel",
        "baseName": "product_level",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Promotion202309GetActivityResponseDataProducts>"
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
//# sourceMappingURL=GetActivityResponseData.js.map