"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202507SellerSearchSampleApplicationsResponse = void 0;
class AffiliateSeller202507SellerSearchSampleApplicationsResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202507SellerSearchSampleApplicationsResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202507SellerSearchSampleApplicationsResponse = AffiliateSeller202507SellerSearchSampleApplicationsResponse;
AffiliateSeller202507SellerSearchSampleApplicationsResponse.discriminator = undefined;
AffiliateSeller202507SellerSearchSampleApplicationsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202507SellerSearchSampleApplicationsResponseData"
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
//# sourceMappingURL=SellerSearchSampleApplicationsResponse.js.map