import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users : any = [];
  public user: any = {};
  public message = '';

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      }, error => {
    });
  }

  addUser(user: User) {
    this.userService.addUser(user)
    .subscribe(data => {
        this.users.push(data);
        this.user = {};
      }, error => {
        console.log(error);
    });
  }

  editUser(userId) {
    this.userService.getUser(userId)
    .subscribe(data => {
        this.user = data;
      }, error => {

    });
  }

  updateUser(user: User) {
    this.userService.updateUser(user.id, user)
    .subscribe(data => {
        this.getUsers();
        this.user = {};
      }, error => {
    });
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
    .subscribe(data => {
        this.getUsers();
        this.user = {};
      }, error => {
    });
  }
}
