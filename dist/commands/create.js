"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = void 0;
const downloadTemplate_1 = require("../utils/downloadTemplate");
const installDependencies_1 = require("../utils/installDependencies");
const createProject = (projectName) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Creating project ${projectName}...`);
    // Download the template from GitHub
    yield (0, downloadTemplate_1.downloadTemplate)(projectName);
    // Install dependencies
    (0, installDependencies_1.installDependencies)(projectName);
    console.log(`Project ${projectName} created successfully!`);
    console.log(`Navigate to the project directory and start the development server.`);
    console.log(`cd ${projectName} && npm start`);
});
exports.createProject = createProject;
