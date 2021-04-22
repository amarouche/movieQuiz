import { Router } from 'express';
import * as movieController from '../controllers/movie.controller';

const routes = Router();
routes.get('/randomMovie', movieController.getRandomMovie);
routes.get('/:id', movieController.getMovie);
routes.get('/:id/credits', movieController.getCreditsBYMovie);

module.exports = routes;