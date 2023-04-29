import { db } from "../database/database.connection.js";

export async function checkout(req, res) {
    const { productsArray, total, address, city, state, cep, name, cardNumber, nameOnCard, expirationDate, securityCode } = req.body;

    try {
        const session = res.locals.session;
        await db.collection("sales").insertOne({ userId: session.userId, productsArray, total, address, city, state, cep, name, cardNumber, nameOnCard, expirationDate, securityCode });
        res.sendStatus(200);
    } catch (err) {
        return res.status(500).send(err.message);
    }

}