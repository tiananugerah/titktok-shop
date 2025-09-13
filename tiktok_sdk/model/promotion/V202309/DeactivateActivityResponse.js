"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309DeactivateActivityResponse = void 0;
class Promotion202309DeactivateActivityResponse {
    static getAttributeTypeMap() {
        return Promotion202309DeactivateActivityResponse.attributeTypeMap;
    }
}
exports.Promotion202309DeactivateActivityResponse = Promotion202309DeactivateActivityResponse;
Promotion202309DeactivateActivityResponse.discriminator = undefined;
Promotion202309DeactivateActivityResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202309DeactivateActivityResponseData"
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
//# sourceMappingURL=DeactivateActivityResponse.js.map