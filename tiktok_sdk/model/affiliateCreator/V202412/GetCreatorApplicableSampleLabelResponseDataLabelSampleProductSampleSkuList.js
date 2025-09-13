"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList = void 0;
class AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList {
    static getAttributeTypeMap() {
        return AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList.attributeTypeMap;
    }
}
exports.AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList = AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList;
AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList.discriminator = undefined;
AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isAvailable",
        "baseName": "is_available",
        "type": "boolean"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListPrice"
    },
    {
        "name": "saleProperties",
        "baseName": "sale_properties",
        "type": "Array<AffiliateCreator202412GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuListSaleProperties>"
    },
    {
        "name": "salePropertyValueIds",
        "baseName": "sale_property_value_ids",
        "type": "string"
    },
    {
        "name": "unavailableReason",
        "baseName": "unavailable_reason",
        "type": "string"
    }
];
//# sourceMappingURL=GetCreatorApplicableSampleLabelResponseDataLabelSampleProductSampleSkuList.js.map