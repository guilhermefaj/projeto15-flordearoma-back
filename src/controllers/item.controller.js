import { db } from "../database/database.connection.js";

export async function getItems(req, res) {
    const { itemId } = req.params
    const { id, name, value, category, URL, stock } = req.body

    try {
        const items = await db.collection("products").find({ id: itemId }).toArray()

        res.status(200).send(items)
    } catch {
        res.status(500).send(err.message)
    }
}