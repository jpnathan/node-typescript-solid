import { Router } from 'express';
import { createUserController } from './create';

const route = Router();

route.post('/user/create', (req, res) => {
	return createUserController.execute(req, res);
});

export default route;
