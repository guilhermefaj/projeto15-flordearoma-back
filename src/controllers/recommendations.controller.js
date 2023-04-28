import { db } from "../database/database.connection";

export async function getRecommendations(req, res) {
    const { categories } = req.params

    try {
        const recommendations = await db.collection("products").find({ category: categories }).limit(4).toArray()

        res.status(200).send(recommendations)
    } catch (err) {
        res.status(500).send(err.message)
    }
}