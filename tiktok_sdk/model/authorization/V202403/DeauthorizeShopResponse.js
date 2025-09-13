"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization202403DeauthorizeShopResponse = void 0;
class Authorization202403DeauthorizeShopResponse {
    static getAttributeTypeMap() {
        return Authorization202403DeauthorizeShopResponse.attributeTypeMap;
    }
}
exports.Authorization202403DeauthorizeShopResponse = Authorization202403DeauthorizeShopResponse;
Authorization202403DeauthorizeShopResponse.discriminator = undefined;
Authorization202403DeauthorizeShopResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=DeauthorizeShopResponse.js.map