import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../mongodb.js";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db("test");

    switch (req.method) {
        case "POST":
            const user = await db.collection("users").find({ username: req.body.username }).toArray();
            if (user.length < 1) return res.status(504).json({ message: "No account with this username!" })
            if (user[0].password === req.body.password) {
                return res.json({ status: 200, data: user[0].token });
            } else return res.json({ status: 501, message: "Not authorized!" })
    }
}