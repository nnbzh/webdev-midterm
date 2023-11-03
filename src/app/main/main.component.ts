import { Component } from '@angular/core';
import {Post} from "../modules/database/models/post";
import {PostService} from "../post.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  posts: Post[] = [];
  constructor(private postService: PostService, private userService: UserService) {
    this.postService = postService;
    this.userService = userService;
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts(null).map(p => {
      p.user = this.userService.getUserById(p.user_id);

      return p;
    });
  }

  like(id: number) {
    let post = this.postService.like(id);
    this.posts.map(p => p.id == id ? post : p);
  }
}
