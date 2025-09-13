"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrders = void 0;
class AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrders {
    static getAttributeTypeMap() {
        return AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrders.attributeTypeMap;
    }
}
exports.AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrders = AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrders;
AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrders.discriminator = undefined;
AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrders.attributeTypeMap = [
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
        "type": "Array<AffiliateSeller202410SearchSellerAffiliateOrdersResponseDataOrdersSkus>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=SearchSellerAffiliateOrdersResponseDataOrders.js.map