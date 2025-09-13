"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SchedulePackageHandoverResponse = void 0;
class Fulfillment202309SchedulePackageHandoverResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309SchedulePackageHandoverResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309SchedulePackageHandoverResponse = Fulfillment202309SchedulePackageHandoverResponse;
Fulfillment202309SchedulePackageHandoverResponse.discriminator = undefined;
Fulfillment202309SchedulePackageHandoverResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309SchedulePackageHandoverResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=SchedulePackageHandoverResponse.js.map