import joi from "joi";

export const saleSchema = joi.object({
    productsArray: joi.required(),
    total: joi.required(),
    address: joi.required(),
    city: joi.required(),
    state: joi.required(),
    cep: joi.required(),
    name: joi.required(),
    cardNumber: joi.required(),
    nameOnCard: joi.required(),
    expirationDate: joi.required(),
    securityCode: joi.required()
})

