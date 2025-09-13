"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SplitOrdersResponseData = void 0;
class Fulfillment202309SplitOrdersResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309SplitOrdersResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309SplitOrdersResponseData = Fulfillment202309SplitOrdersResponseData;
Fulfillment202309SplitOrdersResponseData.discriminator = undefined;
Fulfillment202309SplitOrdersResponseData.attributeTypeMap = [
    {
        "name": "packages",
        "baseName": "packages",
        "type": "Array<Fulfillment202309SplitOrdersResponseDataPackages>"
    }
];
//# sourceMappingURL=SplitOrdersResponseData.js.map