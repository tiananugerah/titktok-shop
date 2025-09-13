"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SellerSearchSampleApplicationsResponseData = void 0;
class AffiliateSeller202409SellerSearchSampleApplicationsResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SellerSearchSampleApplicationsResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SellerSearchSampleApplicationsResponseData = AffiliateSeller202409SellerSearchSampleApplicationsResponseData;
AffiliateSeller202409SellerSearchSampleApplicationsResponseData.discriminator = undefined;
AffiliateSeller202409SellerSearchSampleApplicationsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "sampleApplications",
        "baseName": "sample_applications",
        "type": "Array<AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplications>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SellerSearchSampleApplicationsResponseData.js.map