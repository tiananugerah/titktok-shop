"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse = void 0;
class AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse = AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse;
AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse.discriminator = undefined;
AffiliateSeller202406GetMarketplaceCreatorPerformanceResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseData"
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
//# sourceMappingURL=GetMarketplaceCreatorPerformanceResponse.js.map