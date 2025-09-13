"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309CreatePackagesResponseData = void 0;
class Fulfillment202309CreatePackagesResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309CreatePackagesResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309CreatePackagesResponseData = Fulfillment202309CreatePackagesResponseData;
Fulfillment202309CreatePackagesResponseData.discriminator = undefined;
Fulfillment202309CreatePackagesResponseData.attributeTypeMap = [
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "dimension",
        "baseName": "dimension",
        "type": "Fulfillment202309CreatePackagesResponseDataDimension"
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
        "name": "packageId",
        "baseName": "package_id",
        "type": "string"
    },
    {
        "name": "shippingServiceInfo",
        "baseName": "shipping_service_info",
        "type": "Fulfillment202309CreatePackagesResponseDataShippingServiceInfo"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "Fulfillment202309CreatePackagesResponseDataWeight"
    }
];
//# sourceMappingURL=CreatePackagesResponseData.js.map