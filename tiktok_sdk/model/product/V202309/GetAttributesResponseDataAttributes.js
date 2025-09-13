"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetAttributesResponseDataAttributes = void 0;
class Product202309GetAttributesResponseDataAttributes {
    static getAttributeTypeMap() {
        return Product202309GetAttributesResponseDataAttributes.attributeTypeMap;
    }
}
exports.Product202309GetAttributesResponseDataAttributes = Product202309GetAttributesResponseDataAttributes;
Product202309GetAttributesResponseDataAttributes.discriminator = undefined;
Product202309GetAttributesResponseDataAttributes.attributeTypeMap = [
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
        "name": "requirementConditions",
        "baseName": "requirement_conditions",
        "type": "Array<Product202309GetAttributesResponseDataAttributesRequirementConditions>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "valueDataFormat",
        "baseName": "value_data_format",
        "type": "string"
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<Product202309GetAttributesResponseDataAttributesValues>"
    }
];
//# sourceMappingURL=GetAttributesResponseDataAttributes.js.map