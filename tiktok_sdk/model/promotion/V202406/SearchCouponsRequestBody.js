"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202406SearchCouponsRequestBody = void 0;
class Promotion202406SearchCouponsRequestBody {
    static getAttributeTypeMap() {
        return Promotion202406SearchCouponsRequestBody.attributeTypeMap;
    }
}
exports.Promotion202406SearchCouponsRequestBody = Promotion202406SearchCouponsRequestBody;
Promotion202406SearchCouponsRequestBody.discriminator = undefined;
Promotion202406SearchCouponsRequestBody.attributeTypeMap = [
    {
        "name": "displayType",
        "baseName": "display_type",
        "type": "Array<string>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Array<string>"
    },
    {
        "name": "titleKeyword",
        "baseName": "title_keyword",
        "type": "string"
    }
];
//# sourceMappingURL=SearchCouponsRequestBody.js.map