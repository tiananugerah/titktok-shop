"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309SearchReturnsRequestBody = void 0;
class ReturnRefund202309SearchReturnsRequestBody {
    static getAttributeTypeMap() {
        return ReturnRefund202309SearchReturnsRequestBody.attributeTypeMap;
    }
}
exports.ReturnRefund202309SearchReturnsRequestBody = ReturnRefund202309SearchReturnsRequestBody;
ReturnRefund202309SearchReturnsRequestBody.discriminator = undefined;
ReturnRefund202309SearchReturnsRequestBody.attributeTypeMap = [
    {
        "name": "arbitrationStatus",
        "baseName": "arbitration_status",
        "type": "Array<string>"
    },
    {
        "name": "buyerUserIds",
        "baseName": "buyer_user_ids",
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
        "name": "returnIds",
        "baseName": "return_ids",
        "type": "Array<string>"
    },
    {
        "name": "returnStatus",
        "baseName": "return_status",
        "type": "Array<string>"
    },
    {
        "name": "returnTypes",
        "baseName": "return_types",
        "type": "Array<string>"
    },
    {
        "name": "sellerProposedReturnType",
        "baseName": "seller_proposed_return_type",
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
//# sourceMappingURL=SearchReturnsRequestBody.js.map