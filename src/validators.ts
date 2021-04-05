import * as Joi from 'joi'
import {
    ContainerTypes,
    // Use this as a replacement for express.Request
    ValidatedRequestSchema,
    // Creates a validator that generates middlewares
    createValidator
} from 'express-joi-validation'

const validator = createValidator();

const userQuerySchema = Joi.object({
    id: Joi.string().required(),
    login: Joi.string().min(4).required(),
    password: Joi.string().min(6).alphanum().required(),
    age: Joi.number().min(4).max(130).required(),
    isDeleted: Joi.boolean().required()
})

interface UserSchema extends ValidatedRequestSchema {
    [ContainerTypes.Query]: {
        id: string,
        login: string,
        password: string,
        age: number,
        isDeleted: boolean
    }
}

export {validator, userQuerySchema, UserSchema}