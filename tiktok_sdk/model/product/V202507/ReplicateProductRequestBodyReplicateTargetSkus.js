"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202507ReplicateProductRequestBodyReplicateTargetSkus = void 0;
class Product202507ReplicateProductRequestBodyReplicateTargetSkus {
    static getAttributeTypeMap() {
        return Product202507ReplicateProductRequestBodyReplicateTargetSkus.attributeTypeMap;
    }
}
exports.Product202507ReplicateProductRequestBodyReplicateTargetSkus = Product202507ReplicateProductRequestBodyReplicateTargetSkus;
Product202507ReplicateProductRequestBodyReplicateTargetSkus.discriminator = undefined;
Product202507ReplicateProductRequestBodyReplicateTargetSkus.attributeTypeMap = [
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Array<Product202507ReplicateProductRequestBodyReplicateTargetSkusInventory>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202507ReplicateProductRequestBodyReplicateTargetSkusPrice"
    },
    {
        "name": "sourceSkuId",
        "baseName": "source_sku_id",
        "type": "string"
    }
];
//# sourceMappingURL=ReplicateProductRequestBodyReplicateTargetSkus.js.map