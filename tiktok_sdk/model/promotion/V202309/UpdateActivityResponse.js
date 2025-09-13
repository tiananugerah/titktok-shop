"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityResponse = void 0;
class Promotion202309UpdateActivityResponse {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityResponse.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityResponse = Promotion202309UpdateActivityResponse;
Promotion202309UpdateActivityResponse.discriminator = undefined;
Promotion202309UpdateActivityResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202309UpdateActivityResponseData"
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
//# sourceMappingURL=UpdateActivityResponse.js.map