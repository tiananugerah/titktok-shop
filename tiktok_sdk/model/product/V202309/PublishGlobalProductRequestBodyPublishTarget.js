"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PublishGlobalProductRequestBodyPublishTarget = void 0;
class Product202309PublishGlobalProductRequestBodyPublishTarget {
    static getAttributeTypeMap() {
        return Product202309PublishGlobalProductRequestBodyPublishTarget.attributeTypeMap;
    }
}
exports.Product202309PublishGlobalProductRequestBodyPublishTarget = Product202309PublishGlobalProductRequestBodyPublishTarget;
Product202309PublishGlobalProductRequestBodyPublishTarget.discriminator = undefined;
Product202309PublishGlobalProductRequestBodyPublishTarget.attributeTypeMap = [
    {
        "name": "manufacturerIds",
        "baseName": "manufacturer_ids",
        "type": "Array<string>"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "responsiblePersonIds",
        "baseName": "responsible_person_ids",
        "type": "Array<string>"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309PublishGlobalProductRequestBodyPublishTargetSkus>"
    }
];
//# sourceMappingURL=PublishGlobalProductRequestBodyPublishTarget.js.map