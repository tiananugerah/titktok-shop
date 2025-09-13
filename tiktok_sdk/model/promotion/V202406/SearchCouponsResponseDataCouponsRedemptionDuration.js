"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration = void 0;
class Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration {
    static getAttributeTypeMap() {
        return Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration.attributeTypeMap;
    }
}
exports.Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration = Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration;
Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration.discriminator = undefined;
Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration.attributeTypeMap = [
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "number"
    },
    {
        "name": "relativeTime",
        "baseName": "relative_time",
        "type": "number"
    },
    {
        "name": "startTime",
        "baseName": "start_time",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=SearchCouponsResponseDataCouponsRedemptionDuration.js.map