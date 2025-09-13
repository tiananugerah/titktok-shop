"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406SearchCouponsResponse = void 0;
class Promotion202406SearchCouponsResponse {
    static getAttributeTypeMap() {
        return Promotion202406SearchCouponsResponse.attributeTypeMap;
    }
}
exports.Promotion202406SearchCouponsResponse = Promotion202406SearchCouponsResponse;
Promotion202406SearchCouponsResponse.discriminator = undefined;
Promotion202406SearchCouponsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202406SearchCouponsResponseData"
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
//# sourceMappingURL=SearchCouponsResponse.js.map