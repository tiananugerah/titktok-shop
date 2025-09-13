"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SearchPackageRequestBody = void 0;
class Fulfillment202309SearchPackageRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309SearchPackageRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309SearchPackageRequestBody = Fulfillment202309SearchPackageRequestBody;
Fulfillment202309SearchPackageRequestBody.discriminator = undefined;
Fulfillment202309SearchPackageRequestBody.attributeTypeMap = [
    {
        "name": "createTimeGe",
        "baseName": "create_time_ge",
        "type": "number"
    },
    {
        "name": "createTimeLt",
        "baseName": "create_time_lt",
        "type": "number"
    },
    {
        "name": "packageStatus",
        "baseName": "package_status",
        "type": "string"
    },
    {
        "name": "updateTimeGe",
        "baseName": "update_time_ge",
        "type": "number"
    },
    {
        "name": "updateTimeLt",
        "baseName": "update_time_lt",
        "type": "number"
    }
];
//# sourceMappingURL=SearchPackageRequestBody.js.map