"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeormEntityTemplate = void 0;
const typeormEntityTemplate = (name) => `
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ${name} {
  @PrimaryGeneratedColumn()
  id: number;

  // Define your columns here
}
`;
exports.typeormEntityTemplate = typeormEntityTemplate;
