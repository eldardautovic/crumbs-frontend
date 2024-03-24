export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  updated_at: string;
  created_at: string;
  image: string;
}

export interface UserEdit {
  name?: string;
  username?: string;
  image?: string | File;
  current_password?: string;
  new_password?: string;
}
