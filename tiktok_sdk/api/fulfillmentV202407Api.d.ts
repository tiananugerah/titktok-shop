import http from 'http';
import { Fulfillment202407CreateFirstMileBundleRequestBody } from '../model/fulfillment/V202407/CreateFirstMileBundleRequestBody';
import { Fulfillment202407CreateFirstMileBundleResponse } from '../model/fulfillment/V202407/CreateFirstMileBundleResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum FulfillmentV202407ApiApiKeys {
}
export declare class FulfillmentV202407Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "FulfillmentV202407Api";
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
    setApiKey(key: FulfillmentV202407ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    BundlesPost(xTtsAccessToken: string, contentType: string, CreateFirstMileBundleRequestBody?: Fulfillment202407CreateFirstMileBundleRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202407CreateFirstMileBundleResponse;
    }>;
}
export declare const FulfillmentV202407ApiOperationNames: {
    readonly BundlesPost: "BundlesPost";
};
export type FulfillmentV202407ApiOperationTypes = {
    BundlesPost: FulfillmentV202407Api['BundlesPost'];
};
//# sourceMappingURL=fulfillmentV202407Api.d.ts.map