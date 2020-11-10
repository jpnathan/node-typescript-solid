import { User } from '../user.base';

/**
 * I -> Interface Segregation Principle
 * Many small, client-specific interfaces, are better than one general purpose interface;
 */

export interface IUserRepository {
	create(user: User): Promise<User>;
	find(query: IUserFind): Promise<User | undefined>;
}

export interface IUser {
	userName: string;
	email: string;
	password: string;
	address: IUserAddress;
}

export interface IUserFind {
	userName?: string;
	email?: string;
}

export interface IUserAddress {
	street: string;
	district: string;
	number: string;
	postalCode: IUserAddressPostalCode;
}

export interface IUserAddressPostalCode {
	preffix: number;
	suffic: number;
}
