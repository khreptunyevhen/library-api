import { db } from "../data/db.js";

export const getUsers = () => {
  const users = db?.data?.users;

  console.log(users);
  return users;
};
