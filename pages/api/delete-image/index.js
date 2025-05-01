import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    secure: true,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { public_id } = req.body;

    if (!public_id) return res.status(400).json({ error: 'ID da imagem em falta.' });

    try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao apagar imagem.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}
