"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations = void 0;
class AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations {
    static getAttributeTypeMap() {
        return AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations.attributeTypeMap;
    }
}
exports.AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations = AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations;
AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations.discriminator = undefined;
AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborations.attributeTypeMap = [
    {
        "name": "contentCreatorCount",
        "baseName": "content_creator_count",
        "type": "number"
    },
    {
        "name": "currentCommission",
        "baseName": "current_commission",
        "type": "AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsCurrentCommission"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "AffiliateSeller202412SearchOpenCollaborationResponseDataOpenCollaborationsProduct"
    },
    {
        "name": "showcaseCreatorCount",
        "baseName": "showcase_creator_count",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=SearchOpenCollaborationResponseDataOpenCollaborations.js.map