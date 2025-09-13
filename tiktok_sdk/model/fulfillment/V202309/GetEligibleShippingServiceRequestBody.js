"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetEligibleShippingServiceRequestBody = void 0;
class Fulfillment202309GetEligibleShippingServiceRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309GetEligibleShippingServiceRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309GetEligibleShippingServiceRequestBody = Fulfillment202309GetEligibleShippingServiceRequestBody;
Fulfillment202309GetEligibleShippingServiceRequestBody.discriminator = undefined;
Fulfillment202309GetEligibleShippingServiceRequestBody.attributeTypeMap = [
    {
        "name": "dimension",
        "baseName": "dimension",
        "type": "Fulfillment202309GetEligibleShippingServiceRequestBodyDimension"
    },
    {
        "name": "orderLineItemIds",
        "baseName": "order_line_item_ids",
        "type": "Array<string>"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "Fulfillment202309GetEligibleShippingServiceRequestBodyWeight"
    }
];
//# sourceMappingURL=GetEligibleShippingServiceRequestBody.js.map