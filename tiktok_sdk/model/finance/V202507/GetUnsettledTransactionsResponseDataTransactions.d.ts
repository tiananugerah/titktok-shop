import { Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown } from './GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown';
import { Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown } from './GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown';
import { Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown } from './GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown';
export declare class Finance202507GetUnsettledTransactionsResponseDataTransactions {
    'adjustmentId'?: string;
    'adjustmentOrderId'?: string;
    'currency'?: string;
    'estAdjustmentAmount'?: string;
    'estFeeTaxAmount'?: string;
    'estRevenueAmount'?: string;
    'estSettlementAmount'?: string;
    'estShippingCostAmount'?: string;
    'estimatedSettlement'?: string;
    'feeTaxBreakdown'?: Finance202507GetUnsettledTransactionsResponseDataTransactionsFeeTaxBreakdown;
    'id'?: string;
    'orderCreateTime'?: number;
    'orderDeliveryTime'?: number;
    'orderId'?: string;
    'revenueBreakdown'?: Finance202507GetUnsettledTransactionsResponseDataTransactionsRevenueBreakdown;
    'shippingCostBreakdown'?: Finance202507GetUnsettledTransactionsResponseDataTransactionsShippingCostBreakdown;
    'status'?: string;
    'type'?: string;
    'unsettledReason'?: string;
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
//# sourceMappingURL=GetUnsettledTransactionsResponseDataTransactions.d.ts.map