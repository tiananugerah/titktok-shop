"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityRequestBody = void 0;
class Promotion202309UpdateActivityRequestBody {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityRequestBody.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityRequestBody = Promotion202309UpdateActivityRequestBody;
Promotion202309UpdateActivityRequestBody.discriminator = undefined;
Promotion202309UpdateActivityRequestBody.attributeTypeMap = [
    {
        "name": "beginTime",
        "baseName": "begin_time",
        "type": "number"
    },
    {
        "name": "discount",
        "baseName": "discount",
        "type": "Promotion202309UpdateActivityRequestBodyDiscount"
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
        "type": "Array<Promotion202309UpdateActivityRequestBodyParticipationLimit>"
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
//# sourceMappingURL=UpdateActivityRequestBody.js.map