import 'dotenv/config';
import Joi from 'joi';

interface EnvironmentVariables {
    PORT: number;
}

const envSchema = Joi.object({
    PORT: Joi.number().required(),
})
    .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Config Validation Error: ${error.message}`);
}

const envVars: EnvironmentVariables = value;

export const envs = {
    port: envVars.PORT,
};
