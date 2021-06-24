import { Router } from 'express';
import documents from './documents';

const routes = Router();
routes.use('/documents', documents);

export default routes;
