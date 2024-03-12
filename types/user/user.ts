export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  updated_at: string;
  created_at: string;
  image: string;
}

export interface VerifyUser {
  user: User;
  token: string;
}
