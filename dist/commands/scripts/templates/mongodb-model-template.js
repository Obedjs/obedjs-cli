"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodbModelTemplate = void 0;
const mongodbModelTemplate = (name) => `
import { Schema, model } from 'mongoose';

const ${name}Schema = new Schema({
  // Define your schema here
});

export const ${name} = model('${name}', ${name}Schema);
`;
exports.mongodbModelTemplate = mongodbModelTemplate;
