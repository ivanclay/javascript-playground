import { Router } from 'express';
import SessionController from './controllers/SessionController';

const routes = new Router();

routes.post('/sessions', function(req, res){
    console.log('chegou')
    SessionController.store();
    console.log('saiu')
});


export default routes;