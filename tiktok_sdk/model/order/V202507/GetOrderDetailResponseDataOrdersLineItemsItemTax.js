"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax = void 0;
class Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax {
    static getAttributeTypeMap() {
        return Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax.attributeTypeMap;
    }
}
exports.Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax = Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax;
Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax.discriminator = undefined;
Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax.attributeTypeMap = [
    {
        "name": "taxAmount",
        "baseName": "tax_amount",
        "type": "string"
    },
    {
        "name": "taxRate",
        "baseName": "tax_rate",
        "type": "string"
    },
    {
        "name": "taxType",
        "baseName": "tax_type",
        "type": "string"
    }
];
//# sourceMappingURL=GetOrderDetailResponseDataOrdersLineItemsItemTax.js.map