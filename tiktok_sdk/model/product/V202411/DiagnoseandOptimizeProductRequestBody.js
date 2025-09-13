"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202411DiagnoseandOptimizeProductRequestBody = void 0;
class Product202411DiagnoseandOptimizeProductRequestBody {
    static getAttributeTypeMap() {
        return Product202411DiagnoseandOptimizeProductRequestBody.attributeTypeMap;
    }
}
exports.Product202411DiagnoseandOptimizeProductRequestBody = Product202411DiagnoseandOptimizeProductRequestBody;
Product202411DiagnoseandOptimizeProductRequestBody.discriminator = undefined;
Product202411DiagnoseandOptimizeProductRequestBody.attributeTypeMap = [
    {
        "name": "brandId",
        "baseName": "brand_id",
        "type": "string"
    },
    {
        "name": "categoryId",
        "baseName": "category_id",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "mainImages",
        "baseName": "main_images",
        "type": "Array<Product202411DiagnoseandOptimizeProductRequestBodyMainImages>"
    },
    {
        "name": "optimizationFields",
        "baseName": "optimization_fields",
        "type": "Array<string>"
    },
    {
        "name": "productAttributes",
        "baseName": "product_attributes",
        "type": "Array<Product202411DiagnoseandOptimizeProductRequestBodyProductAttributes>"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "sizeChart",
        "baseName": "size_chart",
        "type": "Product202411DiagnoseandOptimizeProductRequestBodySizeChart"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=DiagnoseandOptimizeProductRequestBody.js.map