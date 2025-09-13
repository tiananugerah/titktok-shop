"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405GetCreatorProfileResponseData = void 0;
class AffiliateCreator202405GetCreatorProfileResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202405GetCreatorProfileResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202405GetCreatorProfileResponseData = AffiliateCreator202405GetCreatorProfileResponseData;
AffiliateCreator202405GetCreatorProfileResponseData.discriminator = undefined;
AffiliateCreator202405GetCreatorProfileResponseData.attributeTypeMap = [
    {
        "name": "avatar",
        "baseName": "avatar",
        "type": "AffiliateCreator202405GetCreatorProfileResponseDataAvatar"
    },
    {
        "name": "creatorUserId",
        "baseName": "creator_user_id",
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
        "name": "userType",
        "baseName": "user_type",
        "type": "string"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    }
];
//# sourceMappingURL=GetCreatorProfileResponseData.js.map