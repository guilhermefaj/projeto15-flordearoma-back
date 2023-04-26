import { db } from "../database/database.connection.js";
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function signUp(req, res) {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await db.collection("users").findOne({ email });
        if (user) return res.status(409).send("E-mail já cadastrado.");
        const hash = bcrypt.hashSync(password, 10);
        await db.collection("users").insertOne({ firstName, lastName, email, password: hash });
        res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;
    try {
        const user = await db.collection("users").findOne({ email });
        if (!user) return res.status(404).send("E-mail não cadastrado.");
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) return res.status(401).send("Senha incorreta.");

        const token = uuid();
        await db.collection("sessions").insertOne({ userId: user._id, token });
        const infosUser = {
            "token": token,
            "userName": user.firstName
        }
        res.send(infosUser);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}