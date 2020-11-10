import { EmailBase } from '../email.base';
import { IEmailMessage } from '../email.interfaces';

export class AmazonSESProvider extends EmailBase {
	async send(message: IEmailMessage): Promise<void> {
		// eslint-disable-next-line no-console
		console.log(message);
	}
}
