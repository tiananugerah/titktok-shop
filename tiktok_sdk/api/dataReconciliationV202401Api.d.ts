import http from 'http';
import { DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody } from '../model/dataReconciliation/V202401/QualityFactoryOrderDataImportAPIRequestBody';
import { DataReconciliation202401QualityFactoryOrderDataImportAPIResponse } from '../model/dataReconciliation/V202401/QualityFactoryOrderDataImportAPIResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum DataReconciliationV202401ApiApiKeys {
}
export declare class DataReconciliationV202401Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "DataReconciliationV202401Api";
    protected authentications: {
        default: Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DataReconciliationV202401ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersImportPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, QualityFactoryOrderDataImportAPIRequestBody?: DataReconciliation202401QualityFactoryOrderDataImportAPIRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DataReconciliation202401QualityFactoryOrderDataImportAPIResponse;
    }>;
}
export declare const DataReconciliationV202401ApiOperationNames: {
    readonly OrdersImportPost: "OrdersImportPost";
};
export type DataReconciliationV202401ApiOperationTypes = {
    OrdersImportPost: DataReconciliationV202401Api['OrdersImportPost'];
};
//# sourceMappingURL=dataReconciliationV202401Api.d.ts.map