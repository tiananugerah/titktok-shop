"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event202309UpdateShopWebhookResponse = void 0;
class Event202309UpdateShopWebhookResponse {
    static getAttributeTypeMap() {
        return Event202309UpdateShopWebhookResponse.attributeTypeMap;
    }
}
exports.Event202309UpdateShopWebhookResponse = Event202309UpdateShopWebhookResponse;
Event202309UpdateShopWebhookResponse.discriminator = undefined;
Event202309UpdateShopWebhookResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=UpdateShopWebhookResponse.js.map