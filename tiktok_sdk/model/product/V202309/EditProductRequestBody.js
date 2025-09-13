"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductRequestBody = void 0;
class Product202309EditProductRequestBody {
    static getAttributeTypeMap() {
        return Product202309EditProductRequestBody.attributeTypeMap;
    }
}
exports.Product202309EditProductRequestBody = Product202309EditProductRequestBody;
Product202309EditProductRequestBody.discriminator = undefined;
Product202309EditProductRequestBody.attributeTypeMap = [
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
        "type": "Array<Product202309EditProductRequestBodyCertifications>"
    },
    {
        "name": "deliveryOptionIds",
        "baseName": "delivery_option_ids",
        "type": "Array<string>"
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
        "name": "isPreOwned",
        "baseName": "is_pre_owned",
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
        "type": "Array<Product202309EditProductRequestBodyMainImages>"
    },
    {
        "name": "manufacturerIds",
        "baseName": "manufacturer_ids",
        "type": "Array<string>"
    },
    {
        "name": "minimumOrderQuantity",
        "baseName": "minimum_order_quantity",
        "type": "number"
    },
    {
        "name": "packageDimensions",
        "baseName": "package_dimensions",
        "type": "Product202309EditProductRequestBodyPackageDimensions"
    },
    {
        "name": "packageWeight",
        "baseName": "package_weight",
        "type": "Product202309EditProductRequestBodyPackageWeight"
    },
    {
        "name": "productAttributes",
        "baseName": "product_attributes",
        "type": "Array<Product202309EditProductRequestBodyProductAttributes>"
    },
    {
        "name": "replicatedProducts",
        "baseName": "replicated_products",
        "type": "Array<Product202309EditProductRequestBodyReplicatedProducts>"
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
        "name": "shippingInsuranceRequirement",
        "baseName": "shipping_insurance_requirement",
        "type": "string"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202309EditProductRequestBodySizeChart"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309EditProductRequestBodySkus>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "video",
        "baseName": "video",
        "type": "Product202309EditProductRequestBodyVideo"
    }
];
//# sourceMappingURL=EditProductRequestBody.js.map