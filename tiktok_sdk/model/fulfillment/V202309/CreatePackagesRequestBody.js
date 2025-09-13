"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309CreatePackagesRequestBody = void 0;
class Fulfillment202309CreatePackagesRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309CreatePackagesRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309CreatePackagesRequestBody = Fulfillment202309CreatePackagesRequestBody;
Fulfillment202309CreatePackagesRequestBody.discriminator = undefined;
Fulfillment202309CreatePackagesRequestBody.attributeTypeMap = [
    {
        "name": "dimension",
        "baseName": "dimension",
        "type": "Fulfillment202309CreatePackagesRequestBodyDimension"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "orderLineItemIds",
        "baseName": "order_line_item_ids",
        "type": "Array<string>"
    },
    {
        "name": "shippingServiceId",
        "baseName": "shipping_service_id",
        "type": "string"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "Fulfillment202309CreatePackagesRequestBodyWeight"
    }
];
//# sourceMappingURL=CreatePackagesRequestBody.js.map