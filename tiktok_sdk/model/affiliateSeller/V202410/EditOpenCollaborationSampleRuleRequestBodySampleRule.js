"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRule = void 0;
class AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRule {
    static getAttributeTypeMap() {
        return AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRule.attributeTypeMap;
    }
}
exports.AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRule = AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRule;
AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRule.discriminator = undefined;
AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRule.attributeTypeMap = [
    {
        "name": "activateStatus",
        "baseName": "activate_status",
        "type": "string"
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
        "name": "thresholds",
        "baseName": "thresholds",
        "type": "AffiliateSeller202410EditOpenCollaborationSampleRuleRequestBodySampleRuleThresholds"
    }
];
//# sourceMappingURL=EditOpenCollaborationSampleRuleRequestBodySampleRule.js.map