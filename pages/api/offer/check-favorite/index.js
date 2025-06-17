import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/user";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).json({ error: "Não autenticado" });

    const { offerId } = req.body;

    try {
        await connectMongoDB();
        const user = await User.findOne({ email: session.user.email });
        const saved = user.savedOffers.includes(offerId);
        return res.status(200).json({ saved });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Erro ao verificar favorito" });
    }
}
