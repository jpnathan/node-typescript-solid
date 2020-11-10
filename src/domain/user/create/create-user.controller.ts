import { BaseController } from '../../../shared/base/controller';
import { Request, Response } from 'express';
import { IUserRepository } from './create-user.interface';
import CreateUserValidator from './create-user.validator';
import { User } from '../user.base';

/**
 * S -> Single Responsibility Principle
 * This class have the single Responsibility of create user
 */
export class CreateUserController extends BaseController {
	constructor(
		/**
		 * D -> Dependency Inversion Principle
		 * We do not depends on class implementation, we depend on the
		 * abstraction of the class.
		 *
		 * L -> Liskov Substitution Principle
		 * It doesn't matter which Repository(mongo, SQL, Postgres) we receive,
		 * what matters is that we depends on a contract. If the Repository
		 * implements the contract, we're fine.
		 */
		private userRepository: IUserRepository
	) {
		super();
	}

	protected async executeImpl(
		req: Request,
		res: Response
	): Promise<void | unknown> {
		try {
			const { userName, email, password } = req.body;
			const user = new User({ userName, email, password });
			const validatedUser = CreateUserValidator.validate(user);

			if (validatedUser.error) {
				return this.clientError(res, validatedUser.value);
			}

			const userAlreadyExist = await this.userRepository.find({ email });

			if (userAlreadyExist) {
				return this.fail(res, 'User or password incorrect!');
			}

			const userSaved = await this.userRepository.create(validatedUser.value);

			return this.ok(res, userSaved);
		} catch (err) {
			return this.fail(res, err.toString());
		}
	}
}
