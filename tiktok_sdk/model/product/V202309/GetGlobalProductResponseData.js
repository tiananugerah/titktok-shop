"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalProductResponseData = void 0;
class Product202309GetGlobalProductResponseData {
    static getAttributeTypeMap() {
        return Product202309GetGlobalProductResponseData.attributeTypeMap;
    }
}
exports.Product202309GetGlobalProductResponseData = Product202309GetGlobalProductResponseData;
Product202309GetGlobalProductResponseData.discriminator = undefined;
Product202309GetGlobalProductResponseData.attributeTypeMap = [
    {
        "name": "brand",
        "baseName": "brand",
        "type": "Product202309GetGlobalProductResponseDataBrand"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "Product202309GetGlobalProductResponseDataCategory"
    },
    {
        "name": "certifications",
        "baseName": "certifications",
        "type": "Array<Product202309GetGlobalProductResponseDataCertifications>"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "externalGlobalProductId",
        "baseName": "external_global_product_id",
        "type": "string"
    },
    {
        "name": "globalSellerId",
        "baseName": "global_seller_id",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "mainImages",
        "baseName": "main_images",
        "type": "Array<Product202309GetGlobalProductResponseDataMainImages>"
    },
    {
        "name": "manufacturer",
        "baseName": "manufacturer",
        "type": "Product202309GetGlobalProductResponseDataManufacturer"
    },
    {
        "name": "manufacturerIds",
        "baseName": "manufacturer_ids",
        "type": "Array<string>"
    },
    {
        "name": "packageDimensions",
        "baseName": "package_dimensions",
        "type": "Product202309GetGlobalProductResponseDataPackageDimensions"
    },
    {
        "name": "packageWeight",
        "baseName": "package_weight",
        "type": "Product202309GetGlobalProductResponseDataPackageWeight"
    },
    {
        "name": "productAttributes",
        "baseName": "product_attributes",
        "type": "Array<Product202309GetGlobalProductResponseDataProductAttributes>"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Product202309GetGlobalProductResponseDataProducts>"
    },
    {
        "name": "responsiblePersonIds",
        "baseName": "responsible_person_ids",
        "type": "Array<string>"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202309GetGlobalProductResponseDataSizeChart"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309GetGlobalProductResponseDataSkus>"
    },
    {
        "name": "sourceLocale",
        "baseName": "source_locale",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    },
    {
        "name": "video",
        "baseName": "video",
        "type": "Product202309GetGlobalProductResponseDataVideo"
    }
];
//# sourceMappingURL=GetGlobalProductResponseData.js.map