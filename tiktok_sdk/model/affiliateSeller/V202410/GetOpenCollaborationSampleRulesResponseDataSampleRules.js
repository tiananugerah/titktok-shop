"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202410GetOpenCollaborationSampleRulesResponseDataSampleRules = void 0;
class AffiliateSeller202410GetOpenCollaborationSampleRulesResponseDataSampleRules {
    static getAttributeTypeMap() {
        return AffiliateSeller202410GetOpenCollaborationSampleRulesResponseDataSampleRules.attributeTypeMap;
    }
}
exports.AffiliateSeller202410GetOpenCollaborationSampleRulesResponseDataSampleRules = AffiliateSeller202410GetOpenCollaborationSampleRulesResponseDataSampleRules;
AffiliateSeller202410GetOpenCollaborationSampleRulesResponseDataSampleRules.discriminator = undefined;
AffiliateSeller202410GetOpenCollaborationSampleRulesResponseDataSampleRules.attributeTypeMap = [
    {
        "name": "availableQuantity",
        "baseName": "available_quantity",
        "type": "number"
    },
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "number"
    },
    {
        "name": "isSampleTimeUnlimited",
        "baseName": "is_sample_time_unlimited",
        "type": "boolean"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "sampleQuota",
        "baseName": "sample_quota",
        "type": "number"
    },
    {
        "name": "startTime",
        "baseName": "start_time",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "thresholds",
        "baseName": "thresholds",
        "type": "AffiliateSeller202410GetOpenCollaborationSampleRulesResponseDataSampleRulesThresholds"
    }
];
//# sourceMappingURL=GetOpenCollaborationSampleRulesResponseDataSampleRules.js.map