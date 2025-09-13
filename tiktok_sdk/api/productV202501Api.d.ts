import http from 'http';
import { Product202501SearchManufacturersRequestBody } from '../model/product/V202501/SearchManufacturersRequestBody';
import { Product202501SearchManufacturersResponse } from '../model/product/V202501/SearchManufacturersResponse';
import { Product202501SearchResponsiblePersonsRequestBody } from '../model/product/V202501/SearchResponsiblePersonsRequestBody';
import { Product202501SearchResponsiblePersonsResponse } from '../model/product/V202501/SearchResponsiblePersonsResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202501ApiApiKeys {
}
export declare class ProductV202501Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202501Api";
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
    setApiKey(key: ProductV202501ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ComplianceManufacturersSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchManufacturersRequestBody?: Product202501SearchManufacturersRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202501SearchManufacturersResponse;
    }>;
    ComplianceResponsiblePersonsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchResponsiblePersonsRequestBody?: Product202501SearchResponsiblePersonsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202501SearchResponsiblePersonsResponse;
    }>;
}
export declare const ProductV202501ApiOperationNames: {
    readonly ComplianceManufacturersSearchPost: "ComplianceManufacturersSearchPost";
    readonly ComplianceResponsiblePersonsSearchPost: "ComplianceResponsiblePersonsSearchPost";
};
export type ProductV202501ApiOperationTypes = {
    ComplianceManufacturersSearchPost: ProductV202501Api['ComplianceManufacturersSearchPost'];
    ComplianceResponsiblePersonsSearchPost: ProductV202501Api['ComplianceResponsiblePersonsSearchPost'];
};
//# sourceMappingURL=productV202501Api.d.ts.map