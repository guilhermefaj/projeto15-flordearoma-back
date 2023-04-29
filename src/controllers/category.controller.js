import { db } from "../database/database.connection.js"
import { v4 as uuidv4 } from 'uuid';


export async function getCategory(req, res) {

  try {
    // Geração de um ID único para o produto
    const id = uuidv4();

    // Validação dos dados recebidos com Joi
    const { error, value } = productSchema.validate(req.body);

    if (error) {
      // Se houver erros de validação, retornar um erro 400 (Bad Request)
      throw new Error(error);
    }

    // Verificação se já existe um produto com o mesmo nome
    const existingProduct = await db.collection('products').findOne({ name: value.name });
    if (existingProduct) {
      throw new Error('Já existe um produto com este nome.');
    }

    // Adição do ID ao objeto do produto
    value.id = id;

    // Adição do produto ao banco de dados
    const result = await db.collection('products').insertOne(value);

    res.status(201).send(value);

  } catch (err) {
    // Tratamento do erro
    console.error('Erro ao adicionar produto:', err);
    res.status(500).json({ message: 'Ocorreu um erro ao adicionar o produto.' });
  }
}



export async function getUserCategory(req, res) {
  try {
    const products = await db.collection('products').find().toArray();
    res.json(products);
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os produtos.' });
  }
}

export async function updateStock(req, res) {

  const { productsArray } = req.body;

  try {
    for (const product of productsArray) {
      const id = product.id;
      const count = product.count;
      const filter = { id: id };
      const update = { $inc: { stock: -count } };
      const options = { returnOriginal: false };
      await db.collection('products').findOneAndUpdate(filter, update, options);
    }

    res.status(200).send('Stock updated successfully.');

  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}