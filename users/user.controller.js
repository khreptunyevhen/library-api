import {
  getUsers,
  addUser,
  getUser,
  deleteUser,
  updateUser,
} from "../services/users-services.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();

    if (!users) {
      res.statusCode = 200;
      res.json({ message: "Cannot found users." });
      return;
    }

    res.statusCode = 200;
    res.json(users);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await getUser(userId);

    if (!user) {
      res.statusCode = 400;
      res.json({ message: `Cannot found user with id ${userId}.` });
      return;
    }

    res.statusCode = 200;
    res.json(user);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

export const addNewUser = async (req, res) => {
  try {
    const header = req.headers;

    if (!header["x-password"] || !header["x-email"]) {
      res.statusCode = 200;
      res.json({ message: "You must enter a username or password.." });
      return;
    }

    const userInfo = [header["x-password"], header["x-email"]];

    const users = await addUser(userInfo, ["admin"]);

    res.statusCode = 200;
    res.json(users);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const users = await deleteUser(userId);

    if (!users) {
      res.statusCode = 400;
      res.json({ message: `Cannot found user with id ${userId}.` });
      return;
    }

    res.statusCode = 200;
    res.json(users);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const userBody = req.body;

    const users = await updateUser(userBody, userId);

    if (!users) {
      res.statusCode = 400;
      res.json({ message: `Cannot found user with id ${userId}.` });
      return;
    }

    res.statusCode = 200;
    res.json({ users });
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};
