"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct = void 0;
class AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct {
    static getAttributeTypeMap() {
        return AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct.attributeTypeMap;
    }
}
exports.AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct = AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct;
AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct.discriminator = undefined;
AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "number"
    },
    {
        "name": "mainImageUrl",
        "baseName": "main_image_url",
        "type": "string"
    },
    {
        "name": "originalPrice",
        "baseName": "original_price",
        "type": "AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProductOriginalPrice"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=SearchOpenCollaborationResponseDataOpenCollaborationsProduct.js.map