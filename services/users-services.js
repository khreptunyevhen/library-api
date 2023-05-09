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

export const addUser = (userInfo, permissions) => {
  const users = db?.data?.users;
  const [password, email] = userInfo;

  const existUser = users.filter((user) => {
    return user.email === email;
  });

  if (existUser.length > 0) {
    console.log("User already exist.".bold.red);
    return users;
  }

  const user = createUser(userInfo, permissions);
  users.push(user);

  db.write();
  return users;
};

export const deleteUser = (userId) => {
  const users = db?.data?.users;

  if (!users[userId]) {
    console.log(`Cannot found user with id ${userId}`);
    return;
  }

  users.splice(userId, 1);

  db.write();
  return users;
};

export const updateUser = (userInfo, userId) => {
  const users = db?.data?.users;

  if (!users[userId]) {
    console.log(`Cannot found user with id ${userId}.`.red);
    return;
  }

  const user = users[userId];

  for (const info in user) {
    if (userInfo.hasOwnProperty(info)) {
      user[info] = userInfo[info];
    }
  }

  console.log(users);

  db.write();
  return users;
};
