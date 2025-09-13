"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202407CreateCategoryUpgradeTaskResponse = void 0;
class Product202407CreateCategoryUpgradeTaskResponse {
    static getAttributeTypeMap() {
        return Product202407CreateCategoryUpgradeTaskResponse.attributeTypeMap;
    }
}
exports.Product202407CreateCategoryUpgradeTaskResponse = Product202407CreateCategoryUpgradeTaskResponse;
Product202407CreateCategoryUpgradeTaskResponse.discriminator = undefined;
Product202407CreateCategoryUpgradeTaskResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=CreateCategoryUpgradeTaskResponse.js.map