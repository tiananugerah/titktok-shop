"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309GetActivityResponse = void 0;
class Promotion202309GetActivityResponse {
    static getAttributeTypeMap() {
        return Promotion202309GetActivityResponse.attributeTypeMap;
    }
}
exports.Promotion202309GetActivityResponse = Promotion202309GetActivityResponse;
Promotion202309GetActivityResponse.discriminator = undefined;
Promotion202309GetActivityResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202309GetActivityResponseData"
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
//# sourceMappingURL=GetActivityResponse.js.map