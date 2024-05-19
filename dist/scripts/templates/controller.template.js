"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerTemplate = void 0;
const controllerTemplate = (name) => `
import { Request, Response } from 'express';
import { ${name}Service } from '../../services/${name.toLocaleLowerCase()}/${name.toLocaleLowerCase()}.service'; 

export class ${name}Controller {
     private readonly service: ${name}Service;

  constructor(service: ${name}Service) {
    this.service = service; 
  }

  public async fetchAll(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async create(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async update(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async delete(req: Request, res: Response): Promise<void> {
    // Your logic here
  }
}
`;
exports.controllerTemplate = controllerTemplate;
