import http from 'http';
import { Logistics202309GetGlobalSellerWarehouseResponse } from '../model/logistics/V202309/GetGlobalSellerWarehouseResponse';
import { Logistics202309GetShippingProvidersResponse } from '../model/logistics/V202309/GetShippingProvidersResponse';
import { Logistics202309GetWarehouseDeliveryOptionsResponse } from '../model/logistics/V202309/GetWarehouseDeliveryOptionsResponse';
import { Logistics202309GetWarehouseListResponse } from '../model/logistics/V202309/GetWarehouseListResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum LogisticsV202309ApiApiKeys {
}
export declare class LogisticsV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "LogisticsV202309Api";
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
    setApiKey(key: LogisticsV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    DeliveryOptionsDeliveryOptionIdShippingProvidersGet(deliveryOptionId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Logistics202309GetShippingProvidersResponse;
    }>;
    GlobalWarehousesGet(xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Logistics202309GetGlobalSellerWarehouseResponse;
    }>;
    WarehousesGet(xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Logistics202309GetWarehouseListResponse;
    }>;
    WarehousesWarehouseIdDeliveryOptionsGet(warehouseId: string, xTtsAccessToken: string, contentType: string, scope?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Logistics202309GetWarehouseDeliveryOptionsResponse;
    }>;
}
export declare const LogisticsV202309ApiOperationNames: {
    readonly DeliveryOptionsDeliveryOptionIdShippingProvidersGet: "DeliveryOptionsDeliveryOptionIdShippingProvidersGet";
    readonly GlobalWarehousesGet: "GlobalWarehousesGet";
    readonly WarehousesGet: "WarehousesGet";
    readonly WarehousesWarehouseIdDeliveryOptionsGet: "WarehousesWarehouseIdDeliveryOptionsGet";
};
export type LogisticsV202309ApiOperationTypes = {
    DeliveryOptionsDeliveryOptionIdShippingProvidersGet: LogisticsV202309Api['DeliveryOptionsDeliveryOptionIdShippingProvidersGet'];
    GlobalWarehousesGet: LogisticsV202309Api['GlobalWarehousesGet'];
    WarehousesGet: LogisticsV202309Api['WarehousesGet'];
    WarehousesWarehouseIdDeliveryOptionsGet: LogisticsV202309Api['WarehousesWarehouseIdDeliveryOptionsGet'];
};
//# sourceMappingURL=logisticsV202309Api.d.ts.map