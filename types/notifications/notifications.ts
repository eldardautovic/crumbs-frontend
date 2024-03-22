import { User } from "../user/user";

export interface Notification {
  id: string;
  user: User;
  created_at: string;
  read: boolean;
}
