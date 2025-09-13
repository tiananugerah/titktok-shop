"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309SearchActivitiesResponseDataActivities = void 0;
class Promotion202309SearchActivitiesResponseDataActivities {
    static getAttributeTypeMap() {
        return Promotion202309SearchActivitiesResponseDataActivities.attributeTypeMap;
    }
}
exports.Promotion202309SearchActivitiesResponseDataActivities = Promotion202309SearchActivitiesResponseDataActivities;
Promotion202309SearchActivitiesResponseDataActivities.discriminator = undefined;
Promotion202309SearchActivitiesResponseDataActivities.attributeTypeMap = [
    {
        "name": "activityCommands",
        "baseName": "activity_commands",
        "type": "Array<string>"
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
        "type": "Promotion202309SearchActivitiesResponseDataActivitiesDiscount"
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
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "participationLimit",
        "baseName": "participation_limit",
        "type": "Array<Promotion202309SearchActivitiesResponseDataActivitiesParticipationLimit>"
    },
    {
        "name": "productLevel",
        "baseName": "product_level",
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
//# sourceMappingURL=SearchActivitiesResponseDataActivities.js.map