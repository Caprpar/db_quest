const userService = require("../services/userServices");

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  
  // try {
  //   const newUser = await userService.createUser(req.body.name);
  //   res.status(201).json(newUser);
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }
  const { name, type } = req.body;

  if (!name || !type) {
    return res.status(400).json({ message: "Namn och typ krävs" });
  }

  try {
    if (type === "register") {
      const existingUser = await userService.findUserByName(name);
      if (existingUser) {
        return res.status(409).json({ message: "Namnet är redan registrerat" });
      }

      const newUser = await userService.createUser(name);
      return res.status(201).json({ message: "Konto skapat", user: newUser });
    }

    if (type === "login") {
      const existingUser = await userService.findUserByName(name);
      if (!existingUser) {
        return res.status(404).json({ message: "Användaren finns inte" });
      }

      return res.status(200).json({ message: "Inloggad", user: existingUser });
    }

    res.status(400).json({ message: "Ogiltig typ" });
  } catch (err) {
    res.status(500).json({ message: "Serverfel", error: err.message });
    console.error('CREATE USER ERROR:', err);
  }
};

const updateUser = async (req, res) => {
  try {
    const updated = await userService.updateUser(req.params.id, req.body.name);
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
