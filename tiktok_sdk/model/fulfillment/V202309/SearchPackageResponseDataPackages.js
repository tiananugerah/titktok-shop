"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SearchPackageResponseDataPackages = void 0;
class Fulfillment202309SearchPackageResponseDataPackages {
    static getAttributeTypeMap() {
        return Fulfillment202309SearchPackageResponseDataPackages.attributeTypeMap;
    }
}
exports.Fulfillment202309SearchPackageResponseDataPackages = Fulfillment202309SearchPackageResponseDataPackages;
Fulfillment202309SearchPackageResponseDataPackages.discriminator = undefined;
Fulfillment202309SearchPackageResponseDataPackages.attributeTypeMap = [
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "orderLineItemIds",
        "baseName": "order_line_item_ids",
        "type": "Array<string>"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<Fulfillment202309SearchPackageResponseDataPackagesOrders>"
    },
    {
        "name": "shippingProviderId",
        "baseName": "shipping_provider_id",
        "type": "string"
    },
    {
        "name": "shippingProviderName",
        "baseName": "shipping_provider_name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "trackingNumber",
        "baseName": "tracking_number",
        "type": "string"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=SearchPackageResponseDataPackages.js.map