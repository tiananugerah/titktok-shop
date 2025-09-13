"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetPackageDetailResponse = void 0;
class Fulfillment202309GetPackageDetailResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309GetPackageDetailResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309GetPackageDetailResponse = Fulfillment202309GetPackageDetailResponse;
Fulfillment202309GetPackageDetailResponse.discriminator = undefined;
Fulfillment202309GetPackageDetailResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309GetPackageDetailResponseData"
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
//# sourceMappingURL=GetPackageDetailResponse.js.map