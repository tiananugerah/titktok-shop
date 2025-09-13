import http from 'http';
import { DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody } from '../model/dataReconciliation/V202310/QualityFactoryOrderDataImportAPIRequestBody';
import { DataReconciliation202310QualityFactoryOrderDataImportAPIResponse } from '../model/dataReconciliation/V202310/QualityFactoryOrderDataImportAPIResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum DataReconciliationV202310ApiApiKeys {
}
export declare class DataReconciliationV202310Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "DataReconciliationV202310Api";
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
    setApiKey(key: DataReconciliationV202310ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    OrdersImportPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, QualityFactoryOrderDataImportAPIRequestBody?: DataReconciliation202310QualityFactoryOrderDataImportAPIRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DataReconciliation202310QualityFactoryOrderDataImportAPIResponse;
    }>;
}
export declare const DataReconciliationV202310ApiOperationNames: {
    readonly OrdersImportPost: "OrdersImportPost";
};
export type DataReconciliationV202310ApiOperationTypes = {
    OrdersImportPost: DataReconciliationV202310Api['OrdersImportPost'];
};
//# sourceMappingURL=dataReconciliationV202310Api.d.ts.map