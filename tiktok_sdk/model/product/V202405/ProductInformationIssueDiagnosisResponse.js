"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202405ProductInformationIssueDiagnosisResponse = void 0;
class Product202405ProductInformationIssueDiagnosisResponse {
    static getAttributeTypeMap() {
        return Product202405ProductInformationIssueDiagnosisResponse.attributeTypeMap;
    }
}
exports.Product202405ProductInformationIssueDiagnosisResponse = Product202405ProductInformationIssueDiagnosisResponse;
Product202405ProductInformationIssueDiagnosisResponse.discriminator = undefined;
Product202405ProductInformationIssueDiagnosisResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202405ProductInformationIssueDiagnosisResponseData"
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
//# sourceMappingURL=ProductInformationIssueDiagnosisResponse.js.map