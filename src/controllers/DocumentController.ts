import { Request, Response } from 'express';
import path from 'path';
import constants from '../helpers/constants';
import { writeFile, createDir, createFile, readFile } from '../helpers/utils';

class DocumentController {
    static async retrieve(req: Request, res: Response): Promise<Response> {
        const DIR_PATH = path.join('src', constants.DB_DIR_NAME);
        const FILE_PATH = path.join(DIR_PATH, constants.DB_FILE_NAME);
        const content = readFile(FILE_PATH);

        return res.send(content);
    }

    static async broadcast(req: Request, res: Response): Promise<Response> {
        const { content } = req.body;
        if (!content) return res.status(400).send('Missing document content');
        const DIR_PATH = path.join('src', constants.DB_DIR_NAME);
        const FILE_PATH = path.join(DIR_PATH, constants.DB_FILE_NAME);
        createDir(DIR_PATH);
        createFile(FILE_PATH);
        writeFile(FILE_PATH, content);
        req.io.emit('update document', readFile(FILE_PATH));
        return res.send();
    }
}

export default DocumentController;
