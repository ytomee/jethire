import connectMongoDB from "../../../lib/mongodb";
import Contact from "../../../models/contact";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end("Método não permitido!");

    await connectMongoDB();

    const { name, company, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Preencha todos os campos obrigatórios." });
    }

    try {
        const newMessage = new Contact({ name, company, email, phone, message });
        await newMessage.save();
        return res.status(200).json({ message: "Mensagem recebida com sucesso." });
    } catch (error) {
        console.error("Erro ao guardar a mensagem:", error);
        return res.status(500).json({ error: "Erro interno no servidor." });
    }
}
