import { Students } from "../../models/students/index.js";

export const getUser = async (username, password) => {
  const user = await Students.findOne({
    where: {
      username,
      password,
    },
  });

  return user;
};
