"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406SearchCouponsResponseDataCouponsThreshold = void 0;
class Promotion202406SearchCouponsResponseDataCouponsThreshold {
    static getAttributeTypeMap() {
        return Promotion202406SearchCouponsResponseDataCouponsThreshold.attributeTypeMap;
    }
}
exports.Promotion202406SearchCouponsResponseDataCouponsThreshold = Promotion202406SearchCouponsResponseDataCouponsThreshold;
Promotion202406SearchCouponsResponseDataCouponsThreshold.discriminator = undefined;
Promotion202406SearchCouponsResponseDataCouponsThreshold.attributeTypeMap = [
    {
        "name": "minSpend",
        "baseName": "min_spend",
        "type": "Promotion202406SearchCouponsResponseDataCouponsThresholdMinSpend"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=SearchCouponsResponseDataCouponsThreshold.js.map