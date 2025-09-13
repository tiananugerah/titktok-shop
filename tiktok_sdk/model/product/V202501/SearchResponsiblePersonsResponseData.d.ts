import { Product202501SearchResponsiblePersonsResponseDataResponsiblePersons } from './SearchResponsiblePersonsResponseDataResponsiblePersons';
export declare class Product202501SearchResponsiblePersonsResponseData {
    'nextPageToken'?: string;
    'responsiblePersons'?: Array<Product202501SearchResponsiblePersonsResponseDataResponsiblePersons>;
    'totalCount'?: number;
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
//# sourceMappingURL=SearchResponsiblePersonsResponseData.d.ts.map