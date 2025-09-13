import http from 'http';
import { Product202309ActivateProductRequestBody } from '../model/product/V202309/ActivateProductRequestBody';
import { Product202309ActivateProductResponse } from '../model/product/V202309/ActivateProductResponse';
import { Product202309CheckListingPrerequisitesResponse } from '../model/product/V202309/CheckListingPrerequisitesResponse';
import { Product202309CheckProductListingRequestBody } from '../model/product/V202309/CheckProductListingRequestBody';
import { Product202309CheckProductListingResponse } from '../model/product/V202309/CheckProductListingResponse';
import { Product202309CreateCustomBrandsRequestBody } from '../model/product/V202309/CreateCustomBrandsRequestBody';
import { Product202309CreateCustomBrandsResponse } from '../model/product/V202309/CreateCustomBrandsResponse';
import { Product202309CreateGlobalProductRequestBody } from '../model/product/V202309/CreateGlobalProductRequestBody';
import { Product202309CreateGlobalProductResponse } from '../model/product/V202309/CreateGlobalProductResponse';
import { Product202309CreateProductRequestBody } from '../model/product/V202309/CreateProductRequestBody';
import { Product202309CreateProductResponse } from '../model/product/V202309/CreateProductResponse';
import { Product202309DeactivateProductsRequestBody } from '../model/product/V202309/DeactivateProductsRequestBody';
import { Product202309DeactivateProductsResponse } from '../model/product/V202309/DeactivateProductsResponse';
import { Product202309DeleteGlobalProductsRequestBody } from '../model/product/V202309/DeleteGlobalProductsRequestBody';
import { Product202309DeleteGlobalProductsResponse } from '../model/product/V202309/DeleteGlobalProductsResponse';
import { Product202309DeleteProductsRequestBody } from '../model/product/V202309/DeleteProductsRequestBody';
import { Product202309DeleteProductsResponse } from '../model/product/V202309/DeleteProductsResponse';
import { Product202309EditGlobalProductRequestBody } from '../model/product/V202309/EditGlobalProductRequestBody';
import { Product202309EditGlobalProductResponse } from '../model/product/V202309/EditGlobalProductResponse';
import { Product202309EditProductRequestBody } from '../model/product/V202309/EditProductRequestBody';
import { Product202309EditProductResponse } from '../model/product/V202309/EditProductResponse';
import { Product202309GetAttributesResponse } from '../model/product/V202309/GetAttributesResponse';
import { Product202309GetBrandsResponse } from '../model/product/V202309/GetBrandsResponse';
import { Product202309GetCategoriesResponse } from '../model/product/V202309/GetCategoriesResponse';
import { Product202309GetCategoryRulesResponse } from '../model/product/V202309/GetCategoryRulesResponse';
import { Product202309GetGlobalAttributesResponse } from '../model/product/V202309/GetGlobalAttributesResponse';
import { Product202309GetGlobalCategoriesResponse } from '../model/product/V202309/GetGlobalCategoriesResponse';
import { Product202309GetGlobalCategoryRulesResponse } from '../model/product/V202309/GetGlobalCategoryRulesResponse';
import { Product202309GetGlobalProductResponse } from '../model/product/V202309/GetGlobalProductResponse';
import { Product202309GetProductResponse } from '../model/product/V202309/GetProductResponse';
import { Product202309InventorySearchRequestBody } from '../model/product/V202309/InventorySearchRequestBody';
import { Product202309InventorySearchResponse } from '../model/product/V202309/InventorySearchResponse';
import { Product202309PartialEditProductRequestBody } from '../model/product/V202309/PartialEditProductRequestBody';
import { Product202309PartialEditProductResponse } from '../model/product/V202309/PartialEditProductResponse';
import { Product202309PublishGlobalProductRequestBody } from '../model/product/V202309/PublishGlobalProductRequestBody';
import { Product202309PublishGlobalProductResponse } from '../model/product/V202309/PublishGlobalProductResponse';
import { Product202309RecommendCategoryRequestBody } from '../model/product/V202309/RecommendCategoryRequestBody';
import { Product202309RecommendCategoryResponse } from '../model/product/V202309/RecommendCategoryResponse';
import { Product202309RecommendGlobalCategoriesRequestBody } from '../model/product/V202309/RecommendGlobalCategoriesRequestBody';
import { Product202309RecommendGlobalCategoriesResponse } from '../model/product/V202309/RecommendGlobalCategoriesResponse';
import { Product202309RecoverProductsRequestBody } from '../model/product/V202309/RecoverProductsRequestBody';
import { Product202309RecoverProductsResponse } from '../model/product/V202309/RecoverProductsResponse';
import { Product202309SearchGlobalProductsRequestBody } from '../model/product/V202309/SearchGlobalProductsRequestBody';
import { Product202309SearchGlobalProductsResponse } from '../model/product/V202309/SearchGlobalProductsResponse';
import { Product202309SearchProductsRequestBody } from '../model/product/V202309/SearchProductsRequestBody';
import { Product202309SearchProductsResponse } from '../model/product/V202309/SearchProductsResponse';
import { Product202309UpdateGlobalInventoryRequestBody } from '../model/product/V202309/UpdateGlobalInventoryRequestBody';
import { Product202309UpdateGlobalInventoryResponse } from '../model/product/V202309/UpdateGlobalInventoryResponse';
import { Product202309UpdateInventoryRequestBody } from '../model/product/V202309/UpdateInventoryRequestBody';
import { Product202309UpdateInventoryResponse } from '../model/product/V202309/UpdateInventoryResponse';
import { Product202309UpdatePriceRequestBody } from '../model/product/V202309/UpdatePriceRequestBody';
import { Product202309UpdatePriceResponse } from '../model/product/V202309/UpdatePriceResponse';
import { Product202309UploadProductFileResponse } from '../model/product/V202309/UploadProductFileResponse';
import { Product202309UploadProductImageResponse } from '../model/product/V202309/UploadProductImageResponse';
import { Authentication, Interceptor } from '../model/models';
import { RequestFile } from './apis';
export declare enum ProductV202309ApiApiKeys {
}
export declare class ProductV202309Api {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    static readonly apiName: "ProductV202309Api";
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
    setApiKey(key: ProductV202309ApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    BrandsGet(pageSize: number, xTtsAccessToken: string, contentType: string, categoryId?: string, isAuthorized?: boolean, brandName?: string, pageToken?: string, categoryVersion?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetBrandsResponse;
    }>;
    BrandsPost(xTtsAccessToken: string, contentType: string, CreateCustomBrandsRequestBody?: Product202309CreateCustomBrandsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309CreateCustomBrandsResponse;
    }>;
    CategoriesCategoryIdAttributesGet(categoryId: string, xTtsAccessToken: string, contentType: string, locale?: string, categoryVersion?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetAttributesResponse;
    }>;
    CategoriesCategoryIdGlobalAttributesGet(categoryId: string, xTtsAccessToken: string, contentType: string, locale?: string, categoryVersion?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetGlobalAttributesResponse;
    }>;
    CategoriesCategoryIdGlobalRulesGet(categoryId: string, xTtsAccessToken: string, contentType: string, categoryVersion?: string, locale?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetGlobalCategoryRulesResponse;
    }>;
    CategoriesCategoryIdRulesGet(categoryId: string, xTtsAccessToken: string, contentType: string, categoryVersion?: string, locale?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetCategoryRulesResponse;
    }>;
    CategoriesGet(xTtsAccessToken: string, contentType: string, locale?: string, keyword?: string, categoryVersion?: string, listingPlatform?: string, includeProhibitedCategories?: boolean, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetCategoriesResponse;
    }>;
    CategoriesRecommendPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, RecommendCategoryRequestBody?: Product202309RecommendCategoryRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309RecommendCategoryResponse;
    }>;
    FilesUploadPost(xTtsAccessToken: string, contentType: string, data?: RequestFile, name?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309UploadProductFileResponse;
    }>;
    GlobalCategoriesGet(xTtsAccessToken: string, contentType: string, locale?: string, keyword?: string, categoryVersion?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetGlobalCategoriesResponse;
    }>;
    GlobalCategoriesRecommendPost(xTtsAccessToken: string, contentType: string, RecommendGlobalCategoriesRequestBody?: Product202309RecommendGlobalCategoriesRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309RecommendGlobalCategoriesResponse;
    }>;
    GlobalProductsDelete(xTtsAccessToken: string, contentType: string, DeleteGlobalProductsRequestBody?: Product202309DeleteGlobalProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309DeleteGlobalProductsResponse;
    }>;
    GlobalProductsGlobalProductIdGet(globalProductId: string, xTtsAccessToken: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetGlobalProductResponse;
    }>;
    GlobalProductsGlobalProductIdInventoryUpdatePost(globalProductId: string, xTtsAccessToken: string, contentType: string, UpdateGlobalInventoryRequestBody?: Product202309UpdateGlobalInventoryRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309UpdateGlobalInventoryResponse;
    }>;
    GlobalProductsGlobalProductIdPublishPost(globalProductId: string, xTtsAccessToken: string, contentType: string, PublishGlobalProductRequestBody?: Product202309PublishGlobalProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309PublishGlobalProductResponse;
    }>;
    GlobalProductsGlobalProductIdPut(globalProductId: string, xTtsAccessToken: string, contentType: string, EditGlobalProductRequestBody?: Product202309EditGlobalProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309EditGlobalProductResponse;
    }>;
    GlobalProductsPost(xTtsAccessToken: string, contentType: string, CreateGlobalProductRequestBody?: Product202309CreateGlobalProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309CreateGlobalProductResponse;
    }>;
    GlobalProductsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, SearchGlobalProductsRequestBody?: Product202309SearchGlobalProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309SearchGlobalProductsResponse;
    }>;
    ImagesUploadPost(xTtsAccessToken: string, contentType: string, data?: RequestFile, useCase?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309UploadProductImageResponse;
    }>;
    InventorySearchPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, InventorySearchRequestBody?: Product202309InventorySearchRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309InventorySearchResponse;
    }>;
    PrerequisitesGet(xTtsAccessToken: string, contentType: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309CheckListingPrerequisitesResponse;
    }>;
    ProductsActivatePost(xTtsAccessToken: string, contentType: string, shopCipher?: string, ActivateProductRequestBody?: Product202309ActivateProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309ActivateProductResponse;
    }>;
    ProductsDeactivatePost(xTtsAccessToken: string, contentType: string, shopCipher?: string, DeactivateProductsRequestBody?: Product202309DeactivateProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309DeactivateProductsResponse;
    }>;
    ProductsDelete(xTtsAccessToken: string, contentType: string, shopCipher?: string, DeleteProductsRequestBody?: Product202309DeleteProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309DeleteProductsResponse;
    }>;
    ProductsListingCheckPost(xTtsAccessToken: string, contentType: string, isDiagnosisRequired?: boolean, shopCipher?: string, CheckProductListingRequestBody?: Product202309CheckProductListingRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309CheckProductListingResponse;
    }>;
    ProductsPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, CreateProductRequestBody?: Product202309CreateProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309CreateProductResponse;
    }>;
    ProductsProductIdGet(productId: string, xTtsAccessToken: string, contentType: string, returnUnderReviewVersion?: boolean, returnDraftVersion?: boolean, locale?: string, shopCipher?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309GetProductResponse;
    }>;
    ProductsProductIdInventoryUpdatePost(productId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdateInventoryRequestBody?: Product202309UpdateInventoryRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309UpdateInventoryResponse;
    }>;
    ProductsProductIdPartialEditPost(productId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, PartialEditProductRequestBody?: Product202309PartialEditProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309PartialEditProductResponse;
    }>;
    ProductsProductIdPricesUpdatePost(productId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, UpdatePriceRequestBody?: Product202309UpdatePriceRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309UpdatePriceResponse;
    }>;
    ProductsProductIdPut(productId: string, xTtsAccessToken: string, contentType: string, shopCipher?: string, EditProductRequestBody?: Product202309EditProductRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309EditProductResponse;
    }>;
    ProductsRecoverPost(xTtsAccessToken: string, contentType: string, shopCipher?: string, RecoverProductsRequestBody?: Product202309RecoverProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309RecoverProductsResponse;
    }>;
    ProductsSearchPost(pageSize: number, xTtsAccessToken: string, contentType: string, pageToken?: string, categoryVersion?: string, shopCipher?: string, SearchProductsRequestBody?: Product202309SearchProductsRequestBody, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Product202309SearchProductsResponse;
    }>;
}
export declare const ProductV202309ApiOperationNames: {
    readonly BrandsGet: "BrandsGet";
    readonly BrandsPost: "BrandsPost";
    readonly CategoriesCategoryIdAttributesGet: "CategoriesCategoryIdAttributesGet";
    readonly CategoriesCategoryIdGlobalAttributesGet: "CategoriesCategoryIdGlobalAttributesGet";
    readonly CategoriesCategoryIdGlobalRulesGet: "CategoriesCategoryIdGlobalRulesGet";
    readonly CategoriesCategoryIdRulesGet: "CategoriesCategoryIdRulesGet";
    readonly CategoriesGet: "CategoriesGet";
    readonly CategoriesRecommendPost: "CategoriesRecommendPost";
    readonly FilesUploadPost: "FilesUploadPost";
    readonly GlobalCategoriesGet: "GlobalCategoriesGet";
    readonly GlobalCategoriesRecommendPost: "GlobalCategoriesRecommendPost";
    readonly GlobalProductsDelete: "GlobalProductsDelete";
    readonly GlobalProductsGlobalProductIdGet: "GlobalProductsGlobalProductIdGet";
    readonly GlobalProductsGlobalProductIdInventoryUpdatePost: "GlobalProductsGlobalProductIdInventoryUpdatePost";
    readonly GlobalProductsGlobalProductIdPublishPost: "GlobalProductsGlobalProductIdPublishPost";
    readonly GlobalProductsGlobalProductIdPut: "GlobalProductsGlobalProductIdPut";
    readonly GlobalProductsPost: "GlobalProductsPost";
    readonly GlobalProductsSearchPost: "GlobalProductsSearchPost";
    readonly ImagesUploadPost: "ImagesUploadPost";
    readonly InventorySearchPost: "InventorySearchPost";
    readonly PrerequisitesGet: "PrerequisitesGet";
    readonly ProductsActivatePost: "ProductsActivatePost";
    readonly ProductsDeactivatePost: "ProductsDeactivatePost";
    readonly ProductsDelete: "ProductsDelete";
    readonly ProductsListingCheckPost: "ProductsListingCheckPost";
    readonly ProductsPost: "ProductsPost";
    readonly ProductsProductIdGet: "ProductsProductIdGet";
    readonly ProductsProductIdInventoryUpdatePost: "ProductsProductIdInventoryUpdatePost";
    readonly ProductsProductIdPartialEditPost: "ProductsProductIdPartialEditPost";
    readonly ProductsProductIdPricesUpdatePost: "ProductsProductIdPricesUpdatePost";
    readonly ProductsProductIdPut: "ProductsProductIdPut";
    readonly ProductsRecoverPost: "ProductsRecoverPost";
    readonly ProductsSearchPost: "ProductsSearchPost";
};
export type ProductV202309ApiOperationTypes = {
    BrandsGet: ProductV202309Api['BrandsGet'];
    BrandsPost: ProductV202309Api['BrandsPost'];
    CategoriesCategoryIdAttributesGet: ProductV202309Api['CategoriesCategoryIdAttributesGet'];
    CategoriesCategoryIdGlobalAttributesGet: ProductV202309Api['CategoriesCategoryIdGlobalAttributesGet'];
    CategoriesCategoryIdGlobalRulesGet: ProductV202309Api['CategoriesCategoryIdGlobalRulesGet'];
    CategoriesCategoryIdRulesGet: ProductV202309Api['CategoriesCategoryIdRulesGet'];
    CategoriesGet: ProductV202309Api['CategoriesGet'];
    CategoriesRecommendPost: ProductV202309Api['CategoriesRecommendPost'];
    FilesUploadPost: ProductV202309Api['FilesUploadPost'];
    GlobalCategoriesGet: ProductV202309Api['GlobalCategoriesGet'];
    GlobalCategoriesRecommendPost: ProductV202309Api['GlobalCategoriesRecommendPost'];
    GlobalProductsDelete: ProductV202309Api['GlobalProductsDelete'];
    GlobalProductsGlobalProductIdGet: ProductV202309Api['GlobalProductsGlobalProductIdGet'];
    GlobalProductsGlobalProductIdInventoryUpdatePost: ProductV202309Api['GlobalProductsGlobalProductIdInventoryUpdatePost'];
    GlobalProductsGlobalProductIdPublishPost: ProductV202309Api['GlobalProductsGlobalProductIdPublishPost'];
    GlobalProductsGlobalProductIdPut: ProductV202309Api['GlobalProductsGlobalProductIdPut'];
    GlobalProductsPost: ProductV202309Api['GlobalProductsPost'];
    GlobalProductsSearchPost: ProductV202309Api['GlobalProductsSearchPost'];
    ImagesUploadPost: ProductV202309Api['ImagesUploadPost'];
    InventorySearchPost: ProductV202309Api['InventorySearchPost'];
    PrerequisitesGet: ProductV202309Api['PrerequisitesGet'];
    ProductsActivatePost: ProductV202309Api['ProductsActivatePost'];
    ProductsDeactivatePost: ProductV202309Api['ProductsDeactivatePost'];
    ProductsDelete: ProductV202309Api['ProductsDelete'];
    ProductsListingCheckPost: ProductV202309Api['ProductsListingCheckPost'];
    ProductsPost: ProductV202309Api['ProductsPost'];
    ProductsProductIdGet: ProductV202309Api['ProductsProductIdGet'];
    ProductsProductIdInventoryUpdatePost: ProductV202309Api['ProductsProductIdInventoryUpdatePost'];
    ProductsProductIdPartialEditPost: ProductV202309Api['ProductsProductIdPartialEditPost'];
    ProductsProductIdPricesUpdatePost: ProductV202309Api['ProductsProductIdPricesUpdatePost'];
    ProductsProductIdPut: ProductV202309Api['ProductsProductIdPut'];
    ProductsRecoverPost: ProductV202309Api['ProductsRecoverPost'];
    ProductsSearchPost: ProductV202309Api['ProductsSearchPost'];
};
//# sourceMappingURL=productV202309Api.d.ts.map