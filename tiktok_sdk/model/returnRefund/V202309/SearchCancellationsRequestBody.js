"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchCancellationsRequestBody = void 0;
class ReturnRefund202309SearchCancellationsRequestBody {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchCancellationsRequestBody.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchCancellationsRequestBody = ReturnRefund202309SearchCancellationsRequestBody;
ReturnRefund202309SearchCancellationsRequestBody.discriminator = undefined;
ReturnRefund202309SearchCancellationsRequestBody.attributeTypeMap = [
    {
        "name": "buyerUserIds",
        "baseName": "buyer_user_ids",
        "type": "Array<string>"
    },
    {
        "name": "cancelIds",
        "baseName": "cancel_ids",
        "type": "Array<string>"
    },
    {
        "name": "cancelStatus",
        "baseName": "cancel_status",
        "type": "Array<string>"
    },
    {
        "name": "cancelTypes",
        "baseName": "cancel_types",
        "type": "Array<string>"
    },
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
        "name": "locale",
        "baseName": "locale",
        "type": "string"
    },
    {
        "name": "orderIds",
        "baseName": "order_ids",
        "type": "Array<string>"
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
//# sourceMappingURL=SearchCancellationsRequestBody.js.map