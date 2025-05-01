import connectMongoDB from "../../../lib/mongodb";
import companyRequest from "../../../models/companyRequest";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  await connectMongoDB();

  try {
    const newRequest = await companyRequest.create(req.body);

    return res.status(201).json({ message: "Pedido guardado com sucesso", id: newRequest._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao guardar o pedido" });
  }
}
