import { User } from "../user/user";

export interface RegisterUser {
  name: string;
  username: string;
  password: string;
  password_confirmation: string;
  email: string;
}

export interface RegisterUserResponse {
  user: User;
  token: string;
}

export interface LoginUserResponse {
  user: User;
  token: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
