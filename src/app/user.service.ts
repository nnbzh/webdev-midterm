import {Injectable} from '@angular/core';
import {USERS} from "./modules/database/storage/users";
import {User} from "./modules/database/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public getUserById(id: number): User|undefined {
    return this.getUsers().filter(u => u.id = id).pop()
  }

  public getUsers(): User[] {
    return USERS;
  }
}
