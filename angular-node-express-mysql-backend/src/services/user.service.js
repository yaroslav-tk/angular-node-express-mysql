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
    const userId = uuidv4();
    const hashedPassword = await hashPassword(user.password);

    try {
      const newCompany = await this.saveCompany(user.companyName);
      return await db.query(
        'INSERT INTO users (id, username, email, password, company_id) VALUE (?, ?, ?, ?, ?)', 
        [userId, user.name, user.email, hashedPassword, newCompany.companyId]
      );
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'Something went wrong' });
    }
  }

  async saveCompany (companyName) {
    const companyId = uuidv4();

    try {
      await db.query(
        'INSERT INTO companies (id, company_name) VALUES (?, ?)',
        [companyId, companyName]
      )
      return { companyId, companyName };
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: 'Something went wrong' });
    }
  }

  async updateUser (user) {
    try {
      if (!user.company_id) {
        const newCompany = await this.saveCompany(user.companyName)
        return await db.query(
          `UPDATE users
          SET company_id=?
          WHERE id=?`,
          [newCompany.companyId, user.id]
        )
      } else {
        return await db.query(
          `UPDATE companies 
          SET company_name=?
          WHERE id=?`,
          [user.companyName, user.company_id]
        )
      }
      
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Something went wrong' });
    }
  }
}

const userService = new UserService();

module.exports = { userService };