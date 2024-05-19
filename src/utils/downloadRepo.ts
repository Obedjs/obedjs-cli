import { promisify } from 'util';
import { exec } from 'child_process';
const execAsync = promisify(exec);

export const downloadRepo = async (repoUrl: string, targetPath: string) => {
  try {
    await execAsync(`git clone ${repoUrl} ${targetPath}`);
  } catch (error: any) {
    throw new Error(`Failed to create project: ${error.message}`);
  }
};
