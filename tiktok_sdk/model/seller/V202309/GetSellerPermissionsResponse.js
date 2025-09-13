"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller202309GetSellerPermissionsResponse = void 0;
class Seller202309GetSellerPermissionsResponse {
    static getAttributeTypeMap() {
        return Seller202309GetSellerPermissionsResponse.attributeTypeMap;
    }
}
exports.Seller202309GetSellerPermissionsResponse = Seller202309GetSellerPermissionsResponse;
Seller202309GetSellerPermissionsResponse.discriminator = undefined;
Seller202309GetSellerPermissionsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Seller202309GetSellerPermissionsResponseData"
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
//# sourceMappingURL=GetSellerPermissionsResponse.js.map