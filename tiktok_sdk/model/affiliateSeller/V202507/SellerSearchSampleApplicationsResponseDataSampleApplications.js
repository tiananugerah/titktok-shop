"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications = void 0;
class AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications {
    static getAttributeTypeMap() {
        return AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications.attributeTypeMap;
    }
}
exports.AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications = AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications;
AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications.discriminator = undefined;
AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplications.attributeTypeMap = [
    {
        "name": "approveExpirationTime",
        "baseName": "approve_expiration_time",
        "type": "number"
    },
    {
        "name": "availableQuantity",
        "baseName": "available_quantity",
        "type": "number"
    },
    {
        "name": "commissionRate",
        "baseName": "commission_rate",
        "type": "string"
    },
    {
        "name": "creator",
        "baseName": "creator",
        "type": "AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator"
    },
    {
        "name": "disapprovableReasons",
        "baseName": "disapprovable_reasons",
        "type": "Array<string>"
    },
    {
        "name": "fulfillmentStatus",
        "baseName": "fulfillment_status",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isApprovable",
        "baseName": "is_approvable",
        "type": "boolean"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "partnerName",
        "baseName": "partner_name",
        "type": "string"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "AffiliateSeller202507SellerSearchSampleApplicationsResponseDataSampleApplicationsProduct"
    },
    {
        "name": "shipmentExpirationTime",
        "baseName": "shipment_expiration_time",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "trackingNumber",
        "baseName": "tracking_number",
        "type": "string"
    }
];
//# sourceMappingURL=SellerSearchSampleApplicationsResponseDataSampleApplications.js.map