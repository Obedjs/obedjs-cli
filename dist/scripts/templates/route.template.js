"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeTemplate = void 0;
const routeTemplate = (name) => `
import { Router } from 'express';
import { ${name}Controller } from '../../controllers/${name.toLowerCase()}/${name.toLowerCase()}.controller';
import { ${name}Service } from '../../services/${name.toLowerCase()}/${name.toLowerCase()}.service';

const router = Router();
const service = new ${name}Service(); 
const controller = new ${name}Controller(service); 

router.get('/', controller.fetchAll.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.delete('/:id', controller.delete.bind(controller));

export default router;
`;
exports.routeTemplate = routeTemplate;
