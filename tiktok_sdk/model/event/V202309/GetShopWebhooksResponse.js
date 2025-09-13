"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event202309GetShopWebhooksResponse = void 0;
class Event202309GetShopWebhooksResponse {
    static getAttributeTypeMap() {
        return Event202309GetShopWebhooksResponse.attributeTypeMap;
    }
}
exports.Event202309GetShopWebhooksResponse = Event202309GetShopWebhooksResponse;
Event202309GetShopWebhooksResponse.discriminator = undefined;
Event202309GetShopWebhooksResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Event202309GetShopWebhooksResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetShopWebhooksResponse.js.map