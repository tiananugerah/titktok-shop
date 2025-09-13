"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility = void 0;
class ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility {
    static getAttributeTypeMap() {
        return ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility.attributeTypeMap;
    }
}
exports.ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility = ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility;
ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility.discriminator = undefined;
ReturnRefund202309GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility.attributeTypeMap = [
    {
        "name": "eligible",
        "baseName": "eligible",
        "type": "boolean"
    },
    {
        "name": "ineligibleCode",
        "baseName": "ineligible_code",
        "type": "number"
    },
    {
        "name": "ineligibleReason",
        "baseName": "ineligible_reason",
        "type": "string"
    },
    {
        "name": "orderLineItemsIds",
        "baseName": "order_line_items_ids",
        "type": "Array<string>"
    },
    {
        "name": "requestType",
        "baseName": "request_type",
        "type": "string"
    }
];
//# sourceMappingURL=GetAftersaleEligibilityResponseDataSkuEligibilityLineItemEligibility.js.map