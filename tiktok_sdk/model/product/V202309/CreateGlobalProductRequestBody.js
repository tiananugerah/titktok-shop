"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateGlobalProductRequestBody = void 0;
class Product202309CreateGlobalProductRequestBody {
    static getAttributeTypeMap() {
        return Product202309CreateGlobalProductRequestBody.attributeTypeMap;
    }
}
exports.Product202309CreateGlobalProductRequestBody = Product202309CreateGlobalProductRequestBody;
Product202309CreateGlobalProductRequestBody.discriminator = undefined;
Product202309CreateGlobalProductRequestBody.attributeTypeMap = [
    {
        "name": "brandId",
        "baseName": "brand_id",
        "type": "string"
    },
    {
        "name": "categoryId",
        "baseName": "category_id",
        "type": "string"
    },
    {
        "name": "categoryVersion",
        "baseName": "category_version",
        "type": "string"
    },
    {
        "name": "certifications",
        "baseName": "certifications",
        "type": "Array<Product202309CreateGlobalProductRequestBodyCertifications>"
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
        "name": "mainImages",
        "baseName": "main_images",
        "type": "Array<Product202309CreateGlobalProductRequestBodyMainImages>"
    },
    {
        "name": "manufacturer",
        "baseName": "manufacturer",
        "type": "Product202309CreateGlobalProductRequestBodyManufacturer"
    },
    {
        "name": "manufacturerIds",
        "baseName": "manufacturer_ids",
        "type": "Array<string>"
    },
    {
        "name": "packageDimensions",
        "baseName": "package_dimensions",
        "type": "Product202309CreateGlobalProductRequestBodyPackageDimensions"
    },
    {
        "name": "packageWeight",
        "baseName": "package_weight",
        "type": "Product202309CreateGlobalProductRequestBodyPackageWeight"
    },
    {
        "name": "productAttributes",
        "baseName": "product_attributes",
        "type": "Array<Product202309CreateGlobalProductRequestBodyProductAttributes>"
    },
    {
        "name": "responsiblePersonIds",
        "baseName": "responsible_person_ids",
        "type": "Array<string>"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202309CreateGlobalProductRequestBodySizeChart"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309CreateGlobalProductRequestBodySkus>"
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
        "name": "video",
        "baseName": "video",
        "type": "Product202309CreateGlobalProductRequestBodyVideo"
    }
];
//# sourceMappingURL=CreateGlobalProductRequestBody.js.map