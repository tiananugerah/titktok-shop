"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotion202309RemoveActivityProductRequestBody = void 0;
class Promotion202309RemoveActivityProductRequestBody {
    static getAttributeTypeMap() {
        return Promotion202309RemoveActivityProductRequestBody.attributeTypeMap;
    }
}
exports.Promotion202309RemoveActivityProductRequestBody = Promotion202309RemoveActivityProductRequestBody;
Promotion202309RemoveActivityProductRequestBody.discriminator = undefined;
Promotion202309RemoveActivityProductRequestBody.attributeTypeMap = [
    {
        "name": "productIds",
        "baseName": "product_ids",
        "type": "Array<string>"
    },
    {
        "name": "skuIds",
        "baseName": "sku_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=RemoveActivityProductRequestBody.js.map