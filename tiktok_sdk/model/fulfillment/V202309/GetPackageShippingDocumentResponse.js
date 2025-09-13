"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetPackageShippingDocumentResponse = void 0;
class Fulfillment202309GetPackageShippingDocumentResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309GetPackageShippingDocumentResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309GetPackageShippingDocumentResponse = Fulfillment202309GetPackageShippingDocumentResponse;
Fulfillment202309GetPackageShippingDocumentResponse.discriminator = undefined;
Fulfillment202309GetPackageShippingDocumentResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309GetPackageShippingDocumentResponseData"
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
//# sourceMappingURL=GetPackageShippingDocumentResponse.js.map