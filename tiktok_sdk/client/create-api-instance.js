"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiInstance = void 0;
const create_trans_request_options_1 = require("./create-trans-request-options");
const create_call_api_map_1 = require("./create-call-api-map");
const basePath = 'https://open-api.tiktokglobalshop.com';
const createApiInstance = (client) => {
    const path = client.config?.basePath || basePath;
    const interceptor = (0, create_trans_request_options_1.createTransRequestOptionsInterceptor)(client);
    const apiInstanceGroup = (0, create_call_api_map_1.createCallApiMap)(path, interceptor);
    return {
        api: apiInstanceGroup,
    };
};
exports.createApiInstance = createApiInstance;
//# sourceMappingURL=create-api-instance.js.map