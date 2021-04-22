import { Router } from 'express';
import * as personController from '../controllers/person.controller';

const routes = Router();
routes.get('/randomPerson', personController.getRandomPerson);
routes.get('/:id', personController.getPersonById);

module.exports = routes;