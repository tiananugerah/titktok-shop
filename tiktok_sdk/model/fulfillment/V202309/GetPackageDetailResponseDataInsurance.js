"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetPackageDetailResponseDataInsurance = void 0;
class Fulfillment202309GetPackageDetailResponseDataInsurance {
    static getAttributeTypeMap() {
        return Fulfillment202309GetPackageDetailResponseDataInsurance.attributeTypeMap;
    }
}
exports.Fulfillment202309GetPackageDetailResponseDataInsurance = Fulfillment202309GetPackageDetailResponseDataInsurance;
Fulfillment202309GetPackageDetailResponseDataInsurance.discriminator = undefined;
Fulfillment202309GetPackageDetailResponseDataInsurance.attributeTypeMap = [
    {
        "name": "claimStatus",
        "baseName": "claim_status",
        "type": "string"
    },
    {
        "name": "coverageAmount",
        "baseName": "coverage_amount",
        "type": "string"
    },
    {
        "name": "isClaimEligible",
        "baseName": "is_claim_eligible",
        "type": "boolean"
    },
    {
        "name": "isPurchased",
        "baseName": "is_purchased",
        "type": "boolean"
    }
];
//# sourceMappingURL=GetPackageDetailResponseDataInsurance.js.map