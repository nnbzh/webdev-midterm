import {User} from "./user";

export interface Post {
  id: number;
  content: string;
  likes: number;
  posted_at: string;
  user_id: number;
  user?: User;
}
