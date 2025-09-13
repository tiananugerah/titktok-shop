import http from 'http';
import { SupplyChain202309ConfirmPackageShipmentRequestBody } from '../model/supplyChain/V202309/ConfirmPackageShipmentRequestBody';
import { SupplyChain202309ConfirmPackageShipmentResponse } from '../model/supplyChain/V202309/ConfirmPackageShipmentResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum SupplyChainV202309ApiApiKeys {
}
export declare class SupplyChainV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "SupplyChainV202309Api";
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
    setApiKey(key: SupplyChainV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    PackagesSyncPost(xTtsAccessToken: string, contentType: string, ConfirmPackageShipmentRequestBody?: SupplyChain202309ConfirmPackageShipmentRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SupplyChain202309ConfirmPackageShipmentResponse;
    }>;
}
export declare const SupplyChainV202309ApiOperationNames: {
    readonly PackagesSyncPost: "PackagesSyncPost";
};
export type SupplyChainV202309ApiOperationTypes = {
    PackagesSyncPost: SupplyChainV202309Api['PackagesSyncPost'];
};
//# sourceMappingURL=supplyChainV202309Api.d.ts.map