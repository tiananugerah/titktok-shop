"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckListingPrerequisitesResponseDataShop = void 0;
class Product202309CheckListingPrerequisitesResponseDataShop {
    static getAttributeTypeMap() {
        return Product202309CheckListingPrerequisitesResponseDataShop.attributeTypeMap;
    }
}
exports.Product202309CheckListingPrerequisitesResponseDataShop = Product202309CheckListingPrerequisitesResponseDataShop;
Product202309CheckListingPrerequisitesResponseDataShop.discriminator = undefined;
Product202309CheckListingPrerequisitesResponseDataShop.attributeTypeMap = [
    {
        "name": "bankAccount",
        "baseName": "bank_account",
        "type": "string"
    },
    {
        "name": "contactInfo",
        "baseName": "contact_info",
        "type": "string"
    },
    {
        "name": "gne",
        "baseName": "gne",
        "type": "Product202309CheckListingPrerequisitesResponseDataShopGne"
    },
    {
        "name": "logistics",
        "baseName": "logistics",
        "type": "Product202309CheckListingPrerequisitesResponseDataShopLogistics"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "taxInfo",
        "baseName": "tax_info",
        "type": "string"
    }
];
//# sourceMappingURL=CheckListingPrerequisitesResponseDataShop.js.map