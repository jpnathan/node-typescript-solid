import { CreateUserController } from './create-user.controller';
import { UserRepository } from '../user.repository';

const userRepo = new UserRepository();
const createUserController = new CreateUserController(userRepo);

export { createUserController };
