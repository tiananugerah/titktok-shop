"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetAttributesResponseDataAttributesRequirementConditions = void 0;
class Product202309GetAttributesResponseDataAttributesRequirementConditions {
    static getAttributeTypeMap() {
        return Product202309GetAttributesResponseDataAttributesRequirementConditions.attributeTypeMap;
    }
}
exports.Product202309GetAttributesResponseDataAttributesRequirementConditions = Product202309GetAttributesResponseDataAttributesRequirementConditions;
Product202309GetAttributesResponseDataAttributesRequirementConditions.discriminator = undefined;
Product202309GetAttributesResponseDataAttributesRequirementConditions.attributeTypeMap = [
    {
        "name": "attributeId",
        "baseName": "attribute_id",
        "type": "string"
    },
    {
        "name": "attributeValueId",
        "baseName": "attribute_value_id",
        "type": "string"
    },
    {
        "name": "conditionType",
        "baseName": "condition_type",
        "type": "string"
    }
];
//# sourceMappingURL=GetAttributesResponseDataAttributesRequirementConditions.js.map