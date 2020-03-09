import { User } from "../models";
import bcrypt from "bcrypt";
import { UserInputError } from "apollo-server-express";
import TokenService from "./TokenService";

export default new (class UserService {
  async signup(email, password, confirm) {

  }

  async login(email, password) {

  }
})();
