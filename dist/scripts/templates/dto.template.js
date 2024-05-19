"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtoTemplate = void 0;
const dtoTemplate = (name) => `
import {  IsNotEmpty } from 'class-validator';

export class ${name}Dto {    
  @IsNotEmpty()
 declare username: string;
   // Your middleware logic here
}
`;
exports.dtoTemplate = dtoTemplate;
