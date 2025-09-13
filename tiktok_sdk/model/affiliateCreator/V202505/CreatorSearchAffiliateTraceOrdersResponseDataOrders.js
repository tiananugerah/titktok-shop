"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrders = void 0;
class AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrders {
    static getAttributeTypeMap() {
        return AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrders.attributeTypeMap;
    }
}
exports.AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrders = AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrders;
AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrders.discriminator = undefined;
AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrders.attributeTypeMap = [
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
        "type": "number"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<AffiliateCreator202505CreatorSearchAffiliateTraceOrdersResponseDataOrdersSkus>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=CreatorSearchAffiliateTraceOrdersResponseDataOrders.js.map