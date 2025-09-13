"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrders = void 0;
class AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrders {
    static getAttributeTypeMap() {
        return AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrders.attributeTypeMap;
    }
}
exports.AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrders = AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrders;
AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrders.discriminator = undefined;
AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrders.attributeTypeMap = [
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
        "type": "Array<AffiliateCreator202410SearchCreatorAffiliateOrdersResponseDataOrdersSkus>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=SearchCreatorAffiliateOrdersResponseDataOrders.js.map