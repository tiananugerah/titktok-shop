import { ClientConfiguration } from "./config";
import localVarRequest from "request";
export type AccessTokenProps = {
    access_token: string;
    refresh_token?: string;
    config?: ClientConfiguration;
};
export declare enum UserType {
    Seller = 0,
    Creator = 1
}
export type BaseResponse<T> = {
    code?: number;
    data?: T;
    message?: string;
    requestId?: string;
};
export type TokenResponse = {
    access_token: string;
    access_token_expire_in?: number;
    refresh_token: string;
    refresh_token_expire_in?: number;
    open_id?: string;
    seller_name?: string;
    seller_base_region?: string;
    user_type?: UserType;
    request_id?: string;
};
declare class AccessToken {
    access_token: string;
    refresh_token?: string;
    config?: ClientConfiguration;
    constructor({ access_token, refresh_token, config }: AccessTokenProps);
    refreshToken(props: {
        refresh_token?: string;
        auto_filled?: boolean;
    }): Promise<{
        response: localVarRequest.Response;
        body: BaseResponse<TokenResponse>;
    }>;
    getAccessToken(props: {
        auth_code: string;
        auto_filled?: boolean;
    }): Promise<{
        response: localVarRequest.Response;
        body: BaseResponse<TokenResponse>;
    }>;
}
declare class AccessTokenBuilder {
    static build(access_token: string, refresh_token?: string, config?: ClientConfiguration): AccessToken;
}
declare class AccessTokenTool {
    static refreshToken(refresh_token: string, app_key?: string, app_secret?: string): Promise<{
        response: localVarRequest.Response;
        body: BaseResponse<TokenResponse>;
    }>;
    static getAccessToken(auth_code: string, app_key?: string, app_secret?: string): Promise<{
        response: localVarRequest.Response;
        body: BaseResponse<TokenResponse>;
    }>;
}
export { AccessTokenBuilder, AccessTokenTool, AccessToken };
//# sourceMappingURL=token.d.ts.map