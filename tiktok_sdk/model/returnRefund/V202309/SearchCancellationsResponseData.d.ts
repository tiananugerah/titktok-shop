import { ReturnRefund202309SearchCancellationsResponseDataCancellations } from './SearchCancellationsResponseDataCancellations';
export declare class ReturnRefund202309SearchCancellationsResponseData {
    'cancellations'?: Array<ReturnRefund202309SearchCancellationsResponseDataCancellations>;
    'nextPageToken'?: string;
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
//# sourceMappingURL=SearchCancellationsResponseData.d.ts.map