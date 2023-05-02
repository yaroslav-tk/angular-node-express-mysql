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

  async findCompanyById (id) {
    try {
      return await db.query('SELECT * FROM companies WHERE id=?', [id])
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'Something went wrong' });
    }
  }

  async saveUser (user) {
    const companyId = uuidv4();
    const userId = uuidv4();
    const hashedPassword = await hashPassword(user.password);
    
    await db.query(
      'INSERT INTO companies (id, company_name) VALUES (?, ?)',
      [companyId, user.companyName]
    )
    return await db.query(
      'INSERT INTO users (id, username, email, password, company_id) VALUE (?, ?, ?, ?, ?)', 
      [userId, user.name, user.email, hashedPassword, companyId]
    );
  }
}

const userService = new UserService();

module.exports = { userService };