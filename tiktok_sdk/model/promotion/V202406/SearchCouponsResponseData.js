"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406SearchCouponsResponseData = void 0;
class Promotion202406SearchCouponsResponseData {
    static getAttributeTypeMap() {
        return Promotion202406SearchCouponsResponseData.attributeTypeMap;
    }
}
exports.Promotion202406SearchCouponsResponseData = Promotion202406SearchCouponsResponseData;
Promotion202406SearchCouponsResponseData.discriminator = undefined;
Promotion202406SearchCouponsResponseData.attributeTypeMap = [
    {
        "name": "coupons",
        "baseName": "coupons",
        "type": "Array<Promotion202406SearchCouponsResponseDataCoupons>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SearchCouponsResponseData.js.map