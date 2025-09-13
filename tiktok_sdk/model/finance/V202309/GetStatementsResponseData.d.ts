import { Finance202309GetStatementsResponseDataStatements } from './GetStatementsResponseDataStatements';
export declare class Finance202309GetStatementsResponseData {
    'nextPageToken'?: string;
    'statements'?: Array<Finance202309GetStatementsResponseDataStatements>;
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
//# sourceMappingURL=GetStatementsResponseData.d.ts.map