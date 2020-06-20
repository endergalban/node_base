import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../../database/models/user';

const secret = process.env.JWT_SECRET;

const controller = {
  authenticate: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user
        || !bcrypt.compareSync(req.body.password, user.password)
        || !user.enabled
      ) {
        return res.status(403).json({
          errors: 'Usuario no encontrado',
        });
      }

      const token = jwt.sign({
        data: user.id,
      }, secret, { expiresIn: 60 * 60 * 24 * 30 }); // Expira en 30 días

      return res.json({ token });
    } catch (error) {
      return res.json({
        errors: error,
      });
    }
  },
};

export default controller;
