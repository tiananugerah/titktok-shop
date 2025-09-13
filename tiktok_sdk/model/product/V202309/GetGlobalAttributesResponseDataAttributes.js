"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalAttributesResponseDataAttributes = void 0;
class Product202309GetGlobalAttributesResponseDataAttributes {
    static getAttributeTypeMap() {
        return Product202309GetGlobalAttributesResponseDataAttributes.attributeTypeMap;
    }
}
exports.Product202309GetGlobalAttributesResponseDataAttributes = Product202309GetGlobalAttributesResponseDataAttributes;
Product202309GetGlobalAttributesResponseDataAttributes.discriminator = undefined;
Product202309GetGlobalAttributesResponseDataAttributes.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isCustomizable",
        "baseName": "is_customizable",
        "type": "boolean"
    },
    {
        "name": "isMultipleSelection",
        "baseName": "is_multiple_selection",
        "type": "boolean"
    },
    {
        "name": "isRequried",
        "baseName": "is_requried",
        "type": "boolean"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "optionalRegions",
        "baseName": "optional_regions",
        "type": "Array<string>"
    },
    {
        "name": "requiredRegions",
        "baseName": "required_regions",
        "type": "Array<string>"
    },
    {
        "name": "requirementConditions",
        "baseName": "requirement_conditions",
        "type": "Array<Product202309GetGlobalAttributesResponseDataAttributesRequirementConditions>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<Product202309GetGlobalAttributesResponseDataAttributesValues>"
    }
];
//# sourceMappingURL=GetGlobalAttributesResponseDataAttributes.js.map