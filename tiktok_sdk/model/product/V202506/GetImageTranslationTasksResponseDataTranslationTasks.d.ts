import { Product202506GetImageTranslationTasksResponseDataTranslationTasksOriginalImage } from './GetImageTranslationTasksResponseDataTranslationTasksOriginalImage';
import { Product202506GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage } from './GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage';
export declare class Product202506GetImageTranslationTasksResponseDataTranslationTasks {
    'failReason'?: string;
    'id'?: string;
    'originalImage'?: Product202506GetImageTranslationTasksResponseDataTranslationTasksOriginalImage;
    'status'?: string;
    'targetLanguage'?: string;
    'translatedImage'?: Product202506GetImageTranslationTasksResponseDataTranslationTasksTranslatedImage;
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
//# sourceMappingURL=GetImageTranslationTasksResponseDataTranslationTasks.d.ts.map