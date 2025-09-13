"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202502UploadInvoiceResponse = void 0;
class Fulfillment202502UploadInvoiceResponse {
    static getAttributeTypeMap() {
        return Fulfillment202502UploadInvoiceResponse.attributeTypeMap;
    }
}
exports.Fulfillment202502UploadInvoiceResponse = Fulfillment202502UploadInvoiceResponse;
Fulfillment202502UploadInvoiceResponse.discriminator = undefined;
Fulfillment202502UploadInvoiceResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202502UploadInvoiceResponseData"
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
//# sourceMappingURL=UploadInvoiceResponse.js.map