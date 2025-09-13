"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityProductResponse = void 0;
class Promotion202309UpdateActivityProductResponse {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityProductResponse.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityProductResponse = Promotion202309UpdateActivityProductResponse;
Promotion202309UpdateActivityProductResponse.discriminator = undefined;
Promotion202309UpdateActivityProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202309UpdateActivityProductResponseData"
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
//# sourceMappingURL=UpdateActivityProductResponse.js.map