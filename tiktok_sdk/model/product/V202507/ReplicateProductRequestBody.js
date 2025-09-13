"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507ReplicateProductRequestBody = void 0;
class Product202507ReplicateProductRequestBody {
    static getAttributeTypeMap() {
        return Product202507ReplicateProductRequestBody.attributeTypeMap;
    }
}
exports.Product202507ReplicateProductRequestBody = Product202507ReplicateProductRequestBody;
Product202507ReplicateProductRequestBody.discriminator = undefined;
Product202507ReplicateProductRequestBody.attributeTypeMap = [
    {
        "name": "replicateTarget",
        "baseName": "replicate_target",
        "type": "Array<Product202507ReplicateProductRequestBodyReplicateTarget>"
    }
];
//# sourceMappingURL=ReplicateProductRequestBody.js.map