"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrders = void 0;
class AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrders {
    static getAttributeTypeMap() {
        return AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrders.attributeTypeMap;
    }
}
exports.AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrders = AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrders;
AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrders.discriminator = undefined;
AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrders.attributeTypeMap = [
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "deliveryTime",
        "baseName": "delivery_time",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkus"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=SearchTapAffiliateOrdersResponseDataOrders.js.map