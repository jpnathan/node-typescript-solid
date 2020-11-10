import express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { userRoutes } from './domain/routes';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(userRoutes);

app.listen(process.env.PORT, () => {
	// eslint-disable-next-line no-console
	return console.log(`server is listening on ${process.env.PORT}`);
});
