import { Product202411DiagnoseandOptimizeProductRequestBodyMainImages } from './DiagnoseandOptimizeProductRequestBodyMainImages';
import { Product202411DiagnoseandOptimizeProductRequestBodyProductAttributes } from './DiagnoseandOptimizeProductRequestBodyProductAttributes';
import { Product202411DiagnoseandOptimizeProductRequestBodySizeChart } from './DiagnoseandOptimizeProductRequestBodySizeChart';
export declare class Product202411DiagnoseandOptimizeProductRequestBody {
    'brandId'?: string;
    'categoryId'?: string;
    'description'?: string;
    'mainImages'?: Array<Product202411DiagnoseandOptimizeProductRequestBodyMainImages>;
    'optimizationFields'?: Array<string>;
    'productAttributes'?: Array<Product202411DiagnoseandOptimizeProductRequestBodyProductAttributes>;
    'productId'?: string;
    'sizeChart'?: Product202411DiagnoseandOptimizeProductRequestBodySizeChart;
    'title'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
//# sourceMappingURL=DiagnoseandOptimizeProductRequestBody.d.ts.map