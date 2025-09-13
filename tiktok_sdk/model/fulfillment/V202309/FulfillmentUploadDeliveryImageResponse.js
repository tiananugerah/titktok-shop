"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309FulfillmentUploadDeliveryImageResponse = void 0;
class Fulfillment202309FulfillmentUploadDeliveryImageResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309FulfillmentUploadDeliveryImageResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309FulfillmentUploadDeliveryImageResponse = Fulfillment202309FulfillmentUploadDeliveryImageResponse;
Fulfillment202309FulfillmentUploadDeliveryImageResponse.discriminator = undefined;
Fulfillment202309FulfillmentUploadDeliveryImageResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309FulfillmentUploadDeliveryImageResponseData"
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
//# sourceMappingURL=FulfillmentUploadDeliveryImageResponse.js.map