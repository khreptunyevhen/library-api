import { faker } from "@faker-js/faker";
import { getRandomAge } from "./random-age.js";

// new Date() - just for receive the random number for study project
export const createUser = (userInfo) => {
  const id = new Date().getTime().toString();
  const name = faker.name.fullName();
  const age = getRandomAge(100);
  const country = faker.address.country();
  const company = faker.company.name();

  const [password, email] = userInfo;

  const user = {
    id,
    email,
    password,
    name,
    age,
    country,
    company,
  };

  return user;
};
