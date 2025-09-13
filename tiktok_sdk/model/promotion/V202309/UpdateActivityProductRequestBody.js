"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309UpdateActivityProductRequestBody = void 0;
class Promotion202309UpdateActivityProductRequestBody {
    static getAttributeTypeMap() {
        return Promotion202309UpdateActivityProductRequestBody.attributeTypeMap;
    }
}
exports.Promotion202309UpdateActivityProductRequestBody = Promotion202309UpdateActivityProductRequestBody;
Promotion202309UpdateActivityProductRequestBody.discriminator = undefined;
Promotion202309UpdateActivityProductRequestBody.attributeTypeMap = [
    {
        "name": "activityId",
        "baseName": "activity_id",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Promotion202309UpdateActivityProductRequestBodyProducts>"
    }
];
//# sourceMappingURL=UpdateActivityProductRequestBody.js.map