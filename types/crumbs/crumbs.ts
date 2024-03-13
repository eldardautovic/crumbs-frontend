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
