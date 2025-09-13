"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRefund202309GetReturnRecordsResponseDataRecords = void 0;
class ReturnRefund202309GetReturnRecordsResponseDataRecords {
    static getAttributeTypeMap() {
        return ReturnRefund202309GetReturnRecordsResponseDataRecords.attributeTypeMap;
    }
}
exports.ReturnRefund202309GetReturnRecordsResponseDataRecords = ReturnRefund202309GetReturnRecordsResponseDataRecords;
ReturnRefund202309GetReturnRecordsResponseDataRecords.discriminator = undefined;
ReturnRefund202309GetReturnRecordsResponseDataRecords.attributeTypeMap = [
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<ReturnRefund202309GetReturnRecordsResponseDataRecordsImages>"
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "string"
    },
    {
        "name": "reasonText",
        "baseName": "reason_text",
        "type": "string"
    },
    {
        "name": "role",
        "baseName": "role",
        "type": "string"
    },
    {
        "name": "videos",
        "baseName": "videos",
        "type": "Array<ReturnRefund202309GetReturnRecordsResponseDataRecordsVideos>"
    }
];
//# sourceMappingURL=GetReturnRecordsResponseDataRecords.js.map