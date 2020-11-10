import Joi from 'joi';

export default Joi.object({
	id: Joi.string().required(),
	userName: Joi.string().required(),
	email: Joi.string().required(),
	password: Joi.string().required()
});
