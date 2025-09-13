"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct = void 0;
class AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct = AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct;
AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct.discriminator = undefined;
AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct.attributeTypeMap = [
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
        "type": "AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProductOriginalPrice"
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