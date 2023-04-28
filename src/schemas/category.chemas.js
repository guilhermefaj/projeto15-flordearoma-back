import joi from "joi"


export const productSchema = joi.object({
    name: joi.string().required(),
    value: joi.number().required(),
    category: joi.string().required(),
    URL: joi.string().uri().required(),
    stock: joi.number().integer().min(0).required(),
    description: joi.array().items(joi.string()).required()
  });
  