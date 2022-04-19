import fs from 'fs';
import path from 'path';
import process from 'process';

export default (filepath) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8'));
