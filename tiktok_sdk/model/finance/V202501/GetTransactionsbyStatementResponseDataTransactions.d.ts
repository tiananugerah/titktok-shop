import { Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown } from './GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown';
import { Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown } from './GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown';
import { Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown } from './GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown';
import { Finance202501GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent } from './GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent';
export declare class Finance202501GetTransactionsbyStatementResponseDataTransactions {
    'adjustmentAmount'?: string;
    'adjustmentId'?: string;
    'adjustmentOrderId'?: string;
    'associatedOrderId'?: string;
    'estimatedReleaseTime'?: string;
    'feeTaxAmount'?: string;
    'feeTaxBreakdown'?: Finance202501GetTransactionsbyStatementResponseDataTransactionsFeeTaxBreakdown;
    'id'?: string;
    'orderCreateTime'?: number;
    'orderId'?: string;
    'reserveAmount'?: string;
    'reserveId'?: string;
    'reserveStatus'?: string;
    'revenueAmount'?: string;
    'revenueBreakdown'?: Finance202501GetTransactionsbyStatementResponseDataTransactionsRevenueBreakdown;
    'settlementAmount'?: string;
    'shippingCostAmount'?: string;
    'shippingCostBreakdown'?: Finance202501GetTransactionsbyStatementResponseDataTransactionsShippingCostBreakdown;
    'supplementaryComponent'?: Finance202501GetTransactionsbyStatementResponseDataTransactionsSupplementaryComponent;
    'type'?: string;
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
//# sourceMappingURL=GetTransactionsbyStatementResponseDataTransactions.d.ts.map