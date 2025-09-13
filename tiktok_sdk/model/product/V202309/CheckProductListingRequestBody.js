"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingRequestBody = void 0;
class Product202309CheckProductListingRequestBody {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingRequestBody.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingRequestBody = Product202309CheckProductListingRequestBody;
Product202309CheckProductListingRequestBody.discriminator = undefined;
Product202309CheckProductListingRequestBody.attributeTypeMap = [
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
        "name": "certifications",
        "baseName": "certifications",
        "type": "Array<Product202309CheckProductListingRequestBodyCertifications>"
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
        "type": "Array<Product202309CheckProductListingRequestBodyMainImages>"
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
        "type": "Product202309CheckProductListingRequestBodyPackageDimensions"
    },
    {
        "name": "packageWeight",
        "baseName": "package_weight",
        "type": "Product202309CheckProductListingRequestBodyPackageWeight"
    },
    {
        "name": "primaryCombinedProductId",
        "baseName": "primary_combined_product_id",
        "type": "string"
    },
    {
        "name": "productAttributes",
        "baseName": "product_attributes",
        "type": "Array<Product202309CheckProductListingRequestBodyProductAttributes>"
    },
    {
        "name": "responsiblePersonIds",
        "baseName": "responsible_person_ids",
        "type": "Array<string>"
    },
    {
        "name": "shippingInsuranceRequirement",
        "baseName": "shipping_insurance_requirement",
        "type": "string"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202309CheckProductListingRequestBodySizeChart"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309CheckProductListingRequestBodySkus>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "video",
        "baseName": "video",
        "type": "Product202309CheckProductListingRequestBodyVideo"
    }
];
//# sourceMappingURL=CheckProductListingRequestBody.js.map