"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SellerSearchSampleApplicationsResponse = void 0;
class AffiliateSeller202409SellerSearchSampleApplicationsResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SellerSearchSampleApplicationsResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SellerSearchSampleApplicationsResponse = AffiliateSeller202409SellerSearchSampleApplicationsResponse;
AffiliateSeller202409SellerSearchSampleApplicationsResponse.discriminator = undefined;
AffiliateSeller202409SellerSearchSampleApplicationsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202409SellerSearchSampleApplicationsResponseData"
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