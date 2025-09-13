"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse = void 0;
class AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse = AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse;
AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse.discriminator = undefined;
AffiliateSeller202505GetMarketplaceCreatorPerformanceResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202505GetMarketplaceCreatorPerformanceResponseData"
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