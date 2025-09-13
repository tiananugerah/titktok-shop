"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetCreatorProfileoldResponseData = void 0;
class Affiliate202309GetCreatorProfileoldResponseData {
    static getAttributeTypeMap() {
        return Affiliate202309GetCreatorProfileoldResponseData.attributeTypeMap;
    }
}
exports.Affiliate202309GetCreatorProfileoldResponseData = Affiliate202309GetCreatorProfileoldResponseData;
Affiliate202309GetCreatorProfileoldResponseData.discriminator = undefined;
Affiliate202309GetCreatorProfileoldResponseData.attributeTypeMap = [
    {
        "name": "avatar",
        "baseName": "avatar",
        "type": "Affiliate202309GetCreatorProfileoldResponseDataAvatar"
    },
    {
        "name": "partnerId",
        "baseName": "partner_id",
        "type": "string"
    },
    {
        "name": "partnerName",
        "baseName": "partner_name",
        "type": "string"
    },
    {
        "name": "permissions",
        "baseName": "permissions",
        "type": "Array<string>"
    },
    {
        "name": "registerRegion",
        "baseName": "register_region",
        "type": "string"
    },
    {
        "name": "selectionRegion",
        "baseName": "selection_region",
        "type": "string"
    },
    {
        "name": "sellerType",
        "baseName": "seller_type",
        "type": "string"
    },
    {
        "name": "userName",
        "baseName": "user_name",
        "type": "string"
    },
    {
        "name": "userType",
        "baseName": "user_type",
        "type": "string"
    }
];
//# sourceMappingURL=GetCreatorProfileoldResponseData.js.map