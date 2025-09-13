"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406SearchCouponsResponseDataCouponsDiscount = void 0;
class Promotion202406SearchCouponsResponseDataCouponsDiscount {
    static getAttributeTypeMap() {
        return Promotion202406SearchCouponsResponseDataCouponsDiscount.attributeTypeMap;
    }
}
exports.Promotion202406SearchCouponsResponseDataCouponsDiscount = Promotion202406SearchCouponsResponseDataCouponsDiscount;
Promotion202406SearchCouponsResponseDataCouponsDiscount.discriminator = undefined;
Promotion202406SearchCouponsResponseDataCouponsDiscount.attributeTypeMap = [
    {
        "name": "maxDiscount",
        "baseName": "max_discount",
        "type": "Promotion202406SearchCouponsResponseDataCouponsDiscountMaxDiscount"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "string"
    },
    {
        "name": "reductionAmount",
        "baseName": "reduction_amount",
        "type": "Promotion202406SearchCouponsResponseDataCouponsDiscountReductionAmount"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=SearchCouponsResponseDataCouponsDiscount.js.map