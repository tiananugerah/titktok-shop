"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SplitOrdersRequestBodySplittableGroups = void 0;
class Fulfillment202309SplitOrdersRequestBodySplittableGroups {
    static getAttributeTypeMap() {
        return Fulfillment202309SplitOrdersRequestBodySplittableGroups.attributeTypeMap;
    }
}
exports.Fulfillment202309SplitOrdersRequestBodySplittableGroups = Fulfillment202309SplitOrdersRequestBodySplittableGroups;
Fulfillment202309SplitOrdersRequestBodySplittableGroups.discriminator = undefined;
Fulfillment202309SplitOrdersRequestBodySplittableGroups.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "orderLineItemIds",
        "baseName": "order_line_item_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=SplitOrdersRequestBodySplittableGroups.js.map