export const getRandomAge = (maxAge) => {
  const age = Math.floor(Math.random() * maxAge + 1);

  return age;
};
