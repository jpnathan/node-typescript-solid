import { RepositoryBase } from '../../shared/base/repository';
import { User } from './user.base';
import { IUserRepository, IUserFind } from './create/create-user.interface';

export class UserRepository
	extends RepositoryBase<User>
	implements IUserRepository {
	public async create(user: User): Promise<User> {
		return this.save(user, 'User');
	}

	public async find(query: IUserFind): Promise<User> {
		return super.find(query);
	}
}
