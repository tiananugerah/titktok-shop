import http from 'http';
import { Product202405GetProductsSEOWordsResponse } from '../model/product/V202405/GetProductsSEOWordsResponse';
import { Product202405GetRecommendedProductTitleAndDescriptionResponse } from '../model/product/V202405/GetRecommendedProductTitleAndDescriptionResponse';
import { Product202405ProductInformationIssueDiagnosisResponse } from '../model/product/V202405/ProductInformationIssueDiagnosisResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum ProductV202405ApiApiKeys {
}
export declare class ProductV202405Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202405Api";
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
    setApiKey(key: ProductV202405ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    ProductsDiagnosesGet(productIds: Array<string>, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202405ProductInformationIssueDiagnosisResponse;
    }>;
    ProductsSeoWordsGet(productIds: Array<string>, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202405GetProductsSEOWordsResponse;
    }>;
    ProductsSuggestionsGet(productIds: Array<string>, xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202405GetRecommendedProductTitleAndDescriptionResponse;
    }>;
}
export declare const ProductV202405ApiOperationNames: {
    readonly ProductsDiagnosesGet: "ProductsDiagnosesGet";
    readonly ProductsSeoWordsGet: "ProductsSeoWordsGet";
    readonly ProductsSuggestionsGet: "ProductsSuggestionsGet";
};
export type ProductV202405ApiOperationTypes = {
    ProductsDiagnosesGet: ProductV202405Api['ProductsDiagnosesGet'];
    ProductsSeoWordsGet: ProductV202405Api['ProductsSeoWordsGet'];
    ProductsSuggestionsGet: ProductV202405Api['ProductsSuggestionsGet'];
};
//# sourceMappingURL=productV202405Api.d.ts.map