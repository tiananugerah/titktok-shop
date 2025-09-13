"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309RemoveActivityProductResponse = void 0;
class Promotion202309RemoveActivityProductResponse {
    static getAttributeTypeMap() {
        return Promotion202309RemoveActivityProductResponse.attributeTypeMap;
    }
}
exports.Promotion202309RemoveActivityProductResponse = Promotion202309RemoveActivityProductResponse;
Promotion202309RemoveActivityProductResponse.discriminator = undefined;
Promotion202309RemoveActivityProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Promotion202309RemoveActivityProductResponseData"
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
//# sourceMappingURL=RemoveActivityProductResponse.js.map