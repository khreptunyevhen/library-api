import { db } from "../data/db.js";
import { createUser } from "../utils/create-user.js";

export const getUsers = () => {
  const users = db?.data?.users;

  return users;
};

export const getUser = (id) => {
  const users = db?.data?.users;
  const user = users[id];

  return user;
};

export const addUser = (userInfo) => {
  const users = db?.data?.users;
  const [password, email] = userInfo;

  const existUser = users.filter((user) => {
    return user.email === email;
  });

  if (existUser.length > 0) {
    console.log("User already exist.".bold.red);
    return users;
  }

  const user = createUser(userInfo);
  users.push(user);

  db.write();
  return users;
};
