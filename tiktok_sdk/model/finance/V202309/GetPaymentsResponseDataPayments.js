"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance202309GetPaymentsResponseDataPayments = void 0;
class Finance202309GetPaymentsResponseDataPayments {
    static getAttributeTypeMap() {
        return Finance202309GetPaymentsResponseDataPayments.attributeTypeMap;
    }
}
exports.Finance202309GetPaymentsResponseDataPayments = Finance202309GetPaymentsResponseDataPayments;
Finance202309GetPaymentsResponseDataPayments.discriminator = undefined;
Finance202309GetPaymentsResponseDataPayments.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "Finance202309GetPaymentsResponseDataPaymentsAmount"
    },
    {
        "name": "bankAccount",
        "baseName": "bank_account",
        "type": "string"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "exchangeRate",
        "baseName": "exchange_rate",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "paidTime",
        "baseName": "paid_time",
        "type": "number"
    },
    {
        "name": "paymentAmountBeforeExchange",
        "baseName": "payment_amount_before_exchange",
        "type": "Finance202309GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange"
    },
    {
        "name": "reserveAmount",
        "baseName": "reserve_amount",
        "type": "Finance202309GetPaymentsResponseDataPaymentsReserveAmount"
    },
    {
        "name": "settlementAmount",
        "baseName": "settlement_amount",
        "type": "Finance202309GetPaymentsResponseDataPaymentsSettlementAmount"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=GetPaymentsResponseDataPayments.js.map