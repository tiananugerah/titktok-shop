"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataReconciliation202309OrderStatusDataExchangeResponseDataErrors = void 0;
class DataReconciliation202309OrderStatusDataExchangeResponseDataErrors {
    static getAttributeTypeMap() {
        return DataReconciliation202309OrderStatusDataExchangeResponseDataErrors.attributeTypeMap;
    }
}
exports.DataReconciliation202309OrderStatusDataExchangeResponseDataErrors = DataReconciliation202309OrderStatusDataExchangeResponseDataErrors;
DataReconciliation202309OrderStatusDataExchangeResponseDataErrors.discriminator = undefined;
DataReconciliation202309OrderStatusDataExchangeResponseDataErrors.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "detail",
        "baseName": "detail",
        "type": "DataReconciliation202309OrderStatusDataExchangeResponseDataErrorsDetail"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=OrderStatusDataExchangeResponseDataErrors.js.map