"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507ReplicateProductRequestBodyReplicateTarget = void 0;
class Product202507ReplicateProductRequestBodyReplicateTarget {
    static getAttributeTypeMap() {
        return Product202507ReplicateProductRequestBodyReplicateTarget.attributeTypeMap;
    }
}
exports.Product202507ReplicateProductRequestBodyReplicateTarget = Product202507ReplicateProductRequestBodyReplicateTarget;
Product202507ReplicateProductRequestBodyReplicateTarget.discriminator = undefined;
Product202507ReplicateProductRequestBodyReplicateTarget.attributeTypeMap = [
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202507ReplicateProductRequestBodyReplicateTargetSkus>"
    }
];
//# sourceMappingURL=ReplicateProductRequestBodyReplicateTarget.js.map