"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody = void 0;
class AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody = AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody;
AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody.discriminator = undefined;
AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBody.attributeTypeMap = [
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "sampleRule",
        "baseName": "sample_rule",
        "type": "AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRule"
    }
];
//# sourceMappingURL=EditOpenCollaborationSampleRuleRequestBody.js.map