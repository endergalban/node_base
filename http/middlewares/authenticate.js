import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  jwt.verify(req.get('x-access-token'), process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        mensaje: 'usuario no valido',
      });
    }
    req.jwtUser = decoded.data; // eslint-disable-line
    return next();
  });
};

export default authenticate;
