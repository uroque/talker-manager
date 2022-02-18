module.exports = ((req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401)
        .json({ message: 'Token não encontrado' });
    } 
    
    if (token.length < 16) {
      return res.status(401)
        .json({ message: 'Token inválido' });
    }
    return next();
  } catch (error) {
    return next(error);
  }
});