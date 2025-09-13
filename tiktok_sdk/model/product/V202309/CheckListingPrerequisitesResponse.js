"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckListingPrerequisitesResponse = void 0;
class Product202309CheckListingPrerequisitesResponse {
    static getAttributeTypeMap() {
        return Product202309CheckListingPrerequisitesResponse.attributeTypeMap;
    }
}
exports.Product202309CheckListingPrerequisitesResponse = Product202309CheckListingPrerequisitesResponse;
Product202309CheckListingPrerequisitesResponse.discriminator = undefined;
Product202309CheckListingPrerequisitesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309CheckListingPrerequisitesResponseData"
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
//# sourceMappingURL=CheckListingPrerequisitesResponse.js.map