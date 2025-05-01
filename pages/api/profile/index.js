import connectMongoDB from "../../../lib/mongodb";
import User from "../../../models/user";
import { getToken } from "next-auth/jwt";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  secure: true,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "2mb",
    },
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectMongoDB();

      const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
      const userId = token.id;

      const { pfp, banner, cv, ...formData } = req.body;

      if (pfp) {
        const user = await User.findById(userId);
        const oldId = user?.profile?.pfp_id;
      
        if (oldId) {
          try {
            await cloudinary.uploader.destroy(oldId);
          } catch (err) {
            console.error("Erro ao apagar imagem antiga:", err);
          }
        }
      
        const uploadRes = await cloudinary.uploader.upload(`data:image/jpeg;base64,${pfp}`, {
          folder: "pfp",
        });
      
        formData.profile = {
          ...formData.profile,
          pfp: uploadRes.secure_url,
          pfp_id: uploadRes.public_id,
        };
      }

      if (banner) {
        const user = await User.findById(userId);
        const oldId = user?.profile?.banner_id;
      
        if (oldId) {
          try {
            await cloudinary.uploader.destroy(oldId);
          } catch (err) {
            console.error("Erro ao apagar imagem antiga:", err);
          }
        }
      
        const uploadRes = await cloudinary.uploader.upload(`data:image/jpeg;base64,${banner}`, {
          folder: "banner",
        });
      
        formData.profile = {
          ...formData.profile,
          banner: uploadRes.secure_url,
          banner_id: uploadRes.public_id,
        };
      }

      if (cv) {
        const user = await User.findById(userId);
        const oldId = user?.profile?.cv_id;
      
        if (oldId) {
          try {
            await cloudinary.uploader.destroy(oldId);
          } catch (err) {
            console.error("Erro ao apagar imagem antiga:", err);
          }
        }
      
        const uploadRes = await cloudinary.uploader.upload(`data:image/jpeg;base64,${cv}`, {
          folder: "cv",
        });
      
        formData.profile = {
          ...formData.profile,
          cv: uploadRes.secure_url,
          cv_id: uploadRes.public_id,
        };
      }
      
      const user = await User.findByIdAndUpdate(
        userId,
        { $set: formData },
        { new: true, upsert: false }
      );

      if (!user) {
        return res.status(404).json({ message: "Utilizador não encontrado" });
      }

      return res.status(200).json({ message: "Perfil atualizado com sucesso!", user });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Erro ao atualizar perfil" });
    }
  } else {
    return res.status(405).json({ message: "Método não permitido" });
  }
}
