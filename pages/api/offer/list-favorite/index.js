import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/user";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);

    if (!session || !session.user?.email) {
        return res.status(401).json({ error: "Não autenticado" });
    }

    try {
        await connectMongoDB();
        const user = await User.findOne({ email: req.query.email }).select("savedOffers");
        const savedIds = user?.savedOffers?.map(id => id.toString()) || [];
        return res.status(200).json(savedIds);
    } catch (error) {
        console.error("Erro ao buscar ofertas guardadas:", error);
        return res.status(500).json({ error: "Erro do servidor" });
    }
}
