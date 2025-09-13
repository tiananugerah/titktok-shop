import http from 'http';
import { Fulfillment202309BatchShipPackagesRequestBody } from '../model/fulfillment/V202309/BatchShipPackagesRequestBody';
import { Fulfillment202309BatchShipPackagesResponse } from '../model/fulfillment/V202309/BatchShipPackagesResponse';
import { Fulfillment202309CombinePackageRequestBody } from '../model/fulfillment/V202309/CombinePackageRequestBody';
import { Fulfillment202309CombinePackageResponse } from '../model/fulfillment/V202309/CombinePackageResponse';
import { Fulfillment202309CreatePackagesRequestBody } from '../model/fulfillment/V202309/CreatePackagesRequestBody';
import { Fulfillment202309CreatePackagesResponse } from '../model/fulfillment/V202309/CreatePackagesResponse';
import { Fulfillment202309FulfillmentUploadDeliveryFileResponse } from '../model/fulfillment/V202309/FulfillmentUploadDeliveryFileResponse';
import { Fulfillment202309FulfillmentUploadDeliveryImageResponse } from '../model/fulfillment/V202309/FulfillmentUploadDeliveryImageResponse';
import { Fulfillment202309GetEligibleShippingServiceRequestBody } from '../model/fulfillment/V202309/GetEligibleShippingServiceRequestBody';
import { Fulfillment202309GetEligibleShippingServiceResponse } from '../model/fulfillment/V202309/GetEligibleShippingServiceResponse';
import { Fulfillment202309GetHandoverTimeslotsResponse } from '../model/fulfillment/V202309/GetHandoverTimeslotsResponse';
import { Fulfillment202309GetOrderSplitAttributesResponse } from '../model/fulfillment/V202309/GetOrderSplitAttributesResponse';
import { Fulfillment202309GetPackageDetailResponse } from '../model/fulfillment/V202309/GetPackageDetailResponse';
import { Fulfillment202309GetPackageHandoverTimeSlotsResponse } from '../model/fulfillment/V202309/GetPackageHandoverTimeSlotsResponse';
import { Fulfillment202309GetPackageShippingDocumentResponse } from '../model/fulfillment/V202309/GetPackageShippingDocumentResponse';
import { Fulfillment202309GetTrackingResponse } from '../model/fulfillment/V202309/GetTrackingResponse';
import { Fulfillment202309MarkPackageAsShippedRequestBody } from '../model/fulfillment/V202309/MarkPackageAsShippedRequestBody';
import { Fulfillment202309MarkPackageAsShippedResponse } from '../model/fulfillment/V202309/MarkPackageAsShippedResponse';
import { Fulfillment202309SchedulePackageHandoverRequestBody } from '../model/fulfillment/V202309/SchedulePackageHandoverRequestBody';
import { Fulfillment202309SchedulePackageHandoverResponse } from '../model/fulfillment/V202309/SchedulePackageHandoverResponse';
import { Fulfillment202309SearchCombinablePackagesResponse } from '../model/fulfillment/V202309/SearchCombinablePackagesResponse';
import { Fulfillment202309SearchPackageRequestBody } from '../model/fulfillment/V202309/SearchPackageRequestBody';
import { Fulfillment202309SearchPackageResponse } from '../model/fulfillment/V202309/SearchPackageResponse';
import { Fulfillment202309ShipPackageRequestBody } from '../model/fulfillment/V202309/ShipPackageRequestBody';
import { Fulfillment202309ShipPackageResponse } from '../model/fulfillment/V202309/ShipPackageResponse';
import { Fulfillment202309SplitOrdersRequestBody } from '../model/fulfillment/V202309/SplitOrdersRequestBody';
import { Fulfillment202309SplitOrdersResponse } from '../model/fulfillment/V202309/SplitOrdersResponse';
import { Fulfillment202309UncombinePackagesRequestBody } from '../model/fulfillment/V202309/UncombinePackagesRequestBody';
import { Fulfillment202309UncombinePackagesResponse } from '../model/fulfillment/V202309/UncombinePackagesResponse';
import { Fulfillment202309UpdatePackageDeliveryStatusRequestBody } from '../model/fulfillment/V202309/UpdatePackageDeliveryStatusRequestBody';
import { Fulfillment202309UpdatePackageDeliveryStatusResponse } from '../model/fulfillment/V202309/UpdatePackageDeliveryStatusResponse';
import { Fulfillment202309UpdatePackageShippingInfoRequestBody } from '../model/fulfillment/V202309/UpdatePackageShippingInfoRequestBody';
import { Fulfillment202309UpdatePackageShippingInfoResponse } from '../model/fulfillment/V202309/UpdatePackageShippingInfoResponse';
import { Fulfillment202309UpdateShippingInfoRequestBody } from '../model/fulfillment/V202309/UpdateShippingInfoRequestBody';
import { Fulfillment202309UpdateShippingInfoResponse } from '../model/fulfillment/V202309/UpdateShippingInfoResponse';
import { Authentication, Interceptor } from '../model/models';
import { RequestFile } from './apis';
export declare enum FulfillmentV202309ApiApiKeys {
}
export declare class FulfillmentV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "FulfillmentV202309Api";
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
    setApiKey(key: FulfillmentV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    CombinablePackagesSearchGet(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309SearchCombinablePackagesResponse;
    }>;
    FilesUploadPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, data?: RequestFile, name?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309FulfillmentUploadDeliveryFileResponse;
    }>;
    ImagesUploadPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, data?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309FulfillmentUploadDeliveryImageResponse;
    }>;
    OrdersOrderIdHandoverTimeSlotsGet(orderId: string, xTtsAccessToken: string, contentType: string, orderLineItemIds?: Array<string>, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309GetHandoverTimeslotsResponse;
    }>;
    OrdersOrderIdPackagesPost(orderId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, MarkPackageAsShippedRequestBody?: Fulfillment202309MarkPackageAsShippedRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309MarkPackageAsShippedResponse;
    }>;
    OrdersOrderIdShippingInfoUpdatePost(orderId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdateShippingInfoRequestBody?: Fulfillment202309UpdateShippingInfoRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309UpdateShippingInfoResponse;
    }>;
    OrdersOrderIdShippingServicesQueryPost(orderId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, GetEligibleShippingServiceRequestBody?: Fulfillment202309GetEligibleShippingServiceRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309GetEligibleShippingServiceResponse;
    }>;
    OrdersOrderIdSplitPost(orderId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, SplitOrdersRequestBody?: Fulfillment202309SplitOrdersRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309SplitOrdersResponse;
    }>;
    OrdersOrderIdTrackingGet(orderId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309GetTrackingResponse;
    }>;
    OrdersSplitAttributesGet(orderIds: Array<string>, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309GetOrderSplitAttributesResponse;
    }>;
    PackagesCombinePost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CombinePackageRequestBody?: Fulfillment202309CombinePackageRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309CombinePackageResponse;
    }>;
    PackagesDeliverPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdatePackageDeliveryStatusRequestBody?: Fulfillment202309UpdatePackageDeliveryStatusRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309UpdatePackageDeliveryStatusResponse;
    }>;
    PackagesPackageIdGet(packageId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309GetPackageDetailResponse;
    }>;
    PackagesPackageIdHandoverTimeSlotsGet(packageId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309GetPackageHandoverTimeSlotsResponse;
    }>;
    PackagesPackageIdShipPost(packageId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, ShipPackageRequestBody?: Fulfillment202309ShipPackageRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309ShipPackageResponse;
    }>;
    PackagesPackageIdShippingDocumentsGet(packageId: string, documentType: string, xTtsAccessToken: string, contentType: string, documentSize?: string, documentFormat?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309GetPackageShippingDocumentResponse;
    }>;
    PackagesPackageIdShippingInfoUpdatePost(packageId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdatePackageShippingInfoRequestBody?: Fulfillment202309UpdatePackageShippingInfoRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309UpdatePackageShippingInfoResponse;
    }>;
    PackagesPackageIdUncombinePost(packageId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, UncombinePackagesRequestBody?: Fulfillment202309UncombinePackagesRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309UncombinePackagesResponse;
    }>;
    PackagesPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CreatePackagesRequestBody?: Fulfillment202309CreatePackagesRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309CreatePackagesResponse;
    }>;
    PackagesSchedulePost(xTtsAccessToken: string, contentType: string, shopCipher?: string, SchedulePackageHandoverRequestBody?: Fulfillment202309SchedulePackageHandoverRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309SchedulePackageHandoverResponse;
    }>;
    PackagesSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, sortField?: string, sortOrder?: string, pageToken?: string, shopCipher?: string, SearchPackageRequestBody?: Fulfillment202309SearchPackageRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309SearchPackageResponse;
    }>;
    PackagesShipPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, BatchShipPackagesRequestBody?: Fulfillment202309BatchShipPackagesRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Fulfillment202309BatchShipPackagesResponse;
    }>;
}
export declare const FulfillmentV202309ApiOperationNames: {
    readonly CombinablePackagesSearchGet: "CombinablePackagesSearchGet";
    readonly FilesUploadPost: "FilesUploadPost";
    readonly ImagesUploadPost: "ImagesUploadPost";
    readonly OrdersOrderIdHandoverTimeSlotsGet: "OrdersOrderIdHandoverTimeSlotsGet";
    readonly OrdersOrderIdPackagesPost: "OrdersOrderIdPackagesPost";
    readonly OrdersOrderIdShippingInfoUpdatePost: "OrdersOrderIdShippingInfoUpdatePost";
    readonly OrdersOrderIdShippingServicesQueryPost: "OrdersOrderIdShippingServicesQueryPost";
    readonly OrdersOrderIdSplitPost: "OrdersOrderIdSplitPost";
    readonly OrdersOrderIdTrackingGet: "OrdersOrderIdTrackingGet";
    readonly OrdersSplitAttributesGet: "OrdersSplitAttributesGet";
    readonly PackagesCombinePost: "PackagesCombinePost";
    readonly PackagesDeliverPost: "PackagesDeliverPost";
    readonly PackagesPackageIdGet: "PackagesPackageIdGet";
    readonly PackagesPackageIdHandoverTimeSlotsGet: "PackagesPackageIdHandoverTimeSlotsGet";
    readonly PackagesPackageIdShipPost: "PackagesPackageIdShipPost";
    readonly PackagesPackageIdShippingDocumentsGet: "PackagesPackageIdShippingDocumentsGet";
    readonly PackagesPackageIdShippingInfoUpdatePost: "PackagesPackageIdShippingInfoUpdatePost";
    readonly PackagesPackageIdUncombinePost: "PackagesPackageIdUncombinePost";
    readonly PackagesPost: "PackagesPost";
    readonly PackagesSchedulePost: "PackagesSchedulePost";
    readonly PackagesSearchPost: "PackagesSearchPost";
    readonly PackagesShipPost: "PackagesShipPost";
};
export type FulfillmentV202309ApiOperationTypes = {
    CombinablePackagesSearchGet: FulfillmentV202309Api['CombinablePackagesSearchGet'];
    FilesUploadPost: FulfillmentV202309Api['FilesUploadPost'];
    ImagesUploadPost: FulfillmentV202309Api['ImagesUploadPost'];
    OrdersOrderIdHandoverTimeSlotsGet: FulfillmentV202309Api['OrdersOrderIdHandoverTimeSlotsGet'];
    OrdersOrderIdPackagesPost: FulfillmentV202309Api['OrdersOrderIdPackagesPost'];
    OrdersOrderIdShippingInfoUpdatePost: FulfillmentV202309Api['OrdersOrderIdShippingInfoUpdatePost'];
    OrdersOrderIdShippingServicesQueryPost: FulfillmentV202309Api['OrdersOrderIdShippingServicesQueryPost'];
    OrdersOrderIdSplitPost: FulfillmentV202309Api['OrdersOrderIdSplitPost'];
    OrdersOrderIdTrackingGet: FulfillmentV202309Api['OrdersOrderIdTrackingGet'];
    OrdersSplitAttributesGet: FulfillmentV202309Api['OrdersSplitAttributesGet'];
    PackagesCombinePost: FulfillmentV202309Api['PackagesCombinePost'];
    PackagesDeliverPost: FulfillmentV202309Api['PackagesDeliverPost'];
    PackagesPackageIdGet: FulfillmentV202309Api['PackagesPackageIdGet'];
    PackagesPackageIdHandoverTimeSlotsGet: FulfillmentV202309Api['PackagesPackageIdHandoverTimeSlotsGet'];
    PackagesPackageIdShipPost: FulfillmentV202309Api['PackagesPackageIdShipPost'];
    PackagesPackageIdShippingDocumentsGet: FulfillmentV202309Api['PackagesPackageIdShippingDocumentsGet'];
    PackagesPackageIdShippingInfoUpdatePost: FulfillmentV202309Api['PackagesPackageIdShippingInfoUpdatePost'];
    PackagesPackageIdUncombinePost: FulfillmentV202309Api['PackagesPackageIdUncombinePost'];
    PackagesPost: FulfillmentV202309Api['PackagesPost'];
    PackagesSchedulePost: FulfillmentV202309Api['PackagesSchedulePost'];
    PackagesSearchPost: FulfillmentV202309Api['PackagesSearchPost'];
    PackagesShipPost: FulfillmentV202309Api['PackagesShipPost'];
};
//# sourceMappingURL=fulfillmentV202309Api.d.ts.map