import { execSync } from 'child_process';
import * as path from 'path';

export const installDependencies = (projectName: string) => {
  const projectPath = path.join(process.cwd(), projectName);
  console.log('Installing dependencies...');
  execSync('npm install', { cwd: projectPath, stdio: 'inherit' });
  console.log('Dependencies installed.');
  console.log(`cd ${projectName}`);
  console.log(`npm run start:dev`);
};
