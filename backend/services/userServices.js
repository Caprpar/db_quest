const db = require("../connectionMySQL");

const getAllUsers = async () => {
  const [rows] = await db.promise().query('SELECT * FROM user');
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await db.promise().query('SELECT * FROM user WHERE id = ?', [id]);
  return rows[0];
};

const createUser = async (name) => {
  const [result] = await db.promise().query('INSERT INTO user (name) VALUES (?)', [name]);
  return { id: result.insertId, name };
};

const updateUser = async (id, name) => {
  const [result] = await db.promise().query('UPDATE user SET name = ? WHERE id = ?', [name, id]);
  if (result.affectedRows === 0) return null;
  return { id, name };
};

const deleteUser = async (id) => {
  const [result] = await db.promise().query('DELETE FROM user WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
