import http from 'http';
import { Event202309DeleteShopWebhookRequestBody } from '../model/event/V202309/DeleteShopWebhookRequestBody';
import { Event202309DeleteShopWebhookResponse } from '../model/event/V202309/DeleteShopWebhookResponse';
import { Event202309GetShopWebhooksResponse } from '../model/event/V202309/GetShopWebhooksResponse';
import { Event202309UpdateShopWebhookRequestBody } from '../model/event/V202309/UpdateShopWebhookRequestBody';
import { Event202309UpdateShopWebhookResponse } from '../model/event/V202309/UpdateShopWebhookResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum EventV202309ApiApiKeys {
}
export declare class EventV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "EventV202309Api";
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
    setApiKey(key: EventV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    WebhooksDelete(xTtsAccessToken: string, contentType: string, shopCipher?: string, DeleteShopWebhookRequestBody?: Event202309DeleteShopWebhookRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Event202309DeleteShopWebhookResponse;
    }>;
    WebhooksGet(xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Event202309GetShopWebhooksResponse;
    }>;
    WebhooksPut(xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdateShopWebhookRequestBody?: Event202309UpdateShopWebhookRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Event202309UpdateShopWebhookResponse;
    }>;
}
export declare const EventV202309ApiOperationNames: {
    readonly WebhooksDelete: "WebhooksDelete";
    readonly WebhooksGet: "WebhooksGet";
    readonly WebhooksPut: "WebhooksPut";
};
export type EventV202309ApiOperationTypes = {
    WebhooksDelete: EventV202309Api['WebhooksDelete'];
    WebhooksGet: EventV202309Api['WebhooksGet'];
    WebhooksPut: EventV202309Api['WebhooksPut'];
};
//# sourceMappingURL=eventV202309Api.d.ts.map