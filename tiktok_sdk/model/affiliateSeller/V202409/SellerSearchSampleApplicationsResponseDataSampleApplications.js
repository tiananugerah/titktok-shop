"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplications = void 0;
class AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplications {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplications.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplications = AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplications;
AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplications.discriminator = undefined;
AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplications.attributeTypeMap = [
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
        "type": "AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator"
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
        "type": "AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsProduct"
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