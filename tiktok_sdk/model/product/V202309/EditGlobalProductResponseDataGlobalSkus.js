"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditGlobalProductResponseDataGlobalSkus = void 0;
class Product202309EditGlobalProductResponseDataGlobalSkus {
    static getAttributeTypeMap() {
        return Product202309EditGlobalProductResponseDataGlobalSkus.attributeTypeMap;
    }
}
exports.Product202309EditGlobalProductResponseDataGlobalSkus = Product202309EditGlobalProductResponseDataGlobalSkus;
Product202309EditGlobalProductResponseDataGlobalSkus.discriminator = undefined;
Product202309EditGlobalProductResponseDataGlobalSkus.attributeTypeMap = [
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
        "type": "Array<Product202309EditGlobalProductResponseDataGlobalSkusSalesAttributes>"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
        "type": "string"
    }
];
//# sourceMappingURL=EditGlobalProductResponseDataGlobalSkus.js.map