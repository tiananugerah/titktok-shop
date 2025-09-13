"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseData = void 0;
class Product202309GetProductResponseData {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseData.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseData = Product202309GetProductResponseData;
Product202309GetProductResponseData.discriminator = undefined;
Product202309GetProductResponseData.attributeTypeMap = [
    {
        "name": "audit",
        "baseName": "audit",
        "type": "Product202309GetProductResponseDataAudit"
    },
    {
        "name": "auditFailedReasons",
        "baseName": "audit_failed_reasons",
        "type": "Array<Product202309GetProductResponseDataAuditFailedReasons>"
    },
    {
        "name": "brand",
        "baseName": "brand",
        "type": "Product202309GetProductResponseDataBrand"
    },
    {
        "name": "categoryChains",
        "baseName": "category_chains",
        "type": "Array<Product202309GetProductResponseDataCategoryChains>"
    },
    {
        "name": "certifications",
        "baseName": "certifications",
        "type": "Array<Product202309GetProductResponseDataCertifications>"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "deliveryOptions",
        "baseName": "delivery_options",
        "type": "Array<Product202309GetProductResponseDataDeliveryOptions>"
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
        "name": "globalProductAssociation",
        "baseName": "global_product_association",
        "type": "Product202309GetProductResponseDataGlobalProductAssociation"
    },
    {
        "name": "hasDraft",
        "baseName": "has_draft",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "integratedPlatformStatuses",
        "baseName": "integrated_platform_statuses",
        "type": "Array<Product202309GetProductResponseDataIntegratedPlatformStatuses>"
    },
    {
        "name": "isCodAllowed",
        "baseName": "is_cod_allowed",
        "type": "boolean"
    },
    {
        "name": "isNotForSale",
        "baseName": "is_not_for_sale",
        "type": "boolean"
    },
    {
        "name": "isPreOwned",
        "baseName": "is_pre_owned",
        "type": "boolean"
    },
    {
        "name": "isReplicated",
        "baseName": "is_replicated",
        "type": "boolean"
    },
    {
        "name": "listingQualityTier",
        "baseName": "listing_quality_tier",
        "type": "string"
    },
    {
        "name": "mainImages",
        "baseName": "main_images",
        "type": "Array<Product202309GetProductResponseDataMainImages>"
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
        "type": "Product202309GetProductResponseDataPackageDimensions"
    },
    {
        "name": "packageWeight",
        "baseName": "package_weight",
        "type": "Product202309GetProductResponseDataPackageWeight"
    },
    {
        "name": "prescriptionRequirement",
        "baseName": "prescription_requirement",
        "type": "Product202309GetProductResponseDataPrescriptionRequirement"
    },
    {
        "name": "primaryCombinedProductId",
        "baseName": "primary_combined_product_id",
        "type": "string"
    },
    {
        "name": "productAttributes",
        "baseName": "product_attributes",
        "type": "Array<Product202309GetProductResponseDataProductAttributes>"
    },
    {
        "name": "productFamilies",
        "baseName": "product_families",
        "type": "Array<Product202309GetProductResponseDataProductFamilies>"
    },
    {
        "name": "productStatus",
        "baseName": "product_status",
        "type": "string"
    },
    {
        "name": "productTypes",
        "baseName": "product_types",
        "type": "Array<string>"
    },
    {
        "name": "recommendedCategories",
        "baseName": "recommended_categories",
        "type": "Array<Product202309GetProductResponseDataRecommendedCategories>"
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
        "type": "Product202309GetProductResponseDataSizeChart"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<Product202309GetProductResponseDataSkus>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "subscribeInfo",
        "baseName": "subscribe_info",
        "type": "Product202309GetProductResponseDataSubscribeInfo"
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
        "type": "Product202309GetProductResponseDataVideo"
    }
];
//# sourceMappingURL=GetProductResponseData.js.map