"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyChain202309ConfirmPackageShipmentRequestBodyPackages = void 0;
class SupplyChain202309ConfirmPackageShipmentRequestBodyPackages {
    static getAttributeTypeMap() {
        return SupplyChain202309ConfirmPackageShipmentRequestBodyPackages.attributeTypeMap;
    }
}
exports.SupplyChain202309ConfirmPackageShipmentRequestBodyPackages = SupplyChain202309ConfirmPackageShipmentRequestBodyPackages;
SupplyChain202309ConfirmPackageShipmentRequestBodyPackages.discriminator = undefined;
SupplyChain202309ConfirmPackageShipmentRequestBodyPackages.attributeTypeMap = [
    {
        "name": "createTimeMillis",
        "baseName": "create_time_millis",
        "type": "number"
    },
    {
        "name": "dimension",
        "baseName": "dimension",
        "type": "SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesDimension"
    },
    {
        "name": "handoverTimeMillis",
        "baseName": "handover_time_millis",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "providerWarehouseCode",
        "baseName": "provider_warehouse_code",
        "type": "string"
    },
    {
        "name": "providerWarehouseName",
        "baseName": "provider_warehouse_name",
        "type": "string"
    },
    {
        "name": "shipTimeMillis",
        "baseName": "ship_time_millis",
        "type": "number"
    },
    {
        "name": "shippingOriginCity",
        "baseName": "shipping_origin_city",
        "type": "string"
    },
    {
        "name": "shippingProviderId",
        "baseName": "shipping_provider_id",
        "type": "string"
    },
    {
        "name": "shippingProviderName",
        "baseName": "shipping_provider_name",
        "type": "string"
    },
    {
        "name": "skus",
        "baseName": "skus",
        "type": "Array<SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesSkus>"
    },
    {
        "name": "tcwWarehouseType",
        "baseName": "tcw_warehouse_type",
        "type": "string"
    },
    {
        "name": "timeZone",
        "baseName": "time_zone",
        "type": "string"
    },
    {
        "name": "trackingNumber",
        "baseName": "tracking_number",
        "type": "string"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "SupplyChain202309ConfirmPackageShipmentRequestBodyPackagesWeight"
    },
    {
        "name": "wmsOrderId",
        "baseName": "wms_order_id",
        "type": "string"
    }
];
//# sourceMappingURL=ConfirmPackageShipmentRequestBodyPackages.js.map