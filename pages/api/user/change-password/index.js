import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";
import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/user";

export default async function handler(req, res) {

  console.log("Passou aqui");

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido." });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) {
    return res.status(401).json({ message: "Não autorizado." });
  }

  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    await connectMongoDB();

    const user = await User.findOne({ email: session.user.email }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "Utilizador não encontrado." });
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return res.status(403).json({ message: "Palavra-passe atual incorreta." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Palavra-passe atualizada com sucesso." });
  } catch (error) {
    console.error("Erro ao atualizar palavra-passe:", error);
    return res.status(500).json({ message: "Erro no servidor." });
  }
}
