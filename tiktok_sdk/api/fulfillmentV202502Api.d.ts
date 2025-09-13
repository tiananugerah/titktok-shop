import http from 'http';
import { Fulfillment202502UploadInvoiceRequestBody } from '../model/fulfillment/V202502/UploadInvoiceRequestBody';
import { Fulfillment202502UploadInvoiceResponse } from '../model/fulfillment/V202502/UploadInvoiceResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum FulfillmentV202502ApiApiKeys {
}
export declare class FulfillmentV202502Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "FulfillmentV202502Api";
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
    setApiKey(key: FulfillmentV202502ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    InvoiceUploadPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, UploadInvoiceRequestBody?: Fulfillment202502UploadInvoiceRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202502UploadInvoiceResponse;
    }>;
}
export declare const FulfillmentV202502ApiOperationNames: {
    readonly InvoiceUploadPost: "InvoiceUploadPost";
};
export type FulfillmentV202502ApiOperationTypes = {
    InvoiceUploadPost: FulfillmentV202502Api['InvoiceUploadPost'];
};
//# sourceMappingURL=fulfillmentV202502Api.d.ts.map