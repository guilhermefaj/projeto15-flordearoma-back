import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";
import { db } from "./database/database.connection.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))






import { v4 as uuidv4 } from 'uuid';
import joi from "joi"


// Armazenamento temporário dos produtos
const productSchema = joi.object({
    name: joi.string().required(),
    value: joi.number().required(),
    category: joi.string().required(),
    URL: joi.string().uri().required(),
    stock: joi.number().integer().min(0).required()
  });
  
// Rota para adicionar um novo produto
// Rota para adicionar um novo produto
app.post('/products', async (req, res) => {
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
      
      
      
   
        res.status(201).json(value);
     
      } catch (err) {
        // Tratamento do erro
        console.error('Erro ao adicionar produto:', err);
        res.status(500).json({ message: 'Ocorreu um erro ao adicionar o produto.' });
      }
  });
  