const { v4: uuidv4 } = require('uuid');
const db = require('../database');
const { userService } = require('../services/user.service');

const getListOfTasks = async (request, response) => {
  // const { sortBy = 'createdAt', sortOrder = 'DESC' } = request.query;
  try {
    const { results } = await db.query('SELECT * FROM tasks ORDER BY createdAt DESC');
    // const { results } = await db.query('SELECT * FROM tasks ORDER BY ?? ?', [sortBy, sortOrder]);
    return response.json(results)
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

const getListOfUserTasks = async (request, response) => {
  const { email } = request.user;
  const { results } = await userService.findUserByEmail(email);
  const userId = results[0].id;
  try {
    const { results } = await db.query('SELECT * FROM tasks WHERE userId=? ORDER BY createdAt DESC', [userId]);
    return response.json(results)
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

const getSingleTask = async (request, response) => {
  const { id } = request.params;

  try {
    const { results } = await db.query('SELECT * FROM tasks WHERE id=?', [id]);
    return response.json(results)
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

const addTask = async (request, response) => {
  const { email } = request.user;
  const { results } = await userService.findUserByEmail(email);
  const id = uuidv4();
  const { description } = request.body;
  const createdAt = new Date();
  const userId = results[0].id;
  
  try {
    await db.query(`
      INSERT INTO tasks (id, description, createdAt, userId) 
        VALUES (?, ?, ?, ?)
    `, [id, description, createdAt, userId]);
    return response.json({ message: 'Success' })
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

const editTask = async (request, response) => {
  const { id } = request.params;
  const { description } = request.body;

  try {
    await db.query('UPDATE tasks SET description=? WHERE id=?', [description, id]);
    return response.json({ message: 'Success' })
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

const toogleDoneStatus = async (request, response) => {
  const task = request.body;

  try {
    await db.query('UPDATE tasks SET done=? WHERE id=?', [!task.done, task.id])
    return response.json({...task, done: !task.done})
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

const deleteTask = async (request, response) => {
  const { id } = request.params;

  try {
    await db.query('DELETE FROM tasks WHERE id=?', [id]);
    return response.json({ message: 'Success' })
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Something went wrong' });
  }
}

module.exports = {
  getListOfTasks,
  getListOfUserTasks,
  getSingleTask,
  addTask,
  editTask,
  toogleDoneStatus,
  deleteTask
}