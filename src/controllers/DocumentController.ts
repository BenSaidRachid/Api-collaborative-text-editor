import { Request, Response } from 'express';

class DocumentController {
    static async retrieve(req: Request, res: Response): Promise<Response> {}

    static async broadcast(req: Request, res: Response): Promise<Response> {}
}

export default DocumentController;
