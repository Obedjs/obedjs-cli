import { execSync } from 'child_process';
import { downloadTemplate } from '../utils/downloadTemplate';
import { installDependencies } from '../utils/installDependencies';

export const createProject = async (projectName: string) => {
  console.log(`Creating project ${projectName}...`);

  // Download the template from GitHub
  await downloadTemplate(projectName);

  // Install dependencies
  installDependencies(projectName);

  console.log(`Project ${projectName} created successfully!`);
  console.log(`Navigate to the project directory and start the development server.`);
  console.log(`cd ${projectName} && npm start`);
};
