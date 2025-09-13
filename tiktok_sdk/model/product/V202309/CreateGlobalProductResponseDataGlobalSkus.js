"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateGlobalProductResponseDataGlobalSkus = void 0;
class Product202309CreateGlobalProductResponseDataGlobalSkus {
    static getAttributeTypeMap() {
        return Product202309CreateGlobalProductResponseDataGlobalSkus.attributeTypeMap;
    }
}
exports.Product202309CreateGlobalProductResponseDataGlobalSkus = Product202309CreateGlobalProductResponseDataGlobalSkus;
Product202309CreateGlobalProductResponseDataGlobalSkus.discriminator = undefined;
Product202309CreateGlobalProductResponseDataGlobalSkus.attributeTypeMap = [
    {
        "name": "externalGlobalSkuId",
        "baseName": "external_global_sku_id",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "salesAttributes",
        "baseName": "sales_attributes",
        "type": "Array<Product202309CreateGlobalProductResponseDataGlobalSkusSalesAttributes>"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=CreateGlobalProductResponseDataGlobalSkus.js.map