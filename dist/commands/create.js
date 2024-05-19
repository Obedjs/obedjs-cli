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
exports.createCommand = void 0;
const path = __importStar(require("path"));
const downloadRepo_1 = require("../utils/downloadRepo");
const colors_1 = require("../utils/colors");
const installDependencies_1 = require("../utils/installDependencies");
const createCommand = (projectName) => __awaiter(void 0, void 0, void 0, function* () {
    const repoUrl = 'https://github.com/Obedjs/obedjs.git';
    const targetPath = path.join(process.cwd(), projectName);
    console.log(`${colors_1.colors.green}Creating ${projectName}...${colors_1.colors.reset}`);
    try {
        yield (0, downloadRepo_1.downloadRepo)(repoUrl, targetPath);
        console.log(`${colors_1.colors.green}${projectName} created successfully.${colors_1.colors.reset}`);
        console.log(`${colors_1.colors.green}Installing dependencies...${colors_1.colors.reset}`);
        yield (0, installDependencies_1.installDependencies)(projectName);
        // execSync('npm install', { cwd: targetPath, stdio: 'inherit' });
        // console.log(`${colors.green}Dependencies installed.${colors.reset}`);
    }
    catch (error) {
        console.error(`${colors_1.colors.red}Failed to create project: ${error.message}${colors_1.colors.reset}`);
    }
});
exports.createCommand = createCommand;
