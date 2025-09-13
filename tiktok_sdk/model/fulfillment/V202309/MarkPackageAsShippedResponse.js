"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309MarkPackageAsShippedResponse = void 0;
class Fulfillment202309MarkPackageAsShippedResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309MarkPackageAsShippedResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309MarkPackageAsShippedResponse = Fulfillment202309MarkPackageAsShippedResponse;
Fulfillment202309MarkPackageAsShippedResponse.discriminator = undefined;
Fulfillment202309MarkPackageAsShippedResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309MarkPackageAsShippedResponseData"
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
//# sourceMappingURL=MarkPackageAsShippedResponse.js.map