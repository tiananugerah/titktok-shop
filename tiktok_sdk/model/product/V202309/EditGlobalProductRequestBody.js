"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditGlobalProductRequestBody = void 0;
class Product202309EditGlobalProductRequestBody {
    static getAttributeTypeMap() {
        return Product202309EditGlobalProductRequestBody.attributeTypeMap;
    }
}
exports.Product202309EditGlobalProductRequestBody = Product202309EditGlobalProductRequestBody;
Product202309EditGlobalProductRequestBody.discriminator = undefined;
Product202309EditGlobalProductRequestBody.attributeTypeMap = [
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
        "type": "Array<Product202309EditGlobalProductRequestBodyCertifications>"
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
        "type": "Array<Product202309EditGlobalProductRequestBodyMainImages>"
    },
    {
        "name": "manufacturer",
        "baseName": "manufacturer",
        "type": "Product202309EditGlobalProductRequestBodyManufacturer"
    },
    {
        "name": "manufacturerIds",
        "baseName": "manufacturer_ids",
        "type": "Array<string>"
    },
    {
        "name": "packageDimensions",
        "baseName": "package_dimensions",
        "type": "Product202309EditGlobalProductRequestBodyPackageDimensions"
    },
    {
        "name": "packageWeight",
        "baseName": "package_weight",
        "type": "Product202309EditGlobalProductRequestBodyPackageWeight"
    },
    {
        "name": "productAttributes",
        "baseName": "product_attributes",
        "type": "Array<Product202309EditGlobalProductRequestBodyProductAttributes>"
    },
    {
        "name": "responsiblePersonIds",
        "baseName": "responsible_person_ids",
        "type": "Array<string>"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202309EditGlobalProductRequestBodySizeChart"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309EditGlobalProductRequestBodySkus>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "video",
        "baseName": "video",
        "type": "Product202309EditGlobalProductRequestBodyVideo"
    }
];
//# sourceMappingURL=EditGlobalProductRequestBody.js.map