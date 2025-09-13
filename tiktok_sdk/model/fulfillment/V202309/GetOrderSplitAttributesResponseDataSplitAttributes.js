"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes = void 0;
class Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes {
    static getAttributeTypeMap() {
        return Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes.attributeTypeMap;
    }
}
exports.Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes = Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes;
Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes.discriminator = undefined;
Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributes.attributeTypeMap = [
    {
        "name": "canSplit",
        "baseName": "can_split",
        "type": "boolean"
    },
    {
        "name": "mustSplit",
        "baseName": "must_split",
        "type": "boolean"
    },
    {
        "name": "mustSplitReasons",
        "baseName": "must_split_reasons",
        "type": "Array<Fulfillment202309GetOrderSplitAttributesResponseDataSplitAttributesMustSplitReasons>"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    }
];
//# sourceMappingURL=GetOrderSplitAttributesResponseDataSplitAttributes.js.map