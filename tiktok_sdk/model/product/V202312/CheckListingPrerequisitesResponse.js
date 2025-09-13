"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312CheckListingPrerequisitesResponse = void 0;
class Product202312CheckListingPrerequisitesResponse {
    static getAttributeTypeMap() {
        return Product202312CheckListingPrerequisitesResponse.attributeTypeMap;
    }
}
exports.Product202312CheckListingPrerequisitesResponse = Product202312CheckListingPrerequisitesResponse;
Product202312CheckListingPrerequisitesResponse.discriminator = undefined;
Product202312CheckListingPrerequisitesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202312CheckListingPrerequisitesResponseData"
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