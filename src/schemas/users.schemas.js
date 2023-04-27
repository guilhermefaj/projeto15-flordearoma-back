import joi from "joi";

export const userSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).error(errors => {
        return new Error('A senha deve ter no mínimo 5 caracteres e conter pelo menos uma letra e um número.');
    }).required()
})

export const userLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).error(errors => {
        return new Error('A senha deve ter no mínimo 5 caracteres e conter pelo menos uma letra e um número.');
    }).required()
})