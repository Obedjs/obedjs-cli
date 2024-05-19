import { execSync } from 'child_process';

export const downloadTemplate = async (projectName: string) => {
  console.log('creating Project...');
  execSync(`git clone https://github.com/gaiyadev/obedjs.git ${projectName}`);
  execSync(`rm -rf ${projectName}/.git`);
  console.log('Project created successfully.');
};
