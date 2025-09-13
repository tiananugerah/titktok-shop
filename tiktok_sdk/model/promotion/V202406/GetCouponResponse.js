"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406GetCouponResponse = void 0;
class Promotion202406GetCouponResponse {
    static getAttributeTypeMap() {
        return Promotion202406GetCouponResponse.attributeTypeMap;
    }
}
exports.Promotion202406GetCouponResponse = Promotion202406GetCouponResponse;
Promotion202406GetCouponResponse.discriminator = undefined;
Promotion202406GetCouponResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202406GetCouponResponseData"
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
//# sourceMappingURL=GetCouponResponse.js.map