"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorization202312GetWidgetTokenResponse = void 0;
class Authorization202312GetWidgetTokenResponse {
    static getAttributeTypeMap() {
        return Authorization202312GetWidgetTokenResponse.attributeTypeMap;
    }
}
exports.Authorization202312GetWidgetTokenResponse = Authorization202312GetWidgetTokenResponse;
Authorization202312GetWidgetTokenResponse.discriminator = undefined;
Authorization202312GetWidgetTokenResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Authorization202312GetWidgetTokenResponseData"
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