"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = void 0;
const middlewareTemplate = (name) => `
import { Request, Response, NextFunction } from 'express';

export const ${name}Middleware = (req: Request, res: Response, next: NextFunction) => {
  // Your middleware logic here
  next();
}
`;
exports.middlewareTemplate = middlewareTemplate;
