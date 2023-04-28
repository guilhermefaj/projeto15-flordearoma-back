import { db } from "../database/database.connection.js";

export async function getRecommendations(req, res) {
    const { categories } = req.params
    const cat = categories.toLowerCase()

    try {
        const recommendations = await db.collection("products")
            .find({ category: cat })
            .limit(4)
            .toArray()

        res.status(200).send(recommendations)
    } catch (err) {
        res.status(500).send(err.message)
    }
}