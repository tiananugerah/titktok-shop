"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SplitOrdersRequestBody = void 0;
class Fulfillment202309SplitOrdersRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309SplitOrdersRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309SplitOrdersRequestBody = Fulfillment202309SplitOrdersRequestBody;
Fulfillment202309SplitOrdersRequestBody.discriminator = undefined;
Fulfillment202309SplitOrdersRequestBody.attributeTypeMap = [
    {
        "name": "splittableGroups",
        "baseName": "splittable_groups",
        "type": "Array<Fulfillment202309SplitOrdersRequestBodySplittableGroups>"
    }
];
//# sourceMappingURL=SplitOrdersRequestBody.js.map