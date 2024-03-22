export interface Crumb {
  id: string;
  name: string;
  created_at: string;
  admin: CrumbAdmin;
  image: string;
  description: string;
  members_count: number;
  privacy: boolean;
}

export interface CrumbAdmin {
  id: string;
  name: string;
}

export interface CrumbRequest {
  id: number;
  group_id: number;
  user_id: number;
  updated_at: string;
  created_at: string;
}
