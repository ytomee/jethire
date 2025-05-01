import mongoose from 'mongoose';
import User from '../../../models/user';

const MONGODB_URI = process.env.MONGODB_URL || '';

if (!mongoose.connections[0].readyState) {
  mongoose.connect(MONGODB_URI);
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao procurar utilizadores' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}