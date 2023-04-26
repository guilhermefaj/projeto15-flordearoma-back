import joi from "joi";

export const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).error(errors => {
        return new Error('A senha deve conter pelo menos uma letra e um número');
    }).required()
})

export const userLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).error(errors => {
        return new Error('A senha deve conter pelo menos uma letra e um número');
    }).required()
})