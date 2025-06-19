import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import connectMongoDB from "../../../../lib/mongodb";
import Offer from "../../../../models/offer";
import User from "../../../../models/user";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).json({ error: "Não autenticado" });

    const { offerId } = req.body;
    if (!offerId) return res.status(400).json({ error: "ID da oferta em falta" });

    try {
        await connectMongoDB();

        const user = await User.findOne({ email: session.user.email });
        if (!user) return res.status(404).json({ error: "Utilizador não encontrado" });

        const offer = await Offer.findById(offerId);
        if (!offer) return res.status(404).json({ error: "Oferta não encontrada" });

        const isCandidate = offer.candidates.some(c => c.user.toString() === user._id.toString());

        return res.status(200).json({ isCandidate });
    } catch (err) {
        console.error("Erro ao verificar candidatura:", err);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}
