import { db } from "../data/db.js";

export const auth = (permission) => {
  if (!permission || !["admin", "read"].includes(permission)) {
    throw new Error(`User doesn't have the permission ${permission}.`.red);
  }

  return async (req, res, next) => {
    const reqHeader = req.headers;

    if (!reqHeader["x-password"] || !reqHeader["x-email"]) {
      res.json({ message: "User not authorized." });
      return;
    }

    const user = await db.data.users.find((user) => {
      return (
        user.email === reqHeader["x-email"] &&
        user.password === reqHeader["x-password"]
      );
    });

    if (!user) {
      res.status(401).json({ message: "User not authorized." });
      return;
    }

    const hasPermission =
      user.permission && user.permission.includes(permission);

    if (!hasPermission) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    next();
  };
};
