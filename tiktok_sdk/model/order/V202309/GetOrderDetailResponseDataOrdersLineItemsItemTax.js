"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax = void 0;
class Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax {
    static getAttributeTypeMap() {
        return Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax.attributeTypeMap;
    }
}
exports.Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax = Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax;
Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax.discriminator = undefined;
Order202309GetOrderDetailResponseDataOrdersLineItemsItemTax.attributeTypeMap = [
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