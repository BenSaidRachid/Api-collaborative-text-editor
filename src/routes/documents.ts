import { Router } from 'express';
import DocumentController from '../controllers/DocumentController';

const routes = Router();

routes.post('/', DocumentController.broadcast);
routes.get('/', DocumentController.retrieve);

export default routes;
