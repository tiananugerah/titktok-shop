"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event202309DeleteShopWebhookResponse = void 0;
class Event202309DeleteShopWebhookResponse {
    static getAttributeTypeMap() {
        return Event202309DeleteShopWebhookResponse.attributeTypeMap;
    }
}
exports.Event202309DeleteShopWebhookResponse = Event202309DeleteShopWebhookResponse;
Event202309DeleteShopWebhookResponse.discriminator = undefined;
Event202309DeleteShopWebhookResponse.attributeTypeMap = [
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
//# sourceMappingURL=DeleteShopWebhookResponse.js.map