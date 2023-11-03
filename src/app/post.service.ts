import {Injectable} from '@angular/core';
import {POSTS} from "./modules/database/storage/posts";
import {Post} from "./modules/database/models/post";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }

  public getPosts(userId: any = null): Post[] {
    return POSTS;
  }

  public like(id: number): Post|undefined {
    let post = this.getPosts().filter(p => p.id == id).pop();

    if (post) {
      post.likes += 1;
    }

    return post;
  }

}
