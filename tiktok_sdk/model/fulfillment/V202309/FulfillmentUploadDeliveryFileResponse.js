"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309FulfillmentUploadDeliveryFileResponse = void 0;
class Fulfillment202309FulfillmentUploadDeliveryFileResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309FulfillmentUploadDeliveryFileResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309FulfillmentUploadDeliveryFileResponse = Fulfillment202309FulfillmentUploadDeliveryFileResponse;
Fulfillment202309FulfillmentUploadDeliveryFileResponse.discriminator = undefined;
Fulfillment202309FulfillmentUploadDeliveryFileResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309FulfillmentUploadDeliveryFileResponseData"
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
//# sourceMappingURL=FulfillmentUploadDeliveryFileResponse.js.map