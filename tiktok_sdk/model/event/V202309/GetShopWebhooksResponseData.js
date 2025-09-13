"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event202309GetShopWebhooksResponseData = void 0;
class Event202309GetShopWebhooksResponseData {
    static getAttributeTypeMap() {
        return Event202309GetShopWebhooksResponseData.attributeTypeMap;
    }
}
exports.Event202309GetShopWebhooksResponseData = Event202309GetShopWebhooksResponseData;
Event202309GetShopWebhooksResponseData.discriminator = undefined;
Event202309GetShopWebhooksResponseData.attributeTypeMap = [
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    },
    {
        "name": "webhooks",
        "baseName": "webhooks",
        "type": "Array<Event202309GetShopWebhooksResponseDataWebhooks>"
    }
];
//# sourceMappingURL=GetShopWebhooksResponseData.js.map