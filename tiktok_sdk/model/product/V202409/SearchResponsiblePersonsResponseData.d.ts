import { Product202409SearchResponsiblePersonsResponseDataResponsiblePersons } from './SearchResponsiblePersonsResponseDataResponsiblePersons';
export declare class Product202409SearchResponsiblePersonsResponseData {
    'nextPageToken'?: string;
    'responsiblePersons'?: Array<Product202409SearchResponsiblePersonsResponseDataResponsiblePersons>;
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