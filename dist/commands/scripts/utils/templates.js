"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templates = void 0;
const controller_template_1 = require("../templates/controller.template");
const service_template_1 = require("../templates/service.template");
const route_template_1 = require("../templates/route.template");
const model_template_1 = require("../templates/model.template");
const middleware_template_1 = require("../templates/middleware.template");
const config_template_1 = require("../templates/config.template");
const test_template_1 = require("../templates/test.template");
const e2e_template_1 = require("../templates/e2e.template");
const mongodb_model_template_1 = require("../templates/mongodb-model-template");
const typeorm_entity_template_1 = require("../templates/typeorm-entity-template");
const dto_template_1 = require("../templates/dto.template");
exports.templates = {
    controller: controller_template_1.controllerTemplate,
    service: service_template_1.serviceTemplate,
    route: route_template_1.routeTemplate,
    model: model_template_1.modelTemplate,
    middleware: middleware_template_1.middlewareTemplate,
    config: config_template_1.configTemplate,
    test: test_template_1.testTemplate,
    e2e: e2e_template_1.e2eTemplate,
    modelMongo: mongodb_model_template_1.mongodbModelTemplate,
    modelRdbms: typeorm_entity_template_1.typeormEntityTemplate,
    dto: dto_template_1.dtoTemplate
};
