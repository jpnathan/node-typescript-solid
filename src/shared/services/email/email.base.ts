import { IEmailBase, IEmailMessage } from './email.interfaces';

export abstract class EmailBase implements IEmailBase {
	abstract async send(message: IEmailMessage): Promise<void>;
}
