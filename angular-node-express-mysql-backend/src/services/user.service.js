const { v4: uuidv4 } = require('uuid');
const db = require("../database");
const { hashPassword } = require('../utils/helpers');

class UserService {

  async findUserByEmail (email) {
    try {
      return await db.query('SELECT * FROM users WHERE email=?', [email]);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Something went wrong' });
    }
    
  }

  async saveUser (user) {
    const id = uuidv4();
    const hashedPassword = await hashPassword(user.password);

    return await db.query(
      'INSERT INTO users (id, username, email, password) VALUE (?, ?, ?, ?)', 
      [id, user.name, user.email, hashedPassword]
    );
  }
}

const userService = new UserService();

module.exports = { userService };