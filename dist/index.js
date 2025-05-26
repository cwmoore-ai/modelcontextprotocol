"use strict";
// modelcontextprotocol/index.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSDKVersion = getSDKVersion;
// This is an example. You need to define what your SDK actually exports.
// For instance, if you want to export types or functionalities from schema files:
__exportStar(require("./schema/draft/schema"), exports); // Adjust path as necessary
// Or define some specific SDK functionality:
function getSDKVersion() {
    // Consider fetching this from package.json if appropriate
    return "0.1.0"; // This version should match the one in modelcontextprotocol/package.json
}
// Add any other exports that your '@modelcontextprotocol/sdk' should provide.
// This file will be the main entry point for your SDK.
//# sourceMappingURL=index.js.map