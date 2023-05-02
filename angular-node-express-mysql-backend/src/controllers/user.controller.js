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
    const findedUser = results[0];

    if (findedUser) {
      const { results } = await userService.findCompanyById(findedUser.company_id);
      const findedCompany = results[0];
      const hashedPassword = findedUser.password;
      const match = await bcrypt.compare(password, hashedPassword);

      if (match) {
        const user = {
          companyName: findedCompany?.company_name,
          name: findedUser.username,
          email: findedUser.email,
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

const editUser = async (request, response) => {
  const updatedUser = request.body;
  console.log(updatedUser);
  return response.json(updatedUser)
}

module.exports = {
  register,
  login,
  user,
  editUser
}