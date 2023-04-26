import cors from "cors"
import dotenv from "dotenv"
import express from "express"
const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))