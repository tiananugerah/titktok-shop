"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202502UploadInvoiceResponseDataErrorsDetail = void 0;
class Fulfillment202502UploadInvoiceResponseDataErrorsDetail {
    static getAttributeTypeMap() {
        return Fulfillment202502UploadInvoiceResponseDataErrorsDetail.attributeTypeMap;
    }
}
exports.Fulfillment202502UploadInvoiceResponseDataErrorsDetail = Fulfillment202502UploadInvoiceResponseDataErrorsDetail;
Fulfillment202502UploadInvoiceResponseDataErrorsDetail.discriminator = undefined;
Fulfillment202502UploadInvoiceResponseDataErrorsDetail.attributeTypeMap = [
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
//# sourceMappingURL=UploadInvoiceResponseDataErrorsDetail.js.map