import { deleteAsync } from 'del';
import { execSync } from 'child_process';

await deleteAsync('./build');
execSync('style-dictionary build');
