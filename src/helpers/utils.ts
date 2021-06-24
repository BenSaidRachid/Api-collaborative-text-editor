import fs from 'fs';

export function createDir(path): void {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
}

export function createFile(path): void {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '');
    }
}

export function writeFile(path, content): void {
    fs.writeFileSync(path, content);
}

export function readFile(path): string {
    return fs.readFileSync(path, 'utf8');
}

export default {
    createDir,
    createFile,
    readFile,
    writeFile,
};
