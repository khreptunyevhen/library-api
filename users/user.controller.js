import { getUsers } from "../services/users-services.js";

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
