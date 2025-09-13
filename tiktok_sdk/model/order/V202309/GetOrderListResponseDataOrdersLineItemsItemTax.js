"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderListResponseDataOrdersLineItemsItemTax = void 0;
class Order202309GetOrderListResponseDataOrdersLineItemsItemTax {
    static getAttributeTypeMap() {
        return Order202309GetOrderListResponseDataOrdersLineItemsItemTax.attributeTypeMap;
    }
}
exports.Order202309GetOrderListResponseDataOrdersLineItemsItemTax = Order202309GetOrderListResponseDataOrdersLineItemsItemTax;
Order202309GetOrderListResponseDataOrdersLineItemsItemTax.discriminator = undefined;
Order202309GetOrderListResponseDataOrdersLineItemsItemTax.attributeTypeMap = [
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
//# sourceMappingURL=GetOrderListResponseDataOrdersLineItemsItemTax.js.map