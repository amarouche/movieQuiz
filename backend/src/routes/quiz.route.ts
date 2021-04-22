import { Router } from 'express';
import * as quizController from '../controllers/quiz.controller';

const routes = Router();
routes.get('/question', quizController.createQuestion);
routes.get('/score', quizController.getHightScore);
routes.post('/score', quizController.saveHightScore);

module.exports = routes;