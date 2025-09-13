"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility = void 0;
class ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility {
    static getAttributeTypeMap() {
        return ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility.attributeTypeMap;
    }
}
exports.ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility = ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility;
ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility.discriminator = undefined;
ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibility.attributeTypeMap = [
    {
        "name": "lineItemEligibility",
        "baseName": "line_item_eligibility",
        "type": "Array<ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility>"
    },
    {
        "name": "skuId",
        "baseName": "sku_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetAftersaleEligibilityResponseDataSkuEligibility.js.map