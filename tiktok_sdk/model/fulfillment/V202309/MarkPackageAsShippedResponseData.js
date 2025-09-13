"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309MarkPackageAsShippedResponseData = void 0;
class Fulfillment202309MarkPackageAsShippedResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309MarkPackageAsShippedResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309MarkPackageAsShippedResponseData = Fulfillment202309MarkPackageAsShippedResponseData;
Fulfillment202309MarkPackageAsShippedResponseData.discriminator = undefined;
Fulfillment202309MarkPackageAsShippedResponseData.attributeTypeMap = [
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
        "name": "packageId",
        "baseName": "package_id",
        "type": "string"
    },
    {
        "name": "warning",
        "baseName": "warning",
        "type": "Fulfillment202309MarkPackageAsShippedResponseDataWarning"
    }
];
//# sourceMappingURL=MarkPackageAsShippedResponseData.js.map