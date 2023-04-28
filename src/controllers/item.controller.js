import { db } from "../database/database.connection.js";

export async function getItems(req, res) {
    const { itemId } = req.params

    const { id, name, value, category, URL, stock } = req.body

    try {
        const items = await db.collection("products").find({ id: itemId }).toArray()

        res.status(200).send(items[0])
    } catch {
        res.status(500).send(err.message)
    }
}

export async function getRecommendations(req, res) {
    const { categories } = req.params

    try {
        const recommendations = await db.collection("products").find({ category: categories }).limit(4).toArray()

        res.status(200).send(recommendations)
    } catch (err) {
        res.status(500).send(err.message)
    }
}