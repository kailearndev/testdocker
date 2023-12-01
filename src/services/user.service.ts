import api from "./api";
import { user } from "types/user.interface";

const signIn = (data: user) => {
  return api.post(`/users/login`, { user: data });
};

const UserService = {
  signIn,
};

export default UserService;
