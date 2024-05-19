import { execSync } from 'child_process';
import * as path from 'path';
import { downloadRepo } from '../utils/downloadRepo';
import { colors } from '../utils/colors';
import { installDependencies } from '../utils/installDependencies';

export const createCommand = async (projectName: string) => {
  const repoUrl = 'https://github.com/Obedjs/obedjs.git';
  const targetPath = path.join(process.cwd(), projectName);

  console.log(`${colors.green}Creating ${projectName}...${colors.reset}`);

  try {
    await downloadRepo(repoUrl, targetPath);

    console.log(`${colors.green}${projectName} created successfully.${colors.reset}`);
    console.log(`${colors.green}Installing dependencies...${colors.reset}`);

await installDependencies(projectName)
    // execSync('npm install', { cwd: targetPath, stdio: 'inherit' });

    // console.log(`${colors.green}Dependencies installed.${colors.reset}`);
  } catch (error: any) {
    console.error(`${colors.red}Failed to create project: ${error.message}${colors.reset}`);
  }
};
