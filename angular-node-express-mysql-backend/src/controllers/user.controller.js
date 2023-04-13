const bcrypt = require('bcrypt');
const { userService } = require('../services/user.service');
const { generateToken } = require('../utils/helpers');

const register = async (request, response) => {
  const newUser = request.body;
  try {
    const { results } = await userService.findUserByEmail(newUser.email);
    if (!!results) {
      const { results } = await userService.saveUser(newUser);
      return response.json(results)
    }    
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

const login = async (request, response) => {
  const { email, password } = request.body;
  
  try {
    const { results } = await userService.findUserByEmail(email);
    if (results.length) {
      const hashedPassword = results[0].password;
      const match = await bcrypt.compare(password, hashedPassword);
      if (match) {
        const user = {
          name: results[0].username,
          email: results[0].email,
        };
        const token = await generateToken(user);
        return response.status(200).send({user, token});
      }
      return response.status(400).send({ message: 'Wrong email or password.' });
    }   
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

const user = (request, response) => {
  response.json(request.user)
};

module.exports = {
  register,
  login,
  user
}