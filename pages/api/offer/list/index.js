import connectMongoDB from "../../../../lib/mongodb";
import Offer from "../../../../models/offer";
import Company from "../../../../models/company";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongoDB();

      const offers = await Offer.find({ isActive: true })
        .sort({ createdAt: -1 })
        .populate({
          path: "company",
          select: "name logo.secure_url city country"
        });

      res.status(200).json(offers);
    } catch (error) {
      console.error("Erro ao listar ofertas:", error);
      res.status(500).json({ message: "Erro ao obter ofertas." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido." });
  }
}
