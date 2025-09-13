import { Finance202309GetPaymentsResponseDataPaymentsAmount } from './GetPaymentsResponseDataPaymentsAmount';
import { Finance202309GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange } from './GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange';
import { Finance202309GetPaymentsResponseDataPaymentsReserveAmount } from './GetPaymentsResponseDataPaymentsReserveAmount';
import { Finance202309GetPaymentsResponseDataPaymentsSettlementAmount } from './GetPaymentsResponseDataPaymentsSettlementAmount';
export declare class Finance202309GetPaymentsResponseDataPayments {
    'amount'?: Finance202309GetPaymentsResponseDataPaymentsAmount;
    'bankAccount'?: string;
    'createTime'?: number;
    'exchangeRate'?: string;
    'id'?: string;
    'paidTime'?: number;
    'paymentAmountBeforeExchange'?: Finance202309GetPaymentsResponseDataPaymentsPaymentAmountBeforeExchange;
    'reserveAmount'?: Finance202309GetPaymentsResponseDataPaymentsReserveAmount;
    'settlementAmount'?: Finance202309GetPaymentsResponseDataPaymentsSettlementAmount;
    'status'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
//# sourceMappingURL=GetPaymentsResponseDataPayments.d.ts.map