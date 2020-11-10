import * as crypto from 'crypto';
import { uuid } from 'uuidv4';
import { IUser } from './create/create-user.interface';

export class User implements IUser {
	public readonly id: string | undefined;

	public userName: string;
	public email: string;
	public password: string;

	constructor(props: Omit<User, 'id'>, id?: string) {
		this.userName = props.userName;
		this.email = props.email;
		this.password = crypto
			.createHash('sha256')
			.update(props.password)
			.digest('hex');

		if (!id) {
			this.id = uuid();
		}
	}
}
