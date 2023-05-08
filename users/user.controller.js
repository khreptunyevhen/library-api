import { getUsers, addUser } from "../services/users-services.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();

    if (!users) {
      res.statusCode = 200;
      res.json({ message: "Cannot found users." });
    }

    res.statusCode = 200;
    res.json(users);
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

    const users = await addUser(userInfo);

    res.statusCode = 200;
    res.json(users);
  } catch (err) {
    res.statusCode = 500;
    res.send(err);
  }
};
