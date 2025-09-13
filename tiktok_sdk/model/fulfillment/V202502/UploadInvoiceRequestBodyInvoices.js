"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202502UploadInvoiceRequestBodyInvoices = void 0;
class Fulfillment202502UploadInvoiceRequestBodyInvoices {
    static getAttributeTypeMap() {
        return Fulfillment202502UploadInvoiceRequestBodyInvoices.attributeTypeMap;
    }
}
exports.Fulfillment202502UploadInvoiceRequestBodyInvoices = Fulfillment202502UploadInvoiceRequestBodyInvoices;
Fulfillment202502UploadInvoiceRequestBodyInvoices.discriminator = undefined;
Fulfillment202502UploadInvoiceRequestBodyInvoices.attributeTypeMap = [
    {
        "name": "file",
        "baseName": "file",
        "type": "string"
    },
    {
        "name": "fileType",
        "baseName": "file_type",
        "type": "string"
    },
    {
        "name": "orderIds",
        "baseName": "order_ids",
        "type": "Array<string>"
    },
    {
        "name": "packageId",
        "baseName": "package_id",
        "type": "string"
    }
];
//# sourceMappingURL=UploadInvoiceRequestBodyInvoices.js.map