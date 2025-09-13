"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309CreateActivityRequestBody = void 0;
class Promotion202309CreateActivityRequestBody {
    static getAttributeTypeMap() {
        return Promotion202309CreateActivityRequestBody.attributeTypeMap;
    }
}
exports.Promotion202309CreateActivityRequestBody = Promotion202309CreateActivityRequestBody;
Promotion202309CreateActivityRequestBody.discriminator = undefined;
Promotion202309CreateActivityRequestBody.attributeTypeMap = [
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
        "name": "discount",
        "baseName": "discount",
        "type": "Promotion202309CreateActivityRequestBodyDiscount"
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
        "type": "Array<Promotion202309CreateActivityRequestBodyParticipationLimit>"
    },
    {
        "name": "productLevel",
        "baseName": "product_level",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=CreateActivityRequestBody.js.map