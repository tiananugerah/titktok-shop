"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202502UploadInvoiceResponseDataErrors = void 0;
class Fulfillment202502UploadInvoiceResponseDataErrors {
    static getAttributeTypeMap() {
        return Fulfillment202502UploadInvoiceResponseDataErrors.attributeTypeMap;
    }
}
exports.Fulfillment202502UploadInvoiceResponseDataErrors = Fulfillment202502UploadInvoiceResponseDataErrors;
Fulfillment202502UploadInvoiceResponseDataErrors.discriminator = undefined;
Fulfillment202502UploadInvoiceResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "Fulfillment202502UploadInvoiceResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=UploadInvoiceResponseDataErrors.js.map