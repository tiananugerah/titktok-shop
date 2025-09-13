import http from 'http';
import { AffiliateSeller202412CreateConversationwithcreatorRequestBody } from '../model/affiliateSeller/V202412/CreateConversationwithcreatorRequestBody';
import { AffiliateSeller202412CreateConversationwithcreatorResponse } from '../model/affiliateSeller/V202412/CreateConversationwithcreatorResponse';
import { AffiliateSeller202412CreateOpenCollaborationRequestBody } from '../model/affiliateSeller/V202412/CreateOpenCollaborationRequestBody';
import { AffiliateSeller202412CreateOpenCollaborationResponse } from '../model/affiliateSeller/V202412/CreateOpenCollaborationResponse';
import { AffiliateSeller202412GetConversationListRequestBody } from '../model/affiliateSeller/V202412/GetConversationListRequestBody';
import { AffiliateSeller202412GetConversationListResponse } from '../model/affiliateSeller/V202412/GetConversationListResponse';
import { AffiliateSeller202412GetLatestUnreadMessagesResponse } from '../model/affiliateSeller/V202412/GetLatestUnreadMessagesResponse';
import { AffiliateSeller202412GetMessageintheConversationResponse } from '../model/affiliateSeller/V202412/GetMessageintheConversationResponse';
import { AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse } from '../model/affiliateSeller/V202412/GetOpenCollaborationCreatorContentDetailResponse';
import { AffiliateSeller202412MarkConversationReadRequestBody } from '../model/affiliateSeller/V202412/MarkConversationReadRequestBody';
import { AffiliateSeller202412MarkConversationReadResponse } from '../model/affiliateSeller/V202412/MarkConversationReadResponse';
import { AffiliateSeller202412QueryTargetCollaborationDetailResponse } from '../model/affiliateSeller/V202412/QueryTargetCollaborationDetailResponse';
import { AffiliateSeller202412SearchOpenCollaborationRequestBody } from '../model/affiliateSeller/V202412/SearchOpenCollaborationRequestBody';
import { AffiliateSeller202412SearchOpenCollaborationResponse } from '../model/affiliateSeller/V202412/SearchOpenCollaborationResponse';
import { AffiliateSeller202412SendIMMessageRequestBody } from '../model/affiliateSeller/V202412/SendIMMessageRequestBody';
import { AffiliateSeller202412SendIMMessageResponse } from '../model/affiliateSeller/V202412/SendIMMessageResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum AffiliateSellerV202412ApiApiKeys {
}
export declare class AffiliateSellerV202412Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "AffiliateSellerV202412Api";
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
    setApiKey(key: AffiliateSellerV202412ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ConversationConversationIdMessagesGet(conversationId: string, pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412GetMessageintheConversationResponse;
    }>;
    ConversationsConversationIdMessagesPost(conversationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, SendIMMessageRequestBody?: AffiliateSeller202412SendIMMessageRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412SendIMMessageResponse;
    }>;
    ConversationsGet(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, onlyNeedConversationId?: boolean, conversationStatus?: string, shopCipher?: string, GetConversationListRequestBody?: AffiliateSeller202412GetConversationListRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412GetConversationListResponse;
    }>;
    ConversationsMessagesListNewestGet(xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412GetLatestUnreadMessagesResponse;
    }>;
    ConversationsPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CreateConversationwithcreatorRequestBody?: AffiliateSeller202412CreateConversationwithcreatorRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412CreateConversationwithcreatorResponse;
    }>;
    ConversatonsReadPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, MarkConversationReadRequestBody?: AffiliateSeller202412MarkConversationReadRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412MarkConversationReadResponse;
    }>;
    OpenCollaborationsCreatorContentDetailsGet(pageSize: number, productId: string, xTtsAccessToken: string, contentType: string, pageToken?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponse;
    }>;
    OpenCollaborationsPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CreateOpenCollaborationRequestBody?: AffiliateSeller202412CreateOpenCollaborationRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412CreateOpenCollaborationResponse;
    }>;
    OpenCollaborationsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, sortOrder?: string, sortField?: string, shopCipher?: string, SearchOpenCollaborationRequestBody?: AffiliateSeller202412SearchOpenCollaborationRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412SearchOpenCollaborationResponse;
    }>;
    TargetCollaborationsTargetCollaborationIdGet(targetCollaborationId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AffiliateSeller202412QueryTargetCollaborationDetailResponse;
    }>;
}
export declare const AffiliateSellerV202412ApiOperationNames: {
    readonly ConversationConversationIdMessagesGet: "ConversationConversationIdMessagesGet";
    readonly ConversationsConversationIdMessagesPost: "ConversationsConversationIdMessagesPost";
    readonly ConversationsGet: "ConversationsGet";
    readonly ConversationsMessagesListNewestGet: "ConversationsMessagesListNewestGet";
    readonly ConversationsPost: "ConversationsPost";
    readonly ConversatonsReadPost: "ConversatonsReadPost";
    readonly OpenCollaborationsCreatorContentDetailsGet: "OpenCollaborationsCreatorContentDetailsGet";
    readonly OpenCollaborationsPost: "OpenCollaborationsPost";
    readonly OpenCollaborationsSearchPost: "OpenCollaborationsSearchPost";
    readonly TargetCollaborationsTargetCollaborationIdGet: "TargetCollaborationsTargetCollaborationIdGet";
};
export type AffiliateSellerV202412ApiOperationTypes = {
    ConversationConversationIdMessagesGet: AffiliateSellerV202412Api['ConversationConversationIdMessagesGet'];
    ConversationsConversationIdMessagesPost: AffiliateSellerV202412Api['ConversationsConversationIdMessagesPost'];
    ConversationsGet: AffiliateSellerV202412Api['ConversationsGet'];
    ConversationsMessagesListNewestGet: AffiliateSellerV202412Api['ConversationsMessagesListNewestGet'];
    ConversationsPost: AffiliateSellerV202412Api['ConversationsPost'];
    ConversatonsReadPost: AffiliateSellerV202412Api['ConversatonsReadPost'];
    OpenCollaborationsCreatorContentDetailsGet: AffiliateSellerV202412Api['OpenCollaborationsCreatorContentDetailsGet'];
    OpenCollaborationsPost: AffiliateSellerV202412Api['OpenCollaborationsPost'];
    OpenCollaborationsSearchPost: AffiliateSellerV202412Api['OpenCollaborationsSearchPost'];
    TargetCollaborationsTargetCollaborationIdGet: AffiliateSellerV202412Api['TargetCollaborationsTargetCollaborationIdGet'];
};
//# sourceMappingURL=affiliateSellerV202412Api.d.ts.map