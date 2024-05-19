"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configTemplate = void 0;
const configTemplate = (name) => `
export const ${name}Config = {
  // Your configuration here
};
`;
exports.configTemplate = configTemplate;
