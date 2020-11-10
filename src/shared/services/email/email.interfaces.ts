interface IEmailAddress {
	email: string;
	name: string;
}

export interface IEmailMessage {
	to: IEmailAddress;
	from: IEmailAddress;
	subject: string;
	body: string;
}

export interface IEmailBase {
	send(message: IEmailMessage): Promise<void>;
}
