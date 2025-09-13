import http from 'http';
import { Product202409CreateManufacturerRequestBody } from '../model/product/V202409/CreateManufacturerRequestBody';
import { Product202409CreateManufacturerResponse } from '../model/product/V202409/CreateManufacturerResponse';
import { Product202409CreateResponsiblePersonRequestBody } from '../model/product/V202409/CreateResponsiblePersonRequestBody';
import { Product202409CreateResponsiblePersonResponse } from '../model/product/V202409/CreateResponsiblePersonResponse';
import { Product202409PartialEditManufacturerRequestBody } from '../model/product/V202409/PartialEditManufacturerRequestBody';
import { Product202409PartialEditManufacturerResponse } from '../model/product/V202409/PartialEditManufacturerResponse';
import { Product202409PartialEditResponsiblePersonRequestBody } from '../model/product/V202409/PartialEditResponsiblePersonRequestBody';
import { Product202409PartialEditResponsiblePersonResponse } from '../model/product/V202409/PartialEditResponsiblePersonResponse';
import { Product202409SearchManufacturersRequestBody } from '../model/product/V202409/SearchManufacturersRequestBody';
import { Product202409SearchManufacturersResponse } from '../model/product/V202409/SearchManufacturersResponse';
import { Product202409SearchResponsiblePersonsRequestBody } from '../model/product/V202409/SearchResponsiblePersonsRequestBody';
import { Product202409SearchResponsiblePersonsResponse } from '../model/product/V202409/SearchResponsiblePersonsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202409ApiApiKeys {
}
export declare class ProductV202409Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202409Api";
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
    setApiKey(key: ProductV202409ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ComplianceManufacturersManufacturerIdPartialEditPost(manufacturerId: string, xTtsAccessToken: string, contentType: string, PartialEditManufacturerRequestBody?: Product202409PartialEditManufacturerRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202409PartialEditManufacturerResponse;
    }>;
    ComplianceManufacturersPost(xTtsAccessToken: string, contentType: string, CreateManufacturerRequestBody?: Product202409CreateManufacturerRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202409CreateManufacturerResponse;
    }>;
    ComplianceManufacturersSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchManufacturersRequestBody?: Product202409SearchManufacturersRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202409SearchManufacturersResponse;
    }>;
    ComplianceResponsiblePersonsPost(xTtsAccessToken: string, contentType: string, CreateResponsiblePersonRequestBody?: Product202409CreateResponsiblePersonRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202409CreateResponsiblePersonResponse;
    }>;
    ComplianceResponsiblePersonsResponsiblePersonIdPartialEditPost(responsiblePersonId: string, xTtsAccessToken: string, contentType: string, PartialEditResponsiblePersonRequestBody?: Product202409PartialEditResponsiblePersonRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202409PartialEditResponsiblePersonResponse;
    }>;
    ComplianceResponsiblePersonsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchResponsiblePersonsRequestBody?: Product202409SearchResponsiblePersonsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202409SearchResponsiblePersonsResponse;
    }>;
}
export declare const ProductV202409ApiOperationNames: {
    readonly ComplianceManufacturersManufacturerIdPartialEditPost: "ComplianceManufacturersManufacturerIdPartialEditPost";
    readonly ComplianceManufacturersPost: "ComplianceManufacturersPost";
    readonly ComplianceManufacturersSearchPost: "ComplianceManufacturersSearchPost";
    readonly ComplianceResponsiblePersonsPost: "ComplianceResponsiblePersonsPost";
    readonly ComplianceResponsiblePersonsResponsiblePersonIdPartialEditPost: "ComplianceResponsiblePersonsResponsiblePersonIdPartialEditPost";
    readonly ComplianceResponsiblePersonsSearchPost: "ComplianceResponsiblePersonsSearchPost";
};
export type ProductV202409ApiOperationTypes = {
    ComplianceManufacturersManufacturerIdPartialEditPost: ProductV202409Api['ComplianceManufacturersManufacturerIdPartialEditPost'];
    ComplianceManufacturersPost: ProductV202409Api['ComplianceManufacturersPost'];
    ComplianceManufacturersSearchPost: ProductV202409Api['ComplianceManufacturersSearchPost'];
    ComplianceResponsiblePersonsPost: ProductV202409Api['ComplianceResponsiblePersonsPost'];
    ComplianceResponsiblePersonsResponsiblePersonIdPartialEditPost: ProductV202409Api['ComplianceResponsiblePersonsResponsiblePersonIdPartialEditPost'];
    ComplianceResponsiblePersonsSearchPost: ProductV202409Api['ComplianceResponsiblePersonsSearchPost'];
};
//# sourceMappingURL=productV202409Api.d.ts.map