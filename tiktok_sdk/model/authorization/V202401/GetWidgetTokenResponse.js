"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization202401GetWidgetTokenResponse = void 0;
class Authorization202401GetWidgetTokenResponse {
    static getAttributeTypeMap() {
        return Authorization202401GetWidgetTokenResponse.attributeTypeMap;
    }
}
exports.Authorization202401GetWidgetTokenResponse = Authorization202401GetWidgetTokenResponse;
Authorization202401GetWidgetTokenResponse.discriminator = undefined;
Authorization202401GetWidgetTokenResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Authorization202401GetWidgetTokenResponseData"
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
//# sourceMappingURL=GetWidgetTokenResponse.js.map