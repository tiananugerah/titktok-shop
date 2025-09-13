import { Product202309CheckListingPrerequisitesResponseDataShopGne } from './CheckListingPrerequisitesResponseDataShopGne';
import { Product202309CheckListingPrerequisitesResponseDataShopLogistics } from './CheckListingPrerequisitesResponseDataShopLogistics';
export declare class Product202309CheckListingPrerequisitesResponseDataShop {
    'bankAccount'?: string;
    'contactInfo'?: string;
    'gne'?: Product202309CheckListingPrerequisitesResponseDataShopGne;
    'logistics'?: Product202309CheckListingPrerequisitesResponseDataShopLogistics;
    'status'?: string;
    'taxInfo'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
//# sourceMappingURL=CheckListingPrerequisitesResponseDataShop.d.ts.map