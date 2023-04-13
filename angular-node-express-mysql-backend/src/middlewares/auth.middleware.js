const jwt = require('jsonwebtoken');

const authorizationMiddleware = (request, response, next) => {
  const token = request.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return response.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('jwt.verify err');
      return response.status(401).json({ message: 'Unauthorized' });
    }
    request.user = user;
    next();
  });
}

module.exports = {
  authorizationMiddleware
}