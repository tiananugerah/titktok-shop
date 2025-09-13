"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetWithdrawalsResponseDataWithdrawals = void 0;
class Finance202309GetWithdrawalsResponseDataWithdrawals {
    static getAttributeTypeMap() {
        return Finance202309GetWithdrawalsResponseDataWithdrawals.attributeTypeMap;
    }
}
exports.Finance202309GetWithdrawalsResponseDataWithdrawals = Finance202309GetWithdrawalsResponseDataWithdrawals;
Finance202309GetWithdrawalsResponseDataWithdrawals.discriminator = undefined;
Finance202309GetWithdrawalsResponseDataWithdrawals.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=GetWithdrawalsResponseDataWithdrawals.js.map