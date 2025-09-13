"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages = void 0;
class DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages {
    static getAttributeTypeMap() {
        return DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages.attributeTypeMap;
    }
}
exports.DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages = DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages;
DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages.discriminator = undefined;
DataReconciliation202309OrderStatusDataExchangeRequestBodyOrdersPackages.attributeTypeMap = [
    {
        "name": "logisticsProviderName",
        "baseName": "logistics_provider_name",
        "type": "string"
    },
    {
        "name": "packageId",
        "baseName": "package_id",
        "type": "string"
    },
    {
        "name": "trackingNumber",
        "baseName": "tracking_number",
        "type": "string"
    }
];
//# sourceMappingURL=OrderStatusDataExchangeRequestBodyOrdersPackages.js.map