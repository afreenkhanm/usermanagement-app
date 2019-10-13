import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userServiceurl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) { }

  public addUser(user: User) {
    return this.http.post<any>(this.userServiceurl, user);
  }

  public getAllUsers() {
    return this.http.get<User[]>(this.userServiceurl);
  }

  public getUser(userId : number) {
    const userUrl = this.userServiceurl + '/' + userId;
    return this.http.get<User>(userUrl);
  }

  public updateUser(userId: number, user: User) {
    const userUrl = this.userServiceurl + '/' + userId;
    return this.http.put<any>(userUrl, user);
  }

  public deleteUser(userId: number) {
    const deleteUserUrl = this.userServiceurl + '/' + userId;
    return this.http.delete<any>(deleteUserUrl);
  }


}
