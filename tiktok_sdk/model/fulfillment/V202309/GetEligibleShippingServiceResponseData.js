"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetEligibleShippingServiceResponseData = void 0;
class Fulfillment202309GetEligibleShippingServiceResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309GetEligibleShippingServiceResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309GetEligibleShippingServiceResponseData = Fulfillment202309GetEligibleShippingServiceResponseData;
Fulfillment202309GetEligibleShippingServiceResponseData.discriminator = undefined;
Fulfillment202309GetEligibleShippingServiceResponseData.attributeTypeMap = [
    {
        "name": "dimension",
        "baseName": "dimension",
        "type": "Fulfillment202309GetEligibleShippingServiceResponseDataDimension"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "orderLineId",
        "baseName": "order_line_id",
        "type": "Array<string>"
    },
    {
        "name": "shippingServices",
        "baseName": "shipping_services",
        "type": "Array<Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices>"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "Fulfillment202309GetEligibleShippingServiceResponseDataWeight"
    }
];
//# sourceMappingURL=GetEligibleShippingServiceResponseData.js.map