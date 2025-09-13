"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBody = void 0;
class Product202309PartialEditProductRequestBody {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBody.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBody = Product202309PartialEditProductRequestBody;
Product202309PartialEditProductRequestBody.discriminator = undefined;
Product202309PartialEditProductRequestBody.attributeTypeMap = [
    {
        "name": "brandId",
        "baseName": "brand_id",
        "type": "string"
    },
    {
        "name": "certifications",
        "baseName": "certifications",
        "type": "Array<Product202309PartialEditProductRequestBodyCertifications>"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "externalProductId",
        "baseName": "external_product_id",
        "type": "string"
    },
    {
        "name": "isCodAllowed",
        "baseName": "is_cod_allowed",
        "type": "boolean"
    },
    {
        "name": "listingPlatforms",
        "baseName": "listing_platforms",
        "type": "Array<string>"
    },
    {
        "name": "mainImages",
        "baseName": "main_images",
        "type": "Array<Product202309PartialEditProductRequestBodyMainImages>"
    },
    {
        "name": "manufacturerIds",
        "baseName": "manufacturer_ids",
        "type": "Array<string>"
    },
    {
        "name": "packageDimensions",
        "baseName": "package_dimensions",
        "type": "Product202309PartialEditProductRequestBodyPackageDimensions"
    },
    {
        "name": "packageWeight",
        "baseName": "package_weight",
        "type": "Product202309PartialEditProductRequestBodyPackageWeight"
    },
    {
        "name": "productAttributes",
        "baseName": "product_attributes",
        "type": "Array<Product202309PartialEditProductRequestBodyProductAttributes>"
    },
    {
        "name": "replicatedProducts",
        "baseName": "replicated_products",
        "type": "Array<Product202309PartialEditProductRequestBodyReplicatedProducts>"
    },
    {
        "name": "responsiblePersonIds",
        "baseName": "responsible_person_ids",
        "type": "Array<string>"
    },
    {
        "name": "saveMode",
        "baseName": "save_mode",
        "type": "string"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202309PartialEditProductRequestBodySizeChart"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309PartialEditProductRequestBodySkus>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "video",
        "baseName": "video",
        "type": "Product202309PartialEditProductRequestBodyVideo"
    }
];
//# sourceMappingURL=PartialEditProductRequestBody.js.map