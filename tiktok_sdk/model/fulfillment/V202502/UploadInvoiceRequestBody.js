"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202502UploadInvoiceRequestBody = void 0;
class Fulfillment202502UploadInvoiceRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202502UploadInvoiceRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202502UploadInvoiceRequestBody = Fulfillment202502UploadInvoiceRequestBody;
Fulfillment202502UploadInvoiceRequestBody.discriminator = undefined;
Fulfillment202502UploadInvoiceRequestBody.attributeTypeMap = [
    {
        "name": "invoices",
        "baseName": "invoices",
        "type": "Array<Fulfillment202502UploadInvoiceRequestBodyInvoices>"
    }
];
//# sourceMappingURL=UploadInvoiceRequestBody.js.map