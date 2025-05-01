import connectMongoDB from "../../../lib/mongodb";
import User from "../../../models/user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    try {
        await connectMongoDB();

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Este email já está registado.", error: "EMAIL_ALREADY_EXISTS" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            type: "user",
            name: fullname,
            email: email,
            password: hashedPassword,
        });

        await newUser.save();

        return res.status(201).json({ message: "Utilizador registado com sucesso!" });
    } catch (error) {
        console.error("Erro no registro:", error);
        return res.status(500).json({ message: "Erro ao registar utilizador.", error: error.message });
    }
}