"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202411DiagnoseandOptimizeProductResponse = void 0;
class Product202411DiagnoseandOptimizeProductResponse {
    static getAttributeTypeMap() {
        return Product202411DiagnoseandOptimizeProductResponse.attributeTypeMap;
    }
}
exports.Product202411DiagnoseandOptimizeProductResponse = Product202411DiagnoseandOptimizeProductResponse;
Product202411DiagnoseandOptimizeProductResponse.discriminator = undefined;
Product202411DiagnoseandOptimizeProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202411DiagnoseandOptimizeProductResponseData"
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
//# sourceMappingURL=DiagnoseandOptimizeProductResponse.js.map