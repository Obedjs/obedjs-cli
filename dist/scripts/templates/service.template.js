"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceTemplate = void 0;
const serviceTemplate = (name) => `
export class ${name}Service {
  public async find(): Promise<void> {
    // Your logic here
  }

  public async create(): Promise<void> {
    // Your logic here
  }

  public async update(): Promise<void> {
    // Your logic here
  }

  public async delete(): Promise<void> {
    // Your logic here
  }
}
`;
exports.serviceTemplate = serviceTemplate;
