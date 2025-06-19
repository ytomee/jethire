import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import connectMongoDB from "../../../../lib/mongodb";
import Offer from "../../../../models/offer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        return res.status(401).json({ message: "Não autenticado" });
    }

    const { offerId } = req.body;
    if (!offerId) {
        return res.status(400).json({ message: "ID da oferta em falta" });
    }

    try {
        await connectMongoDB();

        const offer = await Offer.findById(offerId);
        if (!offer) {
            return res.status(404).json({ message: "Oferta não encontrada" });
        }

        const userId = session.user.id;

        const candidateIndex = offer.candidates.findIndex(
            (c) => c.user.toString() === userId
        );

        if (candidateIndex !== -1) {
            offer.candidates.splice(candidateIndex, 1);
            await offer.save();
            return res.status(200).json({ message: "Candidatura removida.", applied: false });
        } else {
            offer.candidates.push({ user: userId });
            await offer.save();
            return res.status(200).json({ message: "Candidatura registada com sucesso.", applied: true });
        }

    } catch (error) {
        console.error("Erro ao fazer toggle da candidatura:", error);
        return res.status(500).json({ message: "Erro interno do servidor." });
    }
}
