"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202507SellerSearchSampleApplicationsResponseData = void 0;
class AffiliateSeller202507SellerSearchSampleApplicationsResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202507SellerSearchSampleApplicationsResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202507SellerSearchSampleApplicationsResponseData = AffiliateSeller202507SellerSearchSampleApplicationsResponseData;
AffiliateSeller202507SellerSearchSampleApplicationsResponseData.discriminator = undefined;
AffiliateSeller202507SellerSearchSampleApplicationsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "sampleApplications",
        "baseName": "sample_applications",
        "type": "Array<AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SellerSearchSampleApplicationsResponseData.js.map