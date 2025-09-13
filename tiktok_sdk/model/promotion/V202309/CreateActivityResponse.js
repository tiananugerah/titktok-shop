"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309CreateActivityResponse = void 0;
class Promotion202309CreateActivityResponse {
    static getAttributeTypeMap() {
        return Promotion202309CreateActivityResponse.attributeTypeMap;
    }
}
exports.Promotion202309CreateActivityResponse = Promotion202309CreateActivityResponse;
Promotion202309CreateActivityResponse.discriminator = undefined;
Promotion202309CreateActivityResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202309CreateActivityResponseData"
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
//# sourceMappingURL=CreateActivityResponse.js.map