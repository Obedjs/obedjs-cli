#!/usr/bin/env ts-node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const path = __importStar(require("path"));
const fileHelpers_1 = require("./utils/fileHelpers");
const templates_1 = require("./utils/templates");
const colors_1 = require("./utils/colors");
const fs = __importStar(require("fs"));
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error(`${colors_1.colors.red}Usage: generate <type> <name>${colors_1.colors.reset}`);
    process.exit(1);
}
const [type, name] = args;
const lowerCaseName = name.toLowerCase();
const dirMap = {
    controller: `controllers/${lowerCaseName}`,
    service: `services/${lowerCaseName}`,
    route: `routes/${lowerCaseName}`,
    model: `models`,
    middleware: `middleware`,
    config: `config`,
    test: `controllers/${lowerCaseName}/__tests__`,
    e2e: `tests/e2e`,
    dto: `dtos/${lowerCaseName}`,
};
const fileExists = (filePath) => {
    return fs.existsSync(filePath);
};
const generateFile = (type, name) => __awaiter(void 0, void 0, void 0, function* () {
    let template = templates_1.templates[type];
    if (!template) {
        console.error(`${colors_1.colors.red}Unknown type: ${type}${colors_1.colors.reset}`);
        process.exit(1);
    }
    const dirPath = path.join('src', dirMap[type]);
    const filePath = path.join(dirPath, `${lowerCaseName}.${type}.ts`);
    if (fileExists(filePath)) {
        console.error(`${colors_1.colors.red}File ${filePath} already exists.${colors_1.colors.reset}`);
        process.exit(1);
    }
    (0, fileHelpers_1.createDirectory)(dirPath);
    const content = template(name, type === 'test' || type === 'e2e' ? type : '');
    (0, fileHelpers_1.writeFile)(filePath, content);
    console.log(`${colors_1.colors.green}Generated ${type} at ${filePath}${colors_1.colors.reset}`);
});
const generateTestFile = (type, name) => {
    const template = templates_1.templates.test;
    const dirPath = path.join('src', type === 'controller' ? `controllers/${lowerCaseName}/__tests__` : `services/${lowerCaseName}/__tests__`);
    (0, fileHelpers_1.createDirectory)(dirPath);
    const filePath = path.join(dirPath, `${lowerCaseName}.${type}.test.ts`);
    const content = template(name, type);
    if (type === 'controller' || type === 'service' || type === 'e2e') {
        (0, fileHelpers_1.writeFile)(filePath, content);
    }
};
const generateE2ETestFile = (name) => {
    const template = templates_1.templates.e2e;
    const dirPath = path.join('src', 'tests', 'e2e');
    (0, fileHelpers_1.createDirectory)(dirPath);
    const filePath = path.join(dirPath, `${lowerCaseName}.e2e.test.ts`);
    const content = template(name);
    (0, fileHelpers_1.writeFile)(filePath, content);
};
// Check if the type is "all" and generate all resources accordingly
if (type === "all") {
    generateFile("controller", name);
    generateFile("service", name);
    generateFile("route", name);
    // Generate test files for all resource types
    generateTestFile("controller", name);
    generateTestFile("service", name);
    generateTestFile("route", name);
    // Generate e2e test file for the "route" type
    generateE2ETestFile(name);
}
else {
    generateFile(type, name);
}
//generateFile(type, name);
// Generate test files only if the type is not "e2e", "model", "middleware", or "config"
if (type !== 'e2e' && type !== 'model' && type !== 'middleware' && type !== 'config') {
    generateTestFile(type, name);
}
if (type === 'route') {
    generateE2ETestFile(name);
}
